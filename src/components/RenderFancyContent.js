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

import { COLORS, SIZES } from "../constants/themes";

const RenderFancyContent = ({ data, navigation }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginRight: SIZES.padding,
          borderTopColor: COLORS.lightGray,
        }}
        onPress={() =>
          navigation.navigate("LibraryItem", {
            content: item,
          })
        }
      >
        <Divider style={{ marginBottom: 35 }} color={COLORS.lightGray} />
        <View
          style={{
            marginLeft: 5,
            marginBottom: 5,
            height: 70,
            width: 310,
          }}
        >
          <Text style={styles.primarySubtitle}> {item.categoryName} </Text>
          <Text style={styles.primaryTitle}> {item.categoryInfo} </Text>
        </View>
        <View
          style={{
            width: 380,
            height: 250,
            borderRadius: 10,
          }}
        >
          <LinearGradient
            colors={[COLORS.gray1, item.backgroundColor, COLORS.lightGray]}
            style={{ flex: 1, borderRadius: 20 }}
          >
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{
                width: 150,
                height: 200,
                marginVertical: 25,
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
          </LinearGradient>
        </View>
      </TouchableOpacity>
    );
    return (
      <FlatList
        data={data}
        renderItem={renderContent}
        keyExtractor={(item) => item.idCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={data}
      />
    );
  };
  return renderSection(data);
};

export default RenderFancyContent;

const styles = StyleSheet.create({
  primarySubtitle: {
    color: COLORS.whiteSmooth,
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
