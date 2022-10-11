import React from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon, Divider } from "react-native-elements";

import { COLORS, SIZES } from "../constants/themes";

const ComingSoon = ({
  data,

  customStyle,
}) => {
  const header = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        bottom: 5,
      }}
    >
      <TouchableOpacity style={[{ bottom: -65, left: -50 }, customStyle]}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h1,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {" "}
          {"Bientôt disponible !"}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const footer = () => (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <Text
        style={{
          //   ...FONTS.h3,
          color: COLORS.white,
          marginLeft: 15,
          marginVertical: 10,
        }}
      >
        {" "}
        Tout afficher{""}
      </Text>
      <Icon
        name="keyboard-arrow-right"
        size={25}
        color={COLORS.lightGray}
        style={{ marginVertical: 8 }}
      />
    </TouchableOpacity>
  );
  const renderSection = (data) => {
    const fiteredBooks = data.filter(
      (item) => item.categoryName === "Bientôt Disponible"
    );

    const renderContent = ({ item }) => (
      <TouchableOpacity
        style={{
          marginLeft: SIZES.padding,
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
            width: 180,
            height: 250,
            borderRadius: 5,
            marginVertical: 15,
            justifyContent: "center",
            alignSelf: "center",
          }}
          blurRadius={5}
        />
      </TouchableOpacity>
    );
    return (
      <>
        <View
          style={{
            marginLeft: 5,
            marginTop: 30,
            // marginBottom: 5,
            height: 30,
            // width: 310,
          }}
        >
          {/* {header()} */}
        </View>
        <FlatList
          data={fiteredBooks[0].books}
          renderItem={renderContent}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={data}
        />
      </>
    );
  };
  return (
    <View style={{ marginTop: -30 }}>
      {header()}
      {renderSection(data)}
      <Divider
        style={{ marginHorizontal: 15, marginTop: 20 }}
        color={COLORS.lightGray}
      />
      {footer()}
    </View>
  );
};

export default ComingSoon;
