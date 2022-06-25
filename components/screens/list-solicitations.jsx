import React from "react";
import { View, FlatList } from "react-native";
import Solicitation from "../solicitation";

const ListSolicitations = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        renderItem={({ item }) => <Solicitation reserve={item}></Solicitation>}
        data={props.data}
      />
    </View>
  );
};

export default ListSolicitations;
