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

const SeeMore = ({ data }) => {
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
            width: 360,
            height: 200,
            borderRadius: 20,
            marginVertical: 15,
            marginLeft: 30,
            justifyContent: "center",
            alignSelf: "center",
          }}
          blurRadius={5}
        />
      </TouchableOpacity>
    );
    return (
      <View>
        <LinearGradient
          colors={[COLORS.gray, COLORS.black]}
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
            <Text style={styles.primaryTitle}> Plus à découvrir </Text>
          </View>

          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={renderContent}
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            extraData={data}
          />
        </LinearGradient>
      </View>
    );
  };
  return renderSection(data);
};

export default SeeMore;

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.whiteSmooth,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
