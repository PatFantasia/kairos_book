import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { COLORS } from "../../constants/themes";
import LibraryBookFooter from "../low-components/LibraryBookFooter";

const LibraryBookStoreLite = ({ data }) => {
  return (
    <View>
      {data.map((book, index) => (
        <>
          <View
            key={index.toString()}
            style={{
              flexDirection: "row",
              marginLeft: 15,
            }}
          >
            <TouchableOpacity>
              <Image
                source={book.bookCover}
                resizeMode="cover"
                style={{
                  width: 70,
                  height: 100,
                  margin: 15,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                blurRadius={3}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ color: COLORS.white }}>
                <Text style={{ color: COLORS.white }}> {book.bookName} </Text>
                <Text style={{ color: COLORS.lightGray4 }}>
                  {" "}
                  {book.author}{" "}
                </Text>
                <LibraryBookFooter
                  customStyle={{
                    justifyContent: "space-between",
                    width: 280,
                    marginVertical: 2,
                    marginLeft: 5,
                  }}
                />
              </View>
            </View>
          </View>
          <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />
        </>
      ))}
    </View>
  );
};

export default LibraryBookStoreLite;
