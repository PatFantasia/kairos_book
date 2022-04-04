import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { COLORS, FONTS } from "../constants/themes";
const DisplayAll = () => {
  const displayListOfTopics = () => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
            marginLeft: 15,
            marginVertical: 10,
          }}
        >
          {" "}
          Tout afficher{""}
        </Text>
        <Icon
          name="keyboard-arrow-right"
          size={25}
          color={COLORS.lightGray}
          style={{ marginLeft: -2 }}
        />
      </TouchableOpacity>
    );
  };
  return displayListOfTopics();
};

export default DisplayAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
