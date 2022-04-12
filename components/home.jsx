import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "react-native-web";
import Styles from "../styles/main-style";

//recebemos o navigation por parâmetro para utilizar no redirecionamento quando necessário
const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Home !"
        //navigation.navigate é utilizado para enviar para outra tela, que tem seu nome passado por parâmetro
        onPress={() => navigation.navigate("ComponentA")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
