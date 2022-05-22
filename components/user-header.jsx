import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";

import UserHeaderStyle from "../styles/components/user-header-style";
import TextStyle from "../styles/text-style";

import Icons from "../resources/icons";

const UserHeader = (props) => {
  const HeaderWindowStyle = StyleSheet.create({
    header: {
      width: props.width,
      padding: 16,
    },
  });

  return (
    <View style={HeaderWindowStyle.header}>
      <View style={UserHeaderStyle.headerRow}>
        <Text style={TextStyle.titleText}>Olá, Professor!</Text>
        <TouchableHighlight
          style={UserHeaderStyle.imageProfile}
          onPress={props.onPressPicture}
        >
          <Image
            style={UserHeaderStyle.imageProfile}
            source={{
              uri: Icons.getInstance().userDefault,
            }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default UserHeader;
