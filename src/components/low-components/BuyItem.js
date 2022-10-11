import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "constants";

const BuyItem = ({ price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Acheter | {price} FCFA </Text>
    </View>
  );
};

export default BuyItem;

const styles = StyleSheet.create({
  container: {
    margin: 25,
    height: 45,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: SIZES.body2,
    color: COLORS.white,
    fontWeight: "bold",
  },
});
