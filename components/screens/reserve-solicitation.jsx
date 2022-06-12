import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import MainStyle from "../../styles/main-style";
import ReserveSolicitationStyle from "../../styles/screens/reserve-solicitation-style";
import TextStyle from "../../styles/text-style";

import ListLabs from "./list-labs";
import { getReserveSolicitations } from "../../source/labs-reserve";

const window = Dimensions.get("window");

const ReserveSolicitation = ({ navigation }) => {
  const [reserveSolicitations, setReserveSolicitations] = useState({});

  async function findUserReserves() {
    setReserveSolicitations(await getReserveSolicitations());
  }

  useEffect(() => {
    findUserReserves();
  }, []);

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveSolicitationStyle.title}>Reservas pendentes</Text>

      <View style={ReserveSolicitationWindowStyle.listComponent}>
        <View style={ReserveSolicitationWindowStyle.listComponent}>
          <View style={ReserveSolicitationStyle.headerListRow}>
            <Text style={TextStyle.titleText}>Minhas reservas</Text>
          </View>
          <View style={ReserveSolicitationStyle.list}>
            <ListLabs data={reserveSolicitations}></ListLabs>
          </View>
        </View>
      </View>

      <View style={ReserveSolicitationStyle.buttonContainer}>
        <Button
          color="#D8222F"
          title="Rejeitar todas"
          onPress={() => navigation.navigate("MainAdmin")}
        />
      </View>

      <View style={ReserveSolicitationStyle.buttonContainer}>
        <Button
          color="#32CD32"
          title="Aceitar todas"
          onPress={() => navigation.navigate("MainAdmin")}
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

const ReserveSolicitationWindowStyle = StyleSheet.create({
  listComponent: {
    flex: 3,
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    width: window.width - 64,
  },
});

export default ReserveSolicitation;
