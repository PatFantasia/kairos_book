import React from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { Icon } from "react-native-elements";

import { COLORS, SIZES } from "../constants/themes";

const AuthorBooks = ({ data, title }) => {
  const header = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        bottom: 5,
      }}
    >
      <TouchableOpacity style={{ marginLeft: -45 }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h3,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {" "}
          {title}{" "}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h3,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {" "}
          {data[0].author}{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", marginRight: -35 }}>
        <Text
          style={{ color: COLORS.white, marginLeft: -12, fontSize: SIZES.h3 }}
        >
          {" "}
          Tout afficher{" "}
        </Text>
        <Icon
          name="keyboard-arrow-right"
          size={25}
          color={COLORS.lightGray}
          style={{ marginLeft: -2 }}
        />
      </TouchableOpacity>
    </View>
  );
  const footer = (item) => (
    <View
      style={{
        justifyContent: "space-between",
        height: 60,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.h4,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {" "}
        {item.bookName}{" "}
      </Text>
      <Text
        style={{
          color: COLORS.lightGray,
          fontSize: SIZES.h4,
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {" "}
        {data[0].author}{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          borderRadius: 25,
          borderWidth: 1,
          width: 100,
          borderColor: COLORS.white,
        }}
      >
        <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
          {" "}
          {item.price}
          {" FCFA "}
        </Text>
      </View>
    </View>
  );

  const renderSection = (data) => {
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
        {footer(item)}
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
          {header()}
        </View>
        <FlatList
          data={data}
          renderItem={renderContent}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={data}
        />
      </>
    );
  };
  return renderSection(data);
};

export default AuthorBooks;
