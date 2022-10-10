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

import { COLORS, SIZES } from "../../constants/themes";

const SeeMore = ({ data }) => {
  const renderSection = (data) => {
    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: -35,
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
            width: 365,
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
      <View style={{ marginTop: 40 }}>
        <LinearGradient colors={[COLORS.gray, COLORS.black]}>
          <View
            style={{
              marginLeft: 15,
              marginTop: 30,
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
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
