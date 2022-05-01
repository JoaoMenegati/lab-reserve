import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-web";

import Styles from "../styles/main-style";

const CriarReserva = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Nova reserva</Text>

      <TextInput style={Styles.input} placeholder="Laboratório" />

      <TextInput style={Styles.input} placeholder="Data" />

      <TextInput style={Styles.input} placeholder="Início" />

      <TextInput style={Styles.input} placeholder="Fim" />

      <TextInput style={Styles.input} placeholder="Observação" />

      <Button
        title="Salvar Reserva"
        onPress={() => navigation.navigate("InicioProfessor")}
      />
    </View>
  );
};

export default CriarReserva;
