import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import { categoriesData } from "constants/dummyData";
import { COLORS, SIZES } from "../../constants/themes";
import RankingBox from "../middle-components/RankingBox";
import { ScrollView } from "react-native-gesture-handler";

const RankingBook = () => {
  const renderSection = () => {
    const filteredBook = categoriesData.filter(
      (item) => item.id === 4 || item.id === 5
    );
    return (
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            marginLeft: 15,
            marginTop: 30,
            height: 30,
            width: 310,
          }}
        >
          <Text style={styles.primaryTitle}> Classements </Text>
        </View>
        <Divider style={styles.primaryTitle} color={COLORS.lightGray} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {filteredBook.map((item, index) => (
              <RankingBox
                data={filteredBook}
                indexCategory={index}
                Key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };
  return renderSection();
};

export default RankingBook;

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
