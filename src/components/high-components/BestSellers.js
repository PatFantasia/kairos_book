import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { categoriesData } from "constants/dummyData";
import { COLORS, SIZES } from "constants/themes";
import AuthorBooks from "../middle-components/AuthorBooks";

const BestSellers = () => {
  const renderSection = () => {
    return (
      <View style={{ marginTop: 25 }}>
        <LinearGradient colors={[COLORS.gray, COLORS.black]}>
          <View
            style={{
              marginLeft: 15,
              marginTop: 30,
              height: 30,
              width: 310,
            }}
          >
            <Text style={styles.primaryTitle}> Best-sellers du moment </Text>
          </View>

          {categoriesData.map((item) =>
            item.categoryName == "Payant" ||
            item.categoryName == "Gratuit" ? null : (
              <AuthorBooks
                key={item.id}
                data={item.books}
                specialCategory={" "}
                title={item.categoryName}
              />
            )
          )}
        </LinearGradient>
      </View>
    );
  };
  return renderSection();
};

export default BestSellers;

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.whiteSmooth,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
