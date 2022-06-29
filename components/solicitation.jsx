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

import {
  acceptSolicitation,
  removeSolicitation,
} from "../source/reserve-solicitation";

const Solicitation = (props) => {
  async function acceptSolicitationFunc() {
    await acceptSolicitation(props.reserve);
    props.removeFromList(props.reserve);
  }

  async function removeSolicitationFunc() {
    await removeSolicitation(props.reserve.uid);
    props.removeFromList(props.reserve);
  }

  return (
    <View style={[SolicitationStyle.container]}>
      <View style={[SolicitationStyle.row]}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.reserve.userName}
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
            onPress={() => acceptSolicitationFunc()}
          >
            <Image
              style={SolicitationStyle.button}
              source={Icons.getInstance().accept}
            />
          </TouchableHighlight>

          <TouchableHighlight
            style={SolicitationStyle.button}
            onPress={() => removeSolicitationFunc()}
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
