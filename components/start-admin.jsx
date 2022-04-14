import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-web";

import Styles from "../styles/main-style";

const InicioAdministrador = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Button
        title="Ver Reservas"
        onPress={() => navigation.navigate("VerReserva")}
      />
      <Button
        title="Ver Solicitações de Reserva"
        onPress={() => navigation.navigate("SolicitacaoReserva")}
      />
      <Button
        title="Cadastrar Laboratório"
        onPress={() => navigation.navigate("CadastrarLaboratorio")}
      />
      <Text>Listar aqui todas as reservas</Text>

      <Button
        title="Cadastrar Reserva"
        onPress={() => navigation.navigate("CriarReserva")}
      />

      <Button title="Sair" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default InicioAdministrador;
