import React from "react";
import { Text, View } from "react-native";
import { TextInput, Button } from "react-native-web";

import Styles from "../styles/main-style";

const CadastrarLaboratorio = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Novo laboratório</Text>
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Nome do laboratório" />
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Sala" />
      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Observação" />
      <View style={{ flex: 0.1 }} />

      <Button
        title="Salvar Laboratório"
        onPress={() => navigation.navigate("InicioAdministrador")}
      />
    </View>
  );
};

export default CadastrarLaboratorio;
