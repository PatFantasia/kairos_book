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

import { COLORS, SIZES } from "constants/themes";
import { immigritude } from "constants/dummyData";

const RecommendedForYou = ({ data, navigation }) => {
  const header = (book) => (
    <TouchableOpacity
      style={{
        marginRight: SIZES.padding,
        marginVertical: 15,
        borderTopColor: COLORS.lightGray,
      }}
      // onPress={() =>
      //   navigation.navigate("FancyContent", {
      //     book: item,
      //   })
      // }
    >
      <Image
        source={book.bookCover}
        resizeMode="cover"
        style={{
          width: 250,
          height: 420,
          marginVertical: 15,
          justifyContent: "center",
          alignSelf: "center",
        }}
      />
    </TouchableOpacity>
  );
  const renderSection = (data) => {
    const renderContent = ({ item, index }) => (
      <TouchableOpacity
        style={{
          marginRight: SIZES.padding,
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
            width: 120,
            height: 200,
            marginVertical: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    );
    return (
      <View style={{ marginTop: 40 }}>
        <LinearGradient colors={[COLORS.lightGray, COLORS.black]}>
          <View
            style={{
              marginLeft: 15,
              marginTop: 30,
              height: 30,
              width: 310,
            }}
          >
            <Text style={styles.primaryTitle}> Pour vous </Text>
            <Text
              style={[styles.secondarySubtitle, { width: 350, height: 35 }]}
            >
              {" "}
              Recommandations basés sur les livres que vous avez achetés ou qui
              vous intéressent{" "}
            </Text>
          </View>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 15, paddingVertical: 20 }}
          >
            {header(immigritude)}
            <FlatList
              scrollEnabled={false}
              data={data}
              renderItem={renderContent}
              keyExtractor={(item) => item.id}
              horizontal={false}
              // horizontal
              showsHorizontalScrollIndicator={false}
              extraData={data}
              contentContainerStyle={{ alignSelf: "flex-start" }}
              numColumns={Math.ceil(data.length / 2)}
              showsVerticalScrollIndicator={false}
              // ListHeaderComponent={header(immigritude)}
              ListHeaderComponentStyle={{ flex: 0.8 }}
              initialNumToRender={4}
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
  return renderSection(data);
};

export default RecommendedForYou;

const styles = StyleSheet.create({
  secondarySubtitle: {
    color: COLORS.lightGray4,
    fontSize: SIZES.h4,
    fontWeight: "bold",
    textAlign: "left",
  },
  primaryTitle: {
    color: COLORS.whiteSmooth,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
