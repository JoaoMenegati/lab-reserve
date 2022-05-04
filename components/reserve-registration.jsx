import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button, Picker } from "react-native-web";

import Styles from "../styles/main-style";

const CriarReserva = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("B2-S1");

  return (
    <View style={Styles.container}>
      <Text style={ReserveStyle.tituloTela}>Nova reserva</Text>
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

      <TextInput style={Styles.input} placeholder="Data" />
      <View style={{ flex: 0.1 }} />

      <View style={Styles.alinharCampos}>
        <TextInput
          style={Styles.inputCampoMenor}
          placeholder="Hora de início"
        />
        <TextInput style={Styles.inputCampoMenor} placeholder="Hora de fim" />
      </View>

      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Observação" />
      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Salvar Reserva"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const ReserveStyle = StyleSheet.create({
  tituloTela: {
    fontSize: 26,
  },
});

export default CriarReserva;
