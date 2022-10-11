import React from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import { Divider } from "@rneui/themed";

import { COLORS, SIZES } from "constants/themes";
import DisplayAll from "components/low-components/DisplayAll";

interface Props {
  data: object;
  bookInfo: {
    author: string;
    bookName: string;
  };
  title: string;
  audiobook: string;
  specialCategory?: string;
  customStyle: object;
}
const AuthorBooks: React.FC<Props> = ({
  data,
  bookInfo,
  title,
  audiobook,
  specialCategory,
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
      <TouchableOpacity style={[{ marginLeft: -45 }, customStyle]}>
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
          {specialCategory
            ? specialCategory
            : audiobook
            ? " de : " + bookInfo.author
            : bookInfo.author}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: "row", marginRight: -35 }}>
        <DisplayAll
          customStyle={{ marginHorizontal: -95, marginVertical: -10, top: -10 }}
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
        {bookInfo.author}{" "}
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
          {audiobook ? "8000" : item.price}
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
        {audiobook ? (
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 180,
              borderRadius: 5,
              marginVertical: 15,
              justifyContent: "center",
              alignSelf: "center",
            }}
            blurRadius={5}
          />
        ) : (
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
        )}
        {!specialCategory ? footer(item) : null}
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
  return (
    <>
      {renderSection(data)}
      <Divider
        style={{ marginHorizontal: 15, marginTop: 20 }}
        color={COLORS.lightGray}
      />
    </>
  );
};

export default AuthorBooks;
