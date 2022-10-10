import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { COLORS, SIZES } from "constants/themes";
import DisplayAll from "components/low-components/DisplayAll";

const RankingBox = ({ data, indexCategory }) => {
  return (
    <View>
      <Text style={{ color: COLORS.white, fontSize: SIZES.h3, marginLeft: 15 }}>
        {data[indexCategory].categoryName.toUpperCase()}
      </Text>
      {data[indexCategory].books.map((book, index) => (
        <View key={index.toString()}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 15,
            }}
          >
            <Image
              source={book.bookCover}
              resizeMode="cover"
              style={{
                width: 70,
                height: 100,
                marginVertical: 15,
                justifyContent: "center",
                alignSelf: "center",
              }}
              blurRadius={3}
            />
            <View
              style={{ flexDirection: "row", alignItems: "center" }}
              key={index.toString()}
            >
              <Text style={[styles.primaryTitle, { marginHorizontal: 10 }]}>
                {" "}
                {index + 1}{" "}
              </Text>
              <View style={{ color: COLORS.white }} key={index.toString()}>
                <Text style={{ color: COLORS.white }}> {book.bookName} </Text>
                <Text style={{ color: COLORS.lightGray4 }}>
                  {" "}
                  {book.author}{" "}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
          {index === 2 ? (
            <DisplayAll
              title={`Voir plus de livres ${data[indexCategory].categoryName} `}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default RankingBox;

const styles = StyleSheet.create({
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
