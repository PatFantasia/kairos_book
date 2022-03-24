import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "constants/themes";
import { Divider } from "react-native-elements";

const Library = () => {
  return (
    <View style={styles.container}>
      <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />

      <Text style={{ fontSize: SIZES.h2, color: COLORS.white }}>
        Bibliothèque
      </Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
});
