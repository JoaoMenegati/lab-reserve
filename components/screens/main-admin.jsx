import React, { useState, useEffect } from "react";
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
import { getUserReserves } from "../../source/labs-reserve";

const window = Dimensions.get("window");

const MainAdmin = ({ navigation }) => {
  const [reserves, setReserves] = useState({});

  const user = UserSingleton.getInstance();

  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onCriarReserva = () => {
    navigation.navigate("ReserveRegistration");
  };

  async function findUserReserves() {
    setReserves(await getUserReserves(user.uid));
    console.log(reserves);
  }

  useEffect(() => {
    findUserReserves();
  }, []);

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
          <ListLabs data={reserves}></ListLabs>
        </View>
      </View>
    </View>
  );
};

export default MainAdmin;
