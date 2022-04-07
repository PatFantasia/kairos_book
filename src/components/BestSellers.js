import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon, Divider } from "react-native-elements";

import { myBooksData, categoriesData } from "constants/dummyData";
import { COLORS, SIZES } from "../constants/themes";
import AuthorBooks from "./AuthorBooks";

const BestSellers = ({ data, navigation }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          borderTopColor: COLORS.lightGray,
        }}
        onPress={() =>
          navigation.navigate("FancyContent", {
            book: item,
          })
        }
      >
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{
            width: 380,
            height: 250,
            borderRadius: 20,
            marginVertical: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
          blurRadius={5}
        />
      </TouchableOpacity>
    );
    return (
      <View style={{ marginTop: 25 }}>
        <LinearGradient
          colors={[COLORS.gray, COLORS.black]}
          //   style={{ flex: 1, borderRadius: 20, opacity: 0.1 }}
        >
          <View
            style={{
              marginLeft: 15,
              marginTop: 30,
              // marginBottom: 5,
              height: 30,
              width: 310,
            }}
          >
            <Text style={styles.primaryTitle}> Best-sellers du moment </Text>
          </View>

          {categoriesData.map((item) => (
            <AuthorBooks
              key={item.id}
              data={item.books}
              specialCatagory={" "}
              title={item.categoryName}
            />
          ))}
        </LinearGradient>
      </View>
    );
  };
  return renderSection(data);
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
