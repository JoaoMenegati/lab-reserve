import React from "react";
import { Text, View, TextInput, Button } from "react-native";

import MainStyle from "../../styles/main-style";
import LaboratoryRegistrationStyle from "../../styles/screens/laboratory-registration-syle";

const LaboratoryRegistration = ({ navigation }) => {
  return (
    <View style={MainStyle.container}>
      <Text style={LaboratoryRegistrationStyle.title}>Novo laboratório</Text>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput style={MainStyle.input} placeholder="Nome do laboratório" />
      </View>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput style={MainStyle.input} placeholder="Sala" />
      </View>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput style={MainStyle.input} placeholder="Descrição" />
      </View>
      <Button
        color="#484D50"
        title="Salvar Laboratório"
        onPress={() => navigation.navigate("MainAdmin")}
      />
    </View>
  );
};

export default LaboratoryRegistration;
