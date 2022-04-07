import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { COLORS, SIZES } from "../constants/themes";
import images from "constants/images";

const OurFavorites = ({ data, navigation }) => {
  const renderSection = (data) => {
    return (
      <View
        style={{
          marginTop: 40,
          backgroundColor: "red",
          top: -100,
        }}
      >
        {/* <LinearGradient colors={[COLORS.lightGray, COLORS.black]}> */}
        {/* <ImageBackground
            source={favoritesBooks}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              height: 300,
              width: 310,
            }}
          > */}
        <View
          style={{
            marginLeft: 15,
            // marginTop: 30,
            height: 100,
            width: 310,
            //   backgroundColor: "blue",
          }}
        >
          <Text style={styles.primaryTitle}> Nos coups de c&oelig;ur </Text>
          <Text style={styles.secondarySubtitle}>
            {" "}
            Les livres que nous vous conseillons de lire absolument{" "}
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.lightGray,
              marginLeft: 15,
              fontSize: SIZES.h3,
            }}
          >
            {" "}
            Parcourir les sélections{" "}
          </Text>
          <Icon
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.lightGray}
            style={{ margin: -3 }}
          />
        </TouchableOpacity>
        {/* </ImageBackground> */}
        {/* </LinearGradient> */}
      </View>
    );
  };
  return (
    <ImageBackground
      source={images.favoritesBooks}
      resizeMode="cover"
      blurRadius={3}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        height: 300,
        width: 400,
      }}
    >
      {renderSection(data)}
    </ImageBackground>
  );
};

export default OurFavorites;

const styles = StyleSheet.create({
  secondarySubtitle: {
    color: COLORS.lightGray2,
    fontSize: SIZES.h4,
    fontWeight: "bold",
    textAlign: "left",
  },
  primaryTitle: {
    color: COLORS.whiteSmooth,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
  },
});
