import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MaskInput, { Masks } from "react-native-mask-input";

import MainStyle from "../../styles/main-style";
import ReserveRegistrationStyle from "../../styles/screens/reserve-registration-style";

import { registerReserve } from "../../source/labs-reserve";
import UserSingleton from "../../source/user-singleton";
import getMainScreen from "../../source/main-screen";

const ReserveRegistration = ({ navigation }) => {
  const [lab, setLab] = useState("B2-S1");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [observation, setObservation] = useState("");

  async function onRegister() {
    registerReserve(UserSingleton.getInstance().uid, {
      lab: lab,
      date: date,
      startHour: startHour,
      endHour: endHour,
      observation: observation,
    });
  }

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveRegistrationStyle.title}>Nova reserva</Text>

      <Picker
        style={MainStyle.input}
        placeholder="Laboratório"
        selectedValue={lab}
        onValueChange={(itemValue, itemIndex) => setLab(itemValue)}
      >
        <Picker.Item value="B2-S1" label="1ENGSOF" />
        <Picker.Item value="B2-S2" label="2PROGR" />
        <Picker.Item value="B4-S6" label="3PRODSOFT" />
        <Picker.Item value="B4-S5" label="4COMP" />
        <Picker.Item value="B4-S4" label="5REDES" />
        <Picker.Item value="D2-S3" label="LABTOPOGEO6" />
      </Picker>

      <View style={ReserveRegistrationStyle.dateContainer}>
        <MaskInput
          style={MainStyle.input}
          value={date}
          mask={Masks.DATE_DDMMYYYY}
          placeholder="Data"
          onChangeText={(masked, unmasked) => {
            setDate(masked);
          }}
        />
      </View>

      <View style={ReserveRegistrationStyle.hourContainer}>
        <MaskInput
          style={ReserveRegistrationStyle.dateInput}
          value={startHour}
          mask={[/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/]}
          placeholder="Hora de início"
          onChangeText={(text) => setStartHour(text)}
        />
        <MaskInput
          style={ReserveRegistrationStyle.dateInput}
          value={endHour}
          mask={[/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/]}
          placeholder="Hora de fim"
          onChangeText={(text) => setEndHour(text)}
        />
      </View>

      <View style={ReserveRegistrationStyle.observationContainer}>
        <TextInput
          style={MainStyle.input}
          placeholder="Observação"
          onChangeText={(text) => setObservation(text)}
        />
      </View>

      <Button
        color="#484D50"
        title="Salvar Reserva"
        onPress={() => {
          onRegister();
          navigation.navigate(getMainScreen(UserSingleton.getInstance().type));
        }}
      />
    </View>
  );
};

export default ReserveRegistration;
