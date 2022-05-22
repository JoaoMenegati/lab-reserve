import { React, useState } from "react";
import { View, TextInput, Button, Image } from "react-native";

import MainStyle from "../../styles/main-style";
import LoginStyle from "../../styles/screens/login-style";
import doLogin from "../../source/login";

import Icons from "../../resources/icons";

const Login = ({ navigation }) => {
  const [ra, setRa] = useState("");
  const [senha, setSenha] = useState("");

  async function onLoginPressed() {
    if (await doLogin(ra, senha)) {
      navigation.navigate("MainTeacher");
    }
  }

  return (
    <View style={MainStyle.container}>
      <View style={LoginStyle.imageContainer}>
        <Image
          style={LoginStyle.image}
          source={{
            uri: Icons.getInstance().main,
          }}
        />
      </View>

      <View style={LoginStyle.inputContainer}>
        <TextInput
          style={MainStyle.input}
          placeholder="Usuário"
          onChangeText={(text) => setRa(text)}
        />
      </View>

      <View style={LoginStyle.inputContainer}>
        <TextInput
          secureTextEntry={true}
          style={MainStyle.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <Button
        color="#484D50"
        style={LoginStyle.button}
        title="Entrar"
        onPress={() => onLoginPressed()}
      />
    </View>
  );
};

export default Login;
