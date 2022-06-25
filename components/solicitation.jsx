import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
} from "react-native";

import Icons from "../resources/icons";

import SolicitationStyle from "../styles/components/solicitation-style";

const window = Dimensions.get("window");

const Solicitation = (props) => {
  return (
    <View style={[SolicitationStyle.container]}>
      <View style={[SolicitationStyle.row]}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20 }}>
            <b>{props.reserve.userName}</b>
          </Text>
          <Text style={{ fontSize: 12 }}>{props.reserve.date}</Text>
          <Text style={{ fontSize: 12 }}>
            {props.reserve.startHour} {"-"} {props.reserve.endHour}
          </Text>
          <Text style={{ fontSize: 12 }}>{props.reserve.labName}</Text>
        </View>
        <View style={SolicitationStyle.column}>
          <TouchableHighlight
            style={SolicitationStyle.button}
            onPress={() => console.log("Oi")}
          >
            <Image
              style={SolicitationStyle.button}
              source={Icons.getInstance().accept}
            />
          </TouchableHighlight>

          <TouchableHighlight
            style={SolicitationStyle.button}
            onPress={() => console.log("tchau")}
          >
            <Image
              style={SolicitationStyle.button}
              source={Icons.getInstance().deny}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Solicitation;
