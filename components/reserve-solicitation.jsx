import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";

import Styles from "../styles/main-style";
import ListLabsReserveSolicitation from "./list-labs-reserve-solicitation";

const SolicitacaoReserva = ({ navigation }) => {
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
  ];

  return (
    <View style={Styles.container}>
      <View style={{ flex: 0.1 }} />

      <Text style={StylesReserveSolicitation.tituloTela}>
        Reservas pendentes
      </Text>

      <View style={{ flex: 0.1 }} />

      <View style={StylesReserveSolicitation.listComponent}>
        <View
          style={{
            flexDirection: "row",
            gap: (window.width * 0.8) / 5,
            marginLeft: 10,
          }}
        ></View>

        <View
          style={{
            flex: 1,
            borderRadius: 12,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <ListLabsReserveSolicitation
            data={DATA}
          ></ListLabsReserveSolicitation>
        </View>

        <View style={{ flex: 0.1 }} />
      </View>

      <Button
        color="#D8222F"
        title="Rejeitar todas"
        onPress={() => navigation.navigate("InicioAdministrador")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        color="#32CD32"
        title="Aceitar todas"
        onPress={() => navigation.navigate("InicioAdministrador")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Voltar"
        onPress={() => navigation.navigate("InicioAdministrador")}
      />
      <View style={{ flex: 0.1 }} />
    </View>
  );
};

const StylesReserveSolicitation = StyleSheet.create({
  listComponent: {
    flex: 3,
    width: window.width * 0.9,
    margin: "3%",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 12,
  },

  titleText: {
    marginTop: 10,
    fontSize: "32px",
    fontWeight: "bold",
  },

  tituloTela: {
    fontSize: 26,
  },

  alinharBotoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SolicitacaoReserva;
