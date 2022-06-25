import React from "react";
import { View, FlatList } from "react-native";
import Solicitation from "../solicitation";

const ListSolicitations = (props) => {
  return (
    <View>
      <FlatList
        style={{ height: props.height }}
        renderItem={({ item }) => <Solicitation reserve={item}></Solicitation>}
        data={props.data}
      />
    </View>
  );
};

export default ListSolicitations;
