import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-web";

import Styles from "../styles/main-style";
import ListLabsStartAdmin from "./list-labs-start-admin";

const window = Dimensions.get("window");

const InicioAdministrador = ({ navigation }) => {
  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onCriarReserva = () => {
    navigation.navigate("CriarReserva");
  };

  const DATA = [
    {
      id: "0",
      hour: "16:00",
      lab: "LabQuimica2",
    },
    {
      id: "1",
      hour: "18:00",
      lab: "LabProdSoftware",
    },
    {
      id: "2",
      hour: "19:00",
      lab: "LabTopoGeo",
    },
    {
      id: "3",
      hour: "21:00",
      lab: "LabQuimica",
    },
    {
      id: "4",
      hour: "21:30",
      lab: "LabQuimica3",
    },
    {
      id: "5",
      hour: "22:00",
      lab: "LabQuimica5",
    },
  ];

  return (
    <View style={Styles.container}>
      <View style={StartAdminStyle.headerLayout}>
        <View style={{ flexDirection: "row", gap: (window.width * 0.9) / 5 }}>
          <Text style={StartAdminStyle.titleText}>Olá, Administrador!</Text>
          <TouchableHighlight
            style={StartAdminStyle.imageProfileContainer}
            onPress={onReturnToLogin}
          >
            <Image
              style={StartAdminStyle.imageProfile}
              source={{
                uri: "http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg",
              }}
            />
          </TouchableHighlight>
        </View>
      </View>

      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Todas as reservas"
        onPress={() => navigation.navigate("VerReserva")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Ver solicitações"
        onPress={() => navigation.navigate("SolicitacaoReserva")}
      />

      <View style={{ flex: 0.1 }} />

      <Button
        color="#484D50"
        title="Cadastrar laboratório"
        onPress={() => navigation.navigate("CadastrarLaboratorio")}
      />

      <View style={StartAdminStyle.listComponent}>
        <View
          style={{
            flexDirection: "row",
            gap: (window.width * 0.8) / 5,
            marginLeft: 10,
          }}
        >
          <Text style={StartAdminStyle.titleText}>Todas as reservas</Text>
          <TouchableHighlight
            style={
              (StartAdminStyle.imageContainer,
              { alignSelf: "flex-end", marginRight: 10 })
            }
            onPress={onCriarReserva}
          >
            <Image
              style={StartAdminStyle.image}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/74/74673.png",
              }}
            />
          </TouchableHighlight>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 12,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <ListLabsStartAdmin data={DATA}></ListLabsStartAdmin>
        </View>
      </View>
    </View>
  );
};

const StartAdminStyle = StyleSheet.create({
  componentsLayoutMargin: {
    flex: 3,
    width: window.width * 0.95,
    marginTop: 10,
  },

  listComponent: {
    flex: 3,
    width: window.width * 0.9,
    margin: "3%",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 12,
  },

  headerLayout: {
    flex: 1,
    width: window.width * 0.95,
    justifyContent: "center",
    marginLeft: "10%",
  },

  titleText: {
    marginTop: 10,
    fontSize: "25px",
    fontWeight: "bold",
  },

  imageProfileContainer: {
    height: 60,
    width: 60,
    borderRadius: 64,
  },

  imageProfile: {
    height: 60,
    width: 60,
    borderRadius: 64,
  },

  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 64,
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 64,
  },
});

export default InicioAdministrador;
