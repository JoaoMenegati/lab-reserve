import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";

//import styles
import Styles from "../../styles/main-style";
import MainTeacherStyle from "../../styles/screens/main-teacher-style";
import TextStyle from "../../styles/text-style";

//import components
import UserHeader from "../user-header";
import ListLabs from "./list-labs";

//import resources
import Icons from "../../resources/icons";
import UserSingleton from "../../source/user-singleton";
import { getUserReserves } from "../../source/labs-reserve";

const window = Dimensions.get("window");

const MainTeacher = ({ navigation }) => {
  const [reserves, setReserves] = useState({});

  const user = UserSingleton.getInstance();

  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onViewReserves = () => {
    navigation.navigate("ReserveView");
  };

  const onCreateReserve = () => {
    navigation.navigate("ReserveRegistration");
  };

  async function findUserReserves() {
    setReserves(await getUserReserves(user.uid));
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
      <View style={MainTeacherStyle.componentsMargin}>
        <CalendarPicker width={window.width * 0.9}></CalendarPicker>
        <TouchableHighlight
          style={MainTeacherStyle.imageContainer}
          onPress={onViewReserves}
        >
          <Image
            style={MainTeacherStyle.image}
            source={Icons.getInstance().view}
          />
        </TouchableHighlight>
      </View>

      <View style={MainTeacherStyle.listComponent}>
        <View style={MainTeacherStyle.headerListRow}>
          <Text style={TextStyle.titleText}>Minhas reservas</Text>
          <TouchableHighlight
            style={MainTeacherStyle.imageContainer}
            onPress={onCreateReserve}
          >
            <Image
              style={MainTeacherStyle.image}
              source={Icons.getInstance().plus}
            />
          </TouchableHighlight>
        </View>
        <View style={MainTeacherStyle.list}>
          <ListLabs data={reserves}></ListLabs>
        </View>
      </View>
    </View>
  );
};

export default MainTeacher;
