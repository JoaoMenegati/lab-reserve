import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import MainStyle from "../../styles/main-style";
import ReserveSolicitationStyle from "../../styles/screens/reserve-solicitation-style";

import ListSolicitations from "./list-solicitations";
import { getReserveSolicitations } from "../../source/reserve-solicitation";
import {
  removeSolicitation,
  acceptSolicitation,
} from "../../source/reserve-solicitation";

const window = Dimensions.get("window");

const ReserveSolicitation = ({ navigation }) => {
  const [reserveSolicitations, setReserveSolicitations] = useState({});

  async function findReserveSolicitations() {
    setReserveSolicitations(await getReserveSolicitations());
  }

  async function rejectAll() {
    await reserveSolicitations.forEach((reserve) => {
      removeSolicitation(reserve.uid);
    });
    navigation.navigate("MainAdmin");
  }

  async function acceptAll() {
    await reserveSolicitations.forEach((reserve) => {
      acceptSolicitation(reserve);
    });
    navigation.navigate("MainAdmin");
  }

  function removeItemFromList(reserve) {
    const array = reserveSolicitations;
    const index = reserveSolicitations.indexOf(reserve);

    if (index > -1) {
      array.splice(index, 1);
    }

    setReserveSolicitations(array);
  }

  useEffect(() => {
    findReserveSolicitations();
  }, []);

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveSolicitationStyle.title}>Reservas pendentes</Text>

      <View
        style={[
          ReserveSolicitationStyle.listComponent,
          { width: window.width - 64 },
        ]}
      >
        <View syle={ReserveSolicitationStyle.list}>
          <ListSolicitations
            data={reserveSolicitations}
            height={window.height / 1.4}
            removeFromList={(reserve) => {
              removeItemFromList(reserve);
            }}
          ></ListSolicitations>
        </View>
      </View>

      <View style={ReserveSolicitationStyle.buttonContainer}>
        <Button
          color="#D8222F"
          title="Rejeitar todas"
          onPress={() => rejectAll()}
        />
      </View>

      <View style={ReserveSolicitationStyle.buttonContainer}>
        <Button
          color="#32CD32"
          title="Aceitar todas"
          onPress={() => acceptAll()}
        />
      </View>

      <View style={ReserveSolicitationStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Voltar"
          onPress={() => navigation.navigate("MainAdmin")}
        />
      </View>
    </View>
  );
};

export default ReserveSolicitation;
