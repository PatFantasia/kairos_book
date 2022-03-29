import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Divider } from "react-native-elements";

import { COLORS, SIZES } from "../constants/themes";

const MetaInfoDetails = ({ top, middle, bottom, icon, middleCustomStyle }) => {
  const renderContent = () => (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          marginRight: SIZES.padding,
          borderTopColor: COLORS.lightGray,
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 15 }}>
          <Text
            style={{
              color: COLORS.lightGray,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            {top}{" "}
          </Text>
          {icon ? (
            <Icon
              name="menu-book"
              type="materialicons"
              color={COLORS.white}
              style={{ marginVertical: 5 }}
            />
          ) : (
            <Text
              style={[
                styles.primaryTitle,
                { marginVertical: 5, textAlign: "center" },
                middleCustomStyle,
              ]}
            >
              {" "}
              {middle}{" "}
            </Text>
          )}
          <Text
            style={{
              color: COLORS.lightGray2,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {" "}
            {bottom}{" "}
          </Text>
        </View>
        <Divider
          style={{ marginVertical: 5 }}
          orientation="vertical"
          width={0.5}
          color={COLORS.lightGray}
        />
      </View>
    </View>
  );
  return renderContent();
};

export default MetaInfoDetails;

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
