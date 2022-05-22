import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

import MainStyle from "../../styles/main-style";
import ReserveRegistrationStyle from "../../styles/screens/reserve-registration-style";

const ReserveRegistration = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");

  return (
    <View style={MainStyle.container}>
      <Text style={ReserveRegistrationStyle.title}>Nova reserva</Text>

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

      <View style={ReserveRegistrationStyle.dateContainer}>
        <TextInput style={MainStyle.input} placeholder="Data" />
      </View>

      <View style={ReserveRegistrationStyle.hourContainer}>
        <TextInput
          style={ReserveRegistrationStyle.dateInput}
          placeholder="Hora de início"
        />
        <TextInput
          style={ReserveRegistrationStyle.dateInput}
          placeholder="Hora de fim"
        />
      </View>

      <View style={ReserveRegistrationStyle.observationContainer}>
        <TextInput style={MainStyle.input} placeholder="Observação" />
      </View>

      <Button
        color="#484D50"
        title="Salvar Reserva"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default ReserveRegistration;
