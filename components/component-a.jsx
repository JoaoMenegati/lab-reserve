import React from "react";
import { View } from "react-native";
import { Button } from "react-native-web";

import Styles from "../styles/main-style";

const ComponentA = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Button title="Botão A" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ComponentA;
