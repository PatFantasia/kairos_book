import React from "react";
import {
  SafeAreaView,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, SIZES } from "constants/themes";
import { Divider } from "@rneui/themed";
import flatten from "lodash/flatten";

import { newsData } from "constants/dummyData";

const News = ({ navigation }) => {
  const newsArray = flatten(newsData);
  let item;
  const newsList = () => {
    const renderItem = (items) => {
      item = items.item;
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("NewsItem", { article: item })}
        >
          <ImageBackground source={item.newsCover} style={styles.background}>
            <Text style={styles.headerTitle}>{item.categoryName}</Text>
            <Text style={styles.headerSubtitle}>{item.categoryInfo}</Text>
            <Text style={styles.footerComment}>{item.footerMessage}</Text>
          </ImageBackground>
        </TouchableOpacity>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />

        <Text style={{ fontSize: SIZES.h2, color: COLORS.white }}></Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            scrollEnabled={false}
            data={newsArray}
            renderItem={renderItem}
            keyExtractor={(item) => item.idCategory}
            horizontal={false}
            extraData={newsData}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    );
  };
  return newsList();
};

export default News;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
  background: {
    width: SIZES.WIDTH * 0.9,
    height: SIZES.HEIGHT * 0.6,
    opacity: 0.5,
    borderRadius: 90,
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: SIZES.h3,
    color: COLORS.lightGray2,
    marginLeft: 15,
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: SIZES.h2,
    fontWeight: "bold",
    color: COLORS.white,
    marginLeft: 15,
    marginTop: 10,
  },

  footerComment: {
    marginTop: SIZES.HEIGHT * 0.46,
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginLeft: 15,
    opacity: 0.4,
  },
});
