import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-web";

import Styles from "../styles/main-style";

//recebemos o navigation por parâmetro para utilizar no redirecionamento quando necessário
const Login = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={LoginStyle.tituloApp}>ReservLab</Text>

      <View style={{ flex: 0.03 }} />
      <View>
        <Image
          style={LoginStyle.image}
          source={{
            uri: "https://cdn-icons.flaticon.com/png/512/2216/premium/2216496.png?token=exp=1651626343~hmac=5f608668cf8e09af87b101b37b470b33",
          }}
        />
      </View>

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
        color="#484D50"
        style={Styles.button}
        title="Entrar como Professor"
        //navigation.navigate é utilizado para enviar para outra tela, que tem seu nome passado por parâmetro
        onPress={() => navigation.navigate("InicioProfessor")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        style={Styles.button}
        title="Entrar como Administrador"
        //navigation.navigate é utilizado para enviar para outra tela, que tem seu nome passado por parâmetro
        onPress={() => navigation.navigate("InicioAdministrador")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const LoginStyle = StyleSheet.create({
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 64,
  },

  image: {
    height: 40,
    width: 40,
  },

  tituloApp: {
    fontSize: 20,
  },
});

export default Login;
