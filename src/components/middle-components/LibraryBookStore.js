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

import images from "constants/images";
import { COLORS, SIZES } from "constants/themes";
import { immigritude } from "constants/dummyData";
import LibraryBookFooter from "components/low-components/LibraryBookFooter";

const LibrayBookStore = ({ data, navigation }) => {
  const renderSection = (data) => {
    const renderContent = ({ item, index }) => (
      <View key={item.id}>
        <TouchableOpacity
          style={{
            marginHorizontal: SIZES.padding,
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
              width: 160,
              height: 220,
              marginVertical: 15,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </TouchableOpacity>
        <LibraryBookFooter />
      </View>
    );
    return (
      <View style={{ marginTop: 40 }}>
        {/* <ScrollView
          // horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginLeft: 5, paddingVertical: 20 }}
        > */}
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderContent}
          keyExtractor={(item) => item.id}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          extraData={data}
          //   contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
        />
        {/* </ScrollView> */}
      </View>
    );
  };
  return renderSection(data);
};

export default LibrayBookStore;
