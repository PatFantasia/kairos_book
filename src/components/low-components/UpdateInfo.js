import { Text } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import { COLORS, SIZES } from "constants";

const UpdateInfo = () => {
  return (
    <>
      <Text
        style={{
          fontSize: SIZES.h2,
          color: COLORS.white,
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        {" "}
        Hisorique des mises à jour
      </Text>
      <Text
        style={{
          fontSize: SIZES.h4,
          color: COLORS.white,
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        {" "}
        20 Mars. 2020
      </Text>
      <Text style={{ color: COLORS.white, marginTop: 20, marginLeft: 15 }}>
        {" "}
        Mises à jour
      </Text>
      <Divider style={{ margin: 15 }} color={COLORS.lightGray} />
      <Text
        style={{
          fontSize: SIZES.h2,
          color: COLORS.white,
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        {" "}
        Configuration requise
      </Text>
      <Text
        style={{
          color: COLORS.white,
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.l
      </Text>
      <Divider style={{ margin: 15 }} color={COLORS.lightGray} />
    </>
  );
};

export default UpdateInfo;
