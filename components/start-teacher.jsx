import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";

import Styles from "../styles/main-style";

const InicioProfessor = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Listar aqui todas as reservas</Text>

      <Button
        title="Ver Reservas"
        onPress={() => navigation.navigate("VerReserva")}
      />

      <Text>Listar aqui todas as minhas reservas</Text>

      <Button
        title="Cadastrar Reserva"
        onPress={() => navigation.navigate("CriarReserva")}
      />

      <Button title="Sair" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default InicioProfessor;
