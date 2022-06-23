import React, { useState, useEffect } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MainStyle from "../../styles/main-style";
import ReserveViewStyle from "../../styles/screens/reserver-view-style";
import TextStyle from "../../styles/text-style";
import { getReservesToday } from "../../source/labs-reserve";
import getMainScreen from "../../source/main-screen";
import UserSingleton from "../../source/user-singleton";

import ListReserves from "./list-reserves";

const window = Dimensions.get("window");

const ReserveView = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");
  const [reservesToday, setReservesToday] = useState([]);

  const user = UserSingleton.getInstance();

  async function findReservesToday() {
    setReservesToday(await getReservesToday());
    console.log(reservesToday);
  }

  useEffect(() => {
    findReservesToday();
  }, []);

  async function goBack() {
    navigation.navigate(getMainScreen(user.type));
  }

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

      <View style={MainStyle.container}>
        <View style={ReserveViewStyle.listComponent}>
          <View style={ReserveViewStyle.headerListRow}>
            <Text style={TextStyle.titleText}>Reservas</Text>
          </View>
          <View style={ReserveViewStyle.list}>
            <ListReserves data={reservesToday}></ListReserves>
          </View>
        </View>
      </View>

      <View style={ReserveViewStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Sair"
          onPress={() => {
            goBack();
          }}
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
