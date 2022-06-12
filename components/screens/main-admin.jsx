import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";

import Styles from "../../styles/main-style";
import TextStyle from "../../styles/text-style";
import MainAdminStyle from "../../styles/screens/main-admin-style";

import ListLabs from "./list-labs";
import UserHeader from "../user-header";

import Icons from "../../resources/icons";
import UserSingleton from "../../source/user-singleton";

const window = Dimensions.get("window");

const MainAdmin = ({ navigation }) => {
  const user = UserSingleton.getInstance();

  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onCriarReserva = () => {
    navigation.navigate("ReserveRegistration");
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
    {
      id: "6",
      hour: "22:00",
      lab: "LabQuimica5",
    },
    {
      id: "7",
      hour: "22:00",
      lab: "LabQuimica5",
    },
  ];

  return (
    <View style={Styles.container}>
      <UserHeader
        width={window.width - 18}
        onPressPicture={onReturnToLogin}
        userName={user.name}
      />

      <View style={MainAdminStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Todas as reservas"
          onPress={() => navigation.navigate("ReserveView")}
        />
      </View>

      <View style={MainAdminStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Ver solicitações"
          onPress={() => navigation.navigate("ReserveSolicitation")}
        />
      </View>

      <View style={MainAdminStyle.buttonContainer}>
        <Button
          color="#484D50"
          title="Cadastrar laboratório"
          onPress={() => navigation.navigate("LaboratoryRegistration")}
        />
      </View>

      <View style={MainAdminStyle.listComponent}>
        <View style={MainAdminStyle.headerListRow}>
          <Text style={TextStyle.titleText}>Minhas reservas</Text>
          <TouchableHighlight
            style={MainAdminStyle.imageContainer}
            onPress={onCriarReserva}
          >
            <Image
              style={MainAdminStyle.image}
              source={Icons.getInstance().plus}
            />
          </TouchableHighlight>
        </View>
        <View style={MainAdminStyle.list}>
          <ListLabs data={DATA}></ListLabs>
        </View>
      </View>
    </View>
  );
};

export default MainAdmin;
