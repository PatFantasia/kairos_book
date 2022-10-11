import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

import { COLORS } from "constants/themes";
import { TouchableOpacity } from "react-native";

const LibraryBookFooter = ({ customStyle }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-around",
          marginHorizontal: -5,
        },
        customStyle,
      ]}
    >
      <View
        style={{
          backgroundColor: COLORS.lightRed,
          borderRadius: 10,
          width: 60,
          height: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            marginHorizontal: 10,
            marginTop: 1,
          }}
        >
          Extrait
        </Text>
      </View>
      <TouchableOpacity>
        <Icon
          name="dots-three-horizontal"
          type="entypo"
          size={25}
          color={COLORS.white}
          style={{ marginLeft: -2 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LibraryBookFooter;
