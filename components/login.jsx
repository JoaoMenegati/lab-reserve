import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-web";

import Styles from "../styles/main-style";

//recebemos o navigation por parâmetro para utilizar no redirecionamento quando necessário
const Login = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>ReservLab</Text>

      <View style={{ flex: 0.1 }} />

      <TextInput style={styles.input} placeholder="Usuário" />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
      />

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

const styles = StyleSheet.create({
  input: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
