import React from "react";
import { View, FlatList, Text } from "react-native";

const ListLabsReserveSolicitation = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginVertical: 8,
              marginHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 22 }}>
              • {item.hour} - {item.lab}
            </Text>
            <Text style={{ fontSize: 18 }}>{item.teacher}</Text>
          </View>
        )}
        data={props.data}
      />
    </View>
  );
};

export default ListLabsReserveSolicitation;
