import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-web";

import Styles from "../styles/main-style";

const InicioAdministrador = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Button
        color="#484D50"
        title="Ver Reservas"
        onPress={() => navigation.navigate("VerReserva")}
      />
      <View style={{ flex: 0.1 }} />
      <Button
        title="Ver Solicitações de Reserva"
        onPress={() => navigation.navigate("SolicitacaoReserva")}
      />
      <View style={{ flex: 0.1 }} />
      <Button
        color="#484D50"
        title="Cadastrar Laboratório"
        onPress={() => navigation.navigate("CadastrarLaboratorio")}
      />
      <View style={{ flex: 0.1 }} />

      <Text style={Styles.textLembrar}>Listar aqui todas as reservas</Text>

      <View style={{ flex: 0.1 }} />
      <Button
        color="#484D50"
        title="Cadastrar Reserva"
        onPress={() => navigation.navigate("CriarReserva")}
      />
      <View style={{ flex: 0.1 }} />
      <Button
        color="#484D50"
        title="Sair"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default InicioAdministrador;
