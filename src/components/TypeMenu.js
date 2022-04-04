import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon, Divider } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants/themes";
const TypeMenu = ({ iconName, bookType }) => {
  const displayListOfTopics = () => {
    return (
      <>
        <Divider style={{ marginVertical: 15 }} color={COLORS.lightGray} />
        <TouchableOpacity style={styles.container}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              color={COLORS.lightGray2}
              style={{ marginRight: 5 }}
            />
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>{bookType}</Text>
          </View>
          <Icon
            name="keyboard-arrow-right"
            size={30}
            color={COLORS.lightGray}
            style={{ paddingLeft: 165 }}
          />
        </TouchableOpacity>
      </>
    );
  };
  return displayListOfTopics();
};

export default TypeMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
