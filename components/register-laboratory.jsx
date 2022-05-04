import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-web";

import Styles from "../styles/main-style";

const CadastrarLaboratorio = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={LabStyle.tituloTela}>Novo laboratório</Text>
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Nome do laboratório" />
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Sala" />
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Descrição" />
      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Salvar Laboratório"
        onPress={() => navigation.navigate("InicioAdministrador")}
      />
    </View>
  );
};

const LabStyle = StyleSheet.create({
  tituloTela: {
    fontSize: 26,
  },
});

export default CadastrarLaboratorio;
