import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

import MainStyle from "../../styles/main-style";
import ReserveSolicitationStyle from "../../styles/screens/reserve-solicitation-style";
import TextStyle from "../../styles/text-style";

import ListLabs from "./list-labs";

const window = Dimensions.get("window");

const ReserveSolicitation = ({ navigation }) => {
  const DATA = [
    {
      id: "0",
      hour: "09:00 - 09:50",
      teacher: "Professor Sergio",
      lab: "LabQuimica2",
    },
    {
      id: "1",
      hour: "10:00 - 10:40",
      teacher: "Manutenção Programada",
      lab: "LabProdSoftware",
    },
    {
      id: "2",
      hour: "10:50 - 12:40",
      teacher: "Professor Marcos",
      lab: "LabTopoGeo",
    },
    {
      id: "3",
      hour: "13:00 as 15:50",
      teacher: "Professora Maria",
      lab: "LabQuimica",
    },
    {
      id: "4",
      hour: "16:00 - 17:50",
      teacher: "Professor Carlos",
      lab: "LabQuimica3",
    },
    {
      id: "5",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
      lab: "LabQuimica5",
    },
    {
      id: "6",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
      lab: "LabQuimica5",
    },
    {
      id: "7",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
      lab: "LabQuimica5",
    },
    {
      id: "8",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
      lab: "LabQuimica5",
    },
  ];

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveSolicitationStyle.title}>Reservas pendentes</Text>

      <View style={ReserveSolicitationWindowStyle.listComponent}>
        <View style={ReserveSolicitationWindowStyle.listComponent}>
          <View style={ReserveSolicitationStyle.headerListRow}>
            <Text style={TextStyle.titleText}>Minhas reservas</Text>
          </View>
          <View style={ReserveSolicitationStyle.list}>
            <ListLabs data={DATA}></ListLabs>
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
