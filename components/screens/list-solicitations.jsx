import React, { useState } from "react";
import { View, FlatList } from "react-native";
import Solicitation from "../solicitation";

const ListSolicitations = (props) => {
  const [update, setTest] = useState(true);

  function removeSolicitationFromList(reserve) {
    props.removeFromList(reserve);
    setTest(!update);
  }

  return (
    <View>
      <FlatList
        style={{ height: props.height }}
        renderItem={({ item }) => (
          <Solicitation
            reserve={item}
            removeFromList={(reserve) => {
              removeSolicitationFromList(reserve);
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
