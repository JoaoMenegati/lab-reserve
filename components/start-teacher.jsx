import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

import Styles from "../styles/main-style";

const InicioProfessor = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Listar aqui todas as reservas</Text>

      <View style={{ flex: 0.1 }} />

      <Button
        title="Ver Reservas"
        onPress={() => navigation.navigate("VerReserva")}
      />

      <View style={{ flex: 0.1 }} />

      <Text>Listar aqui todas as minhas reservas</Text>

      <View style={{ flex: 0.1 }} />

      <Button
        title="Cadastrar Reserva"
        onPress={() => navigation.navigate("CriarReserva")}
      />

      <View style={{ flex: 0.1 }} />

      <Button title="Sair" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default InicioProfessor;
