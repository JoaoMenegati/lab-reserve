import React, { useState, useEffect } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MainStyle from "../../styles/main-style";
import ReserveViewStyle from "../../styles/screens/reserver-view-style";
import TextStyle from "../../styles/text-style";
import { getReservesToday, getReservesByLabs } from "../../source/labs-reserve";
import getMainScreen from "../../source/main-screen";
import UserSingleton from "../../source/user-singleton";
import { getLabs } from "../../source/labs";

import ListReserves from "./list-reserves";

const window = Dimensions.get("window");

const ReserveView = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");
  const [reservesToday, setReservesToday] = useState([]);
  const [reservesByLab, setReservesByLab] = useState([]);
  const [labs, setLabs] = useState([]);

  const user = UserSingleton.getInstance();

  async function findReservesToday() {
    setReservesToday(await getReservesToday());
    console.log(reservesToday);
  }

  async function findReservesByLab() {
    setReservesByLab(await getReservesByLabs(selectedValue));
  }

  useEffect(() => {
    findReservesToday();
  }, []);

  async function findLabs() {
    setLabs(await getLabs());
  }

  useEffect(() => {
    findLabs();
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
        onValueChange={(lab, itemIndex) => {
          setSelectedValue(lab);
          findReservesByLab();
        }}
      >
        {Object.keys(labs).map((key) => {
          const lab = labs[key];
          return <Picker.Item key={key} value={lab.id} label={lab.name} />;
        })}
      </Picker>

      <View style={ReserveViewStyle.listComponent}>
        <View style={ReserveViewStyle.headerListRow}>
          <Text style={TextStyle.titleText}>Reservas</Text>
        </View>
        <View style={ReserveViewStyle.list}>
          <ListReserves data={reservesByLab}></ListReserves>
        </View>
      </View>

      <View style={ReserveViewStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Voltar"
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
