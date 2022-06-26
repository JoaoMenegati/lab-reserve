import React from "react";
import { View, FlatList } from "react-native";
import Solicitation from "../solicitation";

const ListSolicitations = (props) => {
  return (
    <View>
      <FlatList
        style={{ height: props.height }}
        renderItem={({ item }) => (
          <Solicitation
            reserve={item}
            removeFromList={(reserve) => props.removeFromList(reserve)}
          ></Solicitation>
        )}
        data={props.data}
      />
    </View>
  );
};

export default ListSolicitations;
