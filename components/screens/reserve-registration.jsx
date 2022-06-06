import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import MaskInput, { Masks } from "react-native-mask-input";

import MainStyle from "../../styles/main-style";
import ReserveRegistrationStyle from "../../styles/screens/reserve-registration-style";

import {
  validateDate,
  validateStartHour,
  validateEndHour,
  isCurrentDate,
} from "./validations/reserve-registration";

import {
  registerReserve,
  registerReserveSolicitation,
} from "../../source/labs-reserve";
import UserSingleton from "../../source/user-singleton";
import getMainScreen from "../../source/main-screen";

const USER_TYPE_USER = 1;
const USER_TYPE_ADMIN = 2;

const ReserveRegistration = ({ navigation }) => {
  const user = UserSingleton.getInstance();

  const [lab, setLab] = useState("B2-S1");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [observation, setObservation] = useState("");

  const [isDateValid, setIsDateValid] = useState(true);
  const [isStartHourValid, setIsStartHourValid] = useState(true);
  const [isEndHourValid, setIsEndHourValid] = useState(true);

  async function onRegister() {
    const reserveData = {
      lab: lab,
      date: date,
      startHour: startHour,
      endHour: endHour,
      observation: observation,
    };

    switch (parseInt(user.type)) {
      case USER_TYPE_ADMIN:
        await registerReserve(user.uid, reserveData);
        break;
      case USER_TYPE_USER:
        await registerReserveSolicitation(user.uid, reserveData);
        break;
      default:
        break;
    }

    navigation.navigate(getMainScreen(user.type));
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
          style={[
            MainStyle.input,
            {
              borderColor: isDateValid ? "#000000" : "#CF1F1F",
            },
          ]}
          value={date}
          mask={Masks.DATE_DDMMYYYY}
          placeholder="Data"
          onChangeText={(masked, unmasked) => {
            setIsDateValid(validateDate(masked));
            setDate(masked);
          }}
        />
      </View>

      <View style={ReserveRegistrationStyle.hourContainer}>
        <MaskInput
          style={[
            ReserveRegistrationStyle.dateInput,
            {
              borderColor: isStartHourValid ? "#000000" : "#CF1F1F",
            },
          ]}
          value={startHour}
          mask={(text) => {
            if (text[0] === "2") {
              return [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/];
            } else {
              return [/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/];
            }
          }}
          placeholder="Hora de início"
          onChangeText={(masked, unmasked) => {
            setIsStartHourValid(
              isCurrentDate(date) ? validateStartHour(masked) : true
            );
            setStartHour(masked);
          }}
        />
        <MaskInput
          style={[
            ReserveRegistrationStyle.dateInput,
            {
              borderColor: isEndHourValid ? "#000000" : "#CF1F1F",
            },
          ]}
          value={endHour}
          mask={(text) => {
            if (text[0] === "2") {
              return [/[0-2]/, /[0-3]/, ":", /[0-5]/, /[0-9]/];
            } else {
              return [/[0-2]/, /[0-9]/, ":", /[0-5]/, /[0-9]/];
            }
          }}
          placeholder="Hora de fim"
          onChangeText={(masked, unmasked) => {
            setIsEndHourValid(validateEndHour(masked, startHour));
            setEndHour(masked);
          }}
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
        disabled={!isDateValid || !isStartHourValid || !isEndHourValid}
        onPress={() => {
          onRegister();
        }}
      />
    </View>
  );
};

export default ReserveRegistration;
