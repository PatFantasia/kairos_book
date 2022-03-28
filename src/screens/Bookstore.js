import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import { COLORS } from "../constants/themes";
// import dummyData from "constants/dummyData";
import {
  myBooksData,
  categoriesData,
  fancyCategoriesData,
} from "constants/dummyData";
import RenderFancyContent from "components/RenderFancyContent";
import DisplaySection from "components/DisplaySection";
import DisplayAll from "components/DisplayAll";
import RenderTrendContent from "components/RenderTrendContent";
import RenderByGenre from "components/RenderByGenre";
import SeeMore from "components/SeeMore";

const Bookstore = ({ navigation }) => {
  const [bookData, setBookData] = useState(myBooksData);
  const [fancyCategories, setFancyCategories] = useState(fancyCategoriesData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ height: 200 }}>
          <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
          <DisplaySection />
        </View>

        <View style={{ height: 380, top: -150 }}>
          <RenderFancyContent data={fancyCategories} />
        </View>

        <View style={{ height: 550, top: -150 }}>
          <RenderTrendContent data={bookData} />
        </View>

        <View style={{ height: 200, top: -150 }}>
          <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
          <DisplayAll />
        </View>

        <View style={{ height: 550, top: -150 }}>
          <RenderByGenre data={bookData} />
        </View>

        <View style={{ top: -320 }}>
          <SeeMore data={bookData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookstore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginTop: StatusBar.currentHeight || 0,
  },
});
