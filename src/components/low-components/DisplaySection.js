import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import { COLORS, FONTS, SIZES } from "../../constants/themes";

const DisplaySection = ({ title }) => {
  const displayListOfTopics = () => {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon name="menu" type="feather" color={COLORS.white} />
        <Text style={{ ...FONTS.h3, color: COLORS.white }}> {title} </Text>
        <Icon
          name="keyboard-arrow-right"
          size={30}
          color={COLORS.lightGray}
          style={{ paddingLeft: 165 }}
        />
      </TouchableOpacity>
    );
  };
  return displayListOfTopics();
};

export default DisplaySection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
  },
});
