import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Divider } from "@rneui/themed";
import { COLORS, SIZES } from "constants/themes";

import {
  myBooksData,
  fancyCategoriesData,
  categoriesData,
} from "constants/dummyData";
import RenderFancyContent from "components/low-components/RenderFancyContent";
import DisplaySection from "components/low-components/DisplaySection";
import DisplayAll from "components/low-components/DisplayAll";
import RenderTrendContent from "components/low-components/RenderTrendContent";
import RenderByType from "components/low-components/RenderByType";
import SeeMore from "components/low-components/SeeMore";
import ComingSoon from "components/low-components/ComingSoon";
import Copyright from "components/low-components/Copyright";
import OurFavorites from "components/low-components/OurFavorites";
import RecommendedForYou from "components/low-components/RecommendedForYou";
import TypeMenuBox from "components/middle-components/TypeMenuBox";
import BestSellers from "components/high-components/BestSellers";
import RankingBook from "components/high-components/RankingBook";

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
        <DisplaySection title={"Parcourir les sections"} />

        <RenderFancyContent data={fancyCategories} navigation={navigation} />

        <RenderTrendContent data={bookData} />

        <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
        <DisplayAll />

        <RenderByType data={bookData} />
        <RankingBook />
        <RecommendedForYou data={bookData} />
        <Divider
          style={{ marginHorizontal: 15, top: -15 }}
          color={COLORS.lightGray}
        />
        <DisplayAll customStyle={{ top: -15 }} />
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
