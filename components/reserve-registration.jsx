import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-web";

import Styles from "../styles/main-style";

const CriarReserva = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Nova reserva</Text>

      <TextInput style={styles.input} placeholder="Laboratório" />

      <TextInput style={styles.input} placeholder="Data" />

      <TextInput style={styles.input} placeholder="Início" />

      <TextInput style={styles.input} placeholder="Fim" />

      <TextInput style={styles.input} placeholder="Observação" />

      <Button
        title="Salvar Reserva"
        onPress={() => navigation.navigate("InicioProfessor")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 28,
    color: "000",
  },

  input: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CriarReserva;
