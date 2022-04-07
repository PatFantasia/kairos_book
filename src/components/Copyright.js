import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { Icon } from "react-native-elements";

import { COLORS } from "constants/themes";

const Copyright = () => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", marginRight: 15 }}>
      <Text style={{ color: COLORS.lightGray, marginLeft: 15 }}>
        {" "}
        Condiions générales{" "}
      </Text>
      <Icon
        name="keyboard-arrow-right"
        size={25}
        color={COLORS.lightGray}
        style={{ margin: -3 }}
      />
    </TouchableOpacity>
  );
};

export default Copyright;
