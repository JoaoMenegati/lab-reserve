import React, { useState, useEffect } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MainStyle from "../../styles/main-style";
import ReserveViewStyle from "../../styles/screens/reserver-view-style";
import TextStyle from "../../styles/text-style";
import {
  getReservesUnexpired,
  getReservesByLabs,
} from "../../source/labs-reserve";
import getMainScreen from "../../source/main-screen";
import UserSingleton from "../../source/user-singleton";
import { getLabs } from "../../source/labs";

import ListReserves from "./list-reserves";

const ReserveView = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");
  const [reservesByLab, setReservesByLab] = useState([]);
  const [labs, setLabs] = useState([]);

  const user = UserSingleton.getInstance();

  async function findReservesByLab(lab) {
    setReservesByLab(await getReservesByLabs(lab));
  }

  useEffect(() => {
    findReservesByLab(selectedValue);
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
      <Text style={ReserveViewStyle.title}>Reservas por laboratório</Text>

      <Picker
        style={MainStyle.input}
        placeholder="Laboratório"
        selectedValue={selectedValue}
        onValueChange={(lab, itemIndex) => {
          setSelectedValue(lab);
          findReservesByLab(lab);
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

export default ReserveView;
