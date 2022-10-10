import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Divider } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native";

import { COLORS, SIZES } from "constants/themes";
import DisplaySection from "components/low-components/DisplaySection";
import { myBooksData } from "constants/dummyData";
import LibraryBookStore from "components/middle-components/LibraryBookStore";
import LibraryBookStoreLite from "components/middle-components/LibraryBookStoreLite";

const Library = () => {
  const [bookData, setBookData] = useState(myBooksData);
  const [switchMenu, setSwitchMenu] = useState(false);
  const onPress = () => setSwitchMenu(!switchMenu);
  useEffect(() => {
    // You can use ScrollView with "react-native-virtualized-view" to fix it, but it have side effect
    // This Error can't break the code while scrollEnabled will be false in Flat list.
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ top: 50 }} showsHorizontalScrollIndicator={false}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.h1,
            fontWeight: "bold",
            marginHorizontal: 15,
          }}
        >
          Bibliothèque
        </Text>
        <Divider
          style={{ marginHorizontal: 15, marginVertical: 10 }}
          color={COLORS.lightGray}
        />
        <DisplaySection title={"  Collections          "} />
        <Divider
          style={{ marginHorizontal: 15, marginVertical: 10 }}
          color={COLORS.lightGray}
        />
        <Text
          style={{
            color: COLORS.lightGray,
            fontSize: SIZES.h4,
            marginHorizontal: 20,
            marginVertical: 10,
          }}
        >
          {" "}
          10 livres, 1 série{" "}
        </Text>
        <Divider
          style={{ marginHorizontal: 15, marginVertical: 10 }}
          color={COLORS.lightGray}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray,
              fontSize: SIZES.h4,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          >
            {" "}
            TRIER{" "}
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: -40,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.h4,
                fontWeight: "bold",
                marginLeft: 20,
                marginVertical: 10,
                // backgroundColor: "blue",
              }}
            >
              {" "}
              MANUELLEMENT{" "}
            </Text>
            <Icon
              name="keyboard-arrow-down"
              size={20}
              color={COLORS.white}
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              left: 140,
            }}
            onPress={onPress}
          >
            <Ionicons
              name="ios-menu"
              size={30}
              color={switchMenu ? COLORS.lightGray : COLORS.white}
              style={{ marginTop: 5 }}
            />
          </TouchableOpacity>
        </View>
        {switchMenu ? (
          <LibraryBookStoreLite data={bookData} />
        ) : (
          <LibraryBookStore data={bookData} />
        )}
        <View style={{ marginVertical: 80 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.black,
  },
});
