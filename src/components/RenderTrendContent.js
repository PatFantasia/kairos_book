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

const RenderTrendContent = ({ data }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginRight: SIZES.padding,
          borderTopColor: COLORS.lightGray,
        }}
        // onPress={() =>
        //   navigation.navigate("FancyContent", {
        //     content: item,
        //   })
        // }
      >
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{
            width: 120,
            height: 200,
            // borderRadius: 20,
            marginVertical: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
      </TouchableOpacity>
    );
    return (
      <View>
        <LinearGradient
          colors={[COLORS.lightGray, COLORS.black]}
          //   style={{ flex: 1, borderRadius: 20, opacity: 0.1 }}
        >
          <View
            style={{
              marginLeft: 5,
              marginTop: 30,
              // marginBottom: 5,
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
            contentContainerStyle={{ paddingVertical: 20 }}
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
