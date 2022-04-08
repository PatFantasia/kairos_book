import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { COLORS, SIZES } from "../constants/themes";
import images from "constants/images";

const OurFavorites = ({ data, navigation }) => {
  const renderSection = (data) => {
    return (
      <View
        style={{
          marginTop: 40,
          top: -100,
        }}
      >
        <View
          style={{
            // marginLeft: -15,
            paddingTop: 25,
            height: 100,
            width: 310,
          }}
        >
          <Text style={styles.primaryTitle}> Nos coups de c&oelig;ur </Text>
          <Text style={styles.secondarySubtitle}>
            {" "}
            Les livres que nous vous conseillons de lire absolument{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderRadius: 25,
            backgroundColor: COLORS.lightGray3,
            width: 230,
            marginLeft: -15,

            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
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
            color={COLORS.white}
            style={{ margin: -3 }}
          />
        </TouchableOpacity>
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
        marginTop: 15,
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
    color: COLORS.lightGray4,
    fontSize: SIZES.h4,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: -15,
  },
  primaryTitle: {
    color: COLORS.white,
    fontSize: SIZES.h2,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: -15,
  },
});
