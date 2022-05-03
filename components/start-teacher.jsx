import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
} from "react-native";
import { Button } from "react-native-web";
import CalendarPicker from "react-native-calendar-picker";
import { StyleSheet } from "react-native";

import Styles from "../styles/main-style";

const window = Dimensions.get("window");

const InicioProfessor = ({ navigation }) => {
  const onReturnToLogin = () => {
    navigation.navigate("Login");
  };

  const onVisualizarReservas = () => {
    navigation.navigate("VerReserva");
  };

  const onCriarReserva = () => {
    navigation.navigate("CriarReserva");
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29d71",
      title: "Third Item",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Third Item",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Third Item",
    },

    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Third Item",
    },
  ];

  return (
    <View style={Styles.container}>
      <View style={StartTeacherStyle.headerLayout}>
        <View style={{ flexDirection: "row", gap: (window.width * 0.9) / 5 }}>
          <Text style={StartTeacherStyle.titleText}>Olá, Professor!</Text>
          <TouchableHighlight
            style={StartTeacherStyle.imageProfileContainer}
            onPress={onReturnToLogin}
          >
            <Image
              style={StartTeacherStyle.imageProfile}
              source={{
                uri: "http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg",
              }}
            />
          </TouchableHighlight>
        </View>
      </View>

      <View style={StartTeacherStyle.componentsLayoutMargin}>
        <CalendarPicker width={window.width * 0.9}></CalendarPicker>
        <TouchableHighlight
          style={
            (StartTeacherStyle.imageContainer,
            { alignSelf: "flex-end", marginRight: 25 })
          }
          onPress={onVisualizarReservas}
        >
          <Image
            style={StartTeacherStyle.image}
            source={{
              uri: "https://library.kissclipart.com/20191018/zve/kissclipart-circle-logo-eye-symbol-spiral-054b9979d38d5340.png",
              // uri: "https://cdn-icons-png.flaticon.com/512/74/74673.png",
            }}
          />
        </TouchableHighlight>
      </View>

      <View style={StartTeacherStyle.listComponent}>
        <View
          style={{
            // borderColor: "black",
            flex: 1,
            backgroundColor: "lightgray",
            borderRadius: 12,
          }}
        ></View>
        <TouchableHighlight
          style={
            (StartTeacherStyle.imageContainer,
            { alignSelf: "flex-end", marginRight: 10 })
          }
          onPress={onCriarReserva}
        >
          <Image
            style={StartTeacherStyle.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/74/74673.png",
            }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const StartTeacherStyle = StyleSheet.create({
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
    fontSize: "32px",
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

export default InicioProfessor;
