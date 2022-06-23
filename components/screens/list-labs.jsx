import React from "react";
import { View, FlatList, Text } from "react-native";

const ListLabs = (props) => {
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
            <Text style={{ fontSize: 20 }}>
              • <b>{item.date}:</b> {item.startHour} - {item.endHour} -{" "}
              {item.labName}
            </Text>
          </View>
        )}
        data={props.data}
      />
    </View>
  );
};

export default ListLabs;
