import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { COLORS, FONTS, SIZES } from "../constants/themes";
const DisplayAll = () => {
  const displayListOfTopics = () => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={{ ...FONTS.h3, color: COLORS.white, marginLeft: -12 }}>
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
    paddingHorizontal: SIZES.padding,
    top: -75,
    alignItems: "center",
  },
});
