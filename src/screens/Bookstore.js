import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import { COLORS, SIZES } from "../constants/themes";
// import dummyData from "constants/dummyData";
import {
  myBooksData,
  fancyCategoriesData,
  categoriesData,
} from "constants/dummyData";
import RenderFancyContent from "components/RenderFancyContent";
import DisplaySection from "components/DisplaySection";
import DisplayAll from "components/DisplayAll";
import RenderTrendContent from "components/RenderTrendContent";
import RenderByType from "components/RenderByType";
import SeeMore from "components/SeeMore";
import TypeMenuBox from "../components/TypeMenuBox";
import ComingSoon from "../components/ComingSoon";
import Copyright from "../components/Copyright";
import BestSellers from "../components/BestSellers";
import OurFavorites from "../components/OurFavorites";

const Bookstore = ({ navigation }) => {
  const [bookData, setBookData] = useState(myBooksData);
  const [bookCategories, setBookCategories] = useState(categoriesData);
  const [fancyCategories, setFancyCategories] = useState(fancyCategoriesData);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ top: 50 }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h1,
            fontWeight: "bold",
            marginHorizontal: 15,
          }}
        >
          Librairie
        </Text>
        <Divider
          style={{ marginHorizontal: 15, marginVertical: 10 }}
          color={COLORS.lightGray}
        />
        <DisplaySection />

        <RenderFancyContent data={fancyCategories} navigation={navigation} />

        <RenderTrendContent data={bookData} />

        <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
        <DisplayAll />

        <RenderByType data={bookData} />

        <SeeMore data={bookData} />
        <OurFavorites />
        <ComingSoon data={bookCategories} />
        <BestSellers />
        <TypeMenuBox />
        <Copyright data={bookData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookstore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginTop: StatusBar.currentHeight,
  },
});
