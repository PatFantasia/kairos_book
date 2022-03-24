import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon, Divider } from "react-native-elements";
import { COLORS, FONTS, SIZES } from "../constants/themes";

const Bookstore = () => {
  const displayListOfTopics = () => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          top: -70,
          alignItems: "center",
          // alignSelf: "flex-start",
        }}
      >
        <Icon name="menu" type="feather" color={COLORS.white} />
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>
          {" "}
          Parcourir les sections{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
      <View style={{ height: 200 }}>{displayListOfTopics()}</View>
      <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
    </SafeAreaView>
  );
};

export default Bookstore;
