import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Solicitation from "../solicitation";

const ListSolicitations = (props) => {
  const [update, setUpdate] = useState(true);

  return (
    <View>
      <FlatList
        style={{ height: props.height }}
        renderItem={({ item }) => (
          <Solicitation
            reserve={item}
            removeFromList={(reserve) => {
              props.removeFromList(reserve);
              setUpdate(!update);
            }}
          ></Solicitation>
        )}
        data={props.data}
        extraData={update}
      />
    </View>
  );
};

export default ListSolicitations;
