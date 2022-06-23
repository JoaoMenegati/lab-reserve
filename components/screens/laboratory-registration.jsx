import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import MainStyle from "../../styles/main-style";
import LaboratoryRegistrationStyle from "../../styles/screens/laboratory-registration-syle";

import { registerLaboratory } from "../../source/labs";

const LaboratoryRegistration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  async function onRegister() {
    const labRegister = {
      name: name,
      id: id,
      description: description,
    };

    await registerLaboratory(labRegister);

    navigation.navigate("MainAdmin");
  }

  return (
    <View style={MainStyle.container}>
      <Text style={LaboratoryRegistrationStyle.title}>Novo laboratório</Text>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput
          style={MainStyle.input}
          value={name}
          placeholder="Nome do laboratório"
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput
          style={MainStyle.input}
          value={id}
          placeholder="Sala"
          onChangeText={(text) => setId(text)}
        />
      </View>

      <View style={LaboratoryRegistrationStyle.textFieldContainer}>
        <TextInput
          style={MainStyle.input}
          value={description}
          placeholder="Descrição"
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <Button
        color="#484D50"
        title="Salvar Laboratório"
        onPress={() => {
          onRegister();
        }}
      />
    </View>
  );
};

export default LaboratoryRegistration;
