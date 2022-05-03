import React, { useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "react-native-web";

import Styles from "../styles/main-style";

const VerReserva = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");

  return (
    <View style={Styles.container}>
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

      <Text style={Styles.textLembrar}>Listar aqui todas as reservas</Text>
    </View>
  );
};

export default VerReserva;
