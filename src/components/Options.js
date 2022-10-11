import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "constants/themes";
import { Icon } from "react-native-elements";

const Options = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerLeft}>
        <Icon
          name="add-circle-outline"
          type="ionicons"
          color={COLORS.white}
          style={{ marginRight: 5 }}
        />
        <Text style={styles.textStyle}>LISTE D&apos;ENVIES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerRight}>
        <Icon
          name="layers"
          type="feather"
          color={COLORS.white}
          style={{ marginRight: 5 }}
        />
        <Text style={styles.textStyle}>EXTRAIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginBottom: 25,
    marginTop: -10,
    // height: 45,
    borderRadius: 25,
    // borderColor: COLORS.lightGray,
    // borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerLeft: {
    height: 50,
    padding: 5,
    width: 200,
    borderRadius: 25,
    borderColor: COLORS.lightGray,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerRight: {
    height: 50,
    padding: 5,
    width: 135,
    borderRadius: 25,
    borderColor: COLORS.lightGray,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
