import React from "react";
import { View, ScrollView } from "react-native";

import MetaInfoDetails from "../low-components/MetaInfoDetails";
import { SIZES } from "../../constants/themes";

const MetaInfo = ({ book }) => {
  const { genre, release_date, language, pageNo, publishing_house, size } =
    book;
  const renderContent = () => (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <MetaInfoDetails top={"GENRE"} icon bottom={genre} />
      <MetaInfoDetails
        top={"SORTIE"}
        middle={release_date.year}
        bottom={`${release_date.date} ${release_date.month}`}
      />
      <MetaInfoDetails
        top={"LANGUE"}
        middle={language}
        bottom={language === "Fr" ? "français" : "Anglais"}
      />
      <MetaInfoDetails top={"PAGES"} middle={pageNo} bottom={"pages"} />
      <MetaInfoDetails
        top={"EDITIONS"}
        middle={publishing_house}
        middleCustomStyle={{ fontSize: SIZES.h4, paddingTop: 5 }}
      />
      <MetaInfoDetails top={"TAILLE"} middle={size} bottom={"Mo"} />
    </View>
  );
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>{renderContent()}</View>
    </ScrollView>
  );
};

export default MetaInfo;
