import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";

import Styles from "../styles/main-style";

//recebemos o navigation por parâmetro para utilizar no redirecionamento quando necessário
const Login = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>ReservLab</Text>

      <View style={{ flex: 0.1 }} />

      <TextInput style={Styles.input} placeholder="Usuário" />

      <View style={{ flex: 0.1 }} />

      <TextInput
        secureTextEntry={true}
        style={Styles.input}
        placeholder="Senha"
      />

      <View style={{ flex: 0.1 }} />

      <Button
        title="Entrar como Professor"
        //navigation.navigate é utilizado para enviar para outra tela, que tem seu nome passado por parâmetro
        onPress={() => navigation.navigate("InicioProfessor")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        title="Entrar como Administrador"
        //navigation.navigate é utilizado para enviar para outra tela, que tem seu nome passado por parâmetro
        onPress={() => navigation.navigate("InicioAdministrador")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Login;
