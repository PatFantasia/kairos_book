import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-elements";

import { COLORS, SIZES } from "../../constants/themes";

const RenderFancyContent = ({ data, navigation }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: 15,
          borderTopColor: COLORS.lightGray,
        }}
        onPress={() =>
          navigation.navigate("LibraryItem", {
            book: item,
          })
        }
      >
        <Divider
          style={{ marginBottom: 30, marginTop: 10 }}
          color={COLORS.lightGray}
        />
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
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: "bold",
    textAlign: "left",
  },
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
