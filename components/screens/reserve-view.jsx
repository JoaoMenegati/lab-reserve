import React, { useState } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MainStyle from "../../styles/main-style";
import ReserveViewStyle from "../../styles/screens/reserver-view-style";
import TextStyle from "../../styles/text-style";

import ListLabs from "./list-labs";

const window = Dimensions.get("window");

const ReserveView = ({ navigation }) => {
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
    {
      id: "6",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
    },
    {
      id: "7",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
    },
    {
      id: "8",
      hour: "19:00 - 19:40",
      teacher: "Professora Ana",
    },
  ];

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveViewStyle.title}>Reservas de hoje</Text>

      <Picker
        style={MainStyle.input}
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

      <View style={ReviewListWindowStyle.listComponent}>
        <View style={ReserveViewStyle.headerListRow}>
          <Text style={TextStyle.titleText}>Minhas reservas</Text>
        </View>
        <View style={ReserveViewStyle.list}>
          <ListLabs data={DATA}></ListLabs>
        </View>
      </View>
      <View style={ReserveViewStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Sair"
          onPress={() => navigation.navigate("MainTeacher")}
        />
      </View>
    </View>
  );
};

const ReviewListWindowStyle = StyleSheet.create({
  listComponent: {
    flex: 3,
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    width: window.width - 64,
  },
});

export default ReserveView;
