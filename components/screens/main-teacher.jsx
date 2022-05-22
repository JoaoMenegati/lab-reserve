import React from "react";
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

const window = Dimensions.get("window");

const MainTeacher = ({ navigation }) => {
  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onViewReserves = () => {
    navigation.navigate("ReserveView");
  };

  const onCreateReserve = () => {
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
  ];

  return (
    <View style={Styles.container}>
      <UserHeader width={window.width - 18} onPressPicture={onReturnToLogin} />
      <View style={MainTeacherStyle.componentsMargin}>
        <CalendarPicker width={window.width * 0.9}></CalendarPicker>
        <TouchableHighlight
          style={MainTeacherStyle.imageContainer}
          onPress={onViewReserves}
        >
          <Image
            style={MainTeacherStyle.image}
            source={{
              uri: Icons.getInstance().view,
            }}
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
              source={{
                uri: Icons.getInstance().plus,
              }}
            />
          </TouchableHighlight>
        </View>
        <View style={MainTeacherStyle.list}>
          <ListLabs data={DATA}></ListLabs>
        </View>
      </View>
    </View>
  );
};

export default MainTeacher;
