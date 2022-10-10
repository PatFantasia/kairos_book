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

import { COLORS, SIZES } from "../../constants/themes";

const RenderTrendContent = ({ data, navigation }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
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
            <Text style={styles.primaryTitle}> Nouveautés et tendances </Text>
            <Text style={styles.secondarySubtitle}>
              {" "}
              Les incontournables du moment{" "}
            </Text>
          </View>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 15, paddingVertical: 20 }}
          >
            <FlatList
              scrollEnabled={false}
              data={data}
              renderItem={renderContent}
              keyExtractor={(item) => item.id}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              extraData={data}
              contentContainerStyle={{ alignSelf: "flex-start" }}
              numColumns={Math.ceil(data.length / 2)}
              showsVerticalScrollIndicator={false}
            />
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
  return renderSection(data);
};

export default RenderTrendContent;

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
