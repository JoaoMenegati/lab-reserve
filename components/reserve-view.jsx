import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker, Button } from "react-native-web";

import Styles from "../styles/main-style";
import ListLabsViewReserve from "./list-labs-view-reserve";

const VerReserva = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");

  const DATA = [
    {
      id: "0",
      hour: "09:00 - 09:50",
      teacher: "Professor Sergio",
    },
    {
      id: "1",
      hour: "10:00 - 10:40",
      teacher: "Manutenção Programada",
    },
    {
      id: "2",
      hour: "10:50 - 12:40",
      teacher: "Professor Marcos",
    },
    {
      id: "3",
      hour: "13:00 as 15:50",
      teacher: "Professora Maria",
    },
    {
      id: "4",
      hour: "16:00 - 17:50",
      teacher: "Professor Carlos",
    },
    {
      id: "5",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
    },
  ];

  return (
    <View style={Styles.container}>
      <View style={{ flex: 0.1 }} />
      <Text style={ReservViewStyle.tituloTela}>Reservas de hoje</Text>
      <View style={{ flex: 0.1 }} />

      <Picker
        style={Styles.input}
        placeholder="Laboratório"
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item value="B2-S1" label="1ENGSOF" />
        <Picker.Item value="B2-S2" label="2PROGR" />
        <Picker.Item value="B4-S6" label="3PRODSOFT" />
        <Picker.Item value="B4-S5" label="4COMP" />
        <Picker.Item value="B4-S4" label="5REDES" />
        <Picker.Item value="D2-S3" label="LABTOPOGEO6" />
      </Picker>

      <View style={{ flex: 0.1 }} />

      <View style={ReservViewStyle.listComponent}>
        <View
          style={{
            flexDirection: "row",
            gap: (window.width * 0.8) / 5,
            marginLeft: 10,
          }}
        >
          <Text style={ReservViewStyle.titleText}>Reservas</Text>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 12,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <ListLabsViewReserve data={DATA}></ListLabsViewReserve>
        </View>

        <View style={{ flex: 0.1 }} />

        <Button
          color="#484D50"
          title="Sair"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const ReservViewStyle = StyleSheet.create({
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
});

export default VerReserva;
