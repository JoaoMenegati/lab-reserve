import React, { useState, useEffect } from "react";
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
import { getLabs } from "../../source/labs";

import { registerReserve } from "../../source/labs-reserve";
import { registerReserveSolicitation } from "../../source/reserve-solicitation";
import UserSingleton from "../../source/user-singleton";
import getMainScreen from "../../source/main-screen";

const USER_TYPE_USER = 1;
const USER_TYPE_ADMIN = 2;

const ReserveRegistration = ({ navigation }) => {
  const user = UserSingleton.getInstance();

  const [labIndex, setLabIndex] = useState(0);
  const [lab, setLab] = useState();
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [observation, setObservation] = useState("");
  const [labs, setLabs] = useState([]);

  const [isDateValid, setIsDateValid] = useState(true);
  const [isStartHourValid, setIsStartHourValid] = useState(true);
  const [isEndHourValid, setIsEndHourValid] = useState(true);

  async function onRegister() {
    const reserveData = {
      userName: user.name,
      lab: labs[labIndex].id,
      labName: labs[labIndex].name,
      date: date,
      startHour: startHour,
      endHour: endHour,
      observation: observation,
    };

    console.log(reserveData);

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
      <Text style={ReserveRegistrationStyle.title}>Nova reserva</Text>

      <Picker
        style={MainStyle.input}
        placeholder="Laboratório"
        selectedValue={lab}
        onValueChange={(itemValue, itemIndex) => {
          setLab(itemValue);
          setLabIndex(itemIndex);
        }}
      >
        {Object.keys(labs).map((key) => {
          const lab = labs[key];
          return <Picker.Item key={key} value={lab.id} label={lab.name} />;
        })}
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

      <View style={ReserveRegistrationStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Salvar Reserva"
          disabled={!isDateValid || !isStartHourValid || !isEndHourValid}
          onPress={() => {
            onRegister();
          }}
        />
      </View>

      <View style={ReserveRegistrationStyle.buttonContainer}>
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

export default ReserveRegistration;
