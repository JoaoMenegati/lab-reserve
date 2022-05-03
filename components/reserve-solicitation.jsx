import React from "react";
import { View, Text } from "react-native";

import Styles from "../styles/main-style";

const SolicitacaoReserva = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textLembrar}>
        Listar aqui todas solicitações de reservas
      </Text>
    </View>
  );
};

export default SolicitacaoReserva;
