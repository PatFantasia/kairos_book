import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { newsData } from "constants/dummyData";
import { COLORS, SIZES } from "constants/themes";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewsBox = (data, navigation) => {
  //   const renderSection = () => {
  //     const renderContent = item => {
  //         <TouchableOpacity
  //             onPress={navigation.navigate("NewsItem"),  }
  //         >
  //         <ImageBackground
  //           source={item.newsCover}
  //           style={styles.background}
  //         >
  //           <Text style={styles.headerTitle}>{item.categoryName}</Text>
  //           <Text style={styles.headerSubtitle}>{item.categoryInfo}</Text>
  //           <Text style={styles.footerComment}>{item.footerMessage}</Text>
  //         </ImageBackground>
  //       </TouchableOpacity>
  //     }
  //   }
  return (
    <View>
      <TouchableOpacity>
        <ImageBackground
          source={newsData[0].newsCover}
          style={styles.background}
        >
          <Text style={styles.headerTitle}>{newsData[0].categoryName}</Text>
          <Text style={styles.headerSubtitle}>{newsData[0].categoryInfo}</Text>
          <Text style={styles.footerComment}>{newsData[0].footerMessage}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default NewsBox;

const styles = StyleSheet.create({
  background: {
    width: SIZES.WIDTH * 0.8,
    height: SIZES.HEIGHT * 0.6,
    opacity: 0.5,
    borderRadius: 30,
  },
  headerTitle: {
    fontSize: SIZES.h3,
    color: COLORS.lightGray2,
    marginLeft: 15,
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: SIZES.h2,
    fontWeight: "bold",
    color: COLORS.white,
    marginLeft: 15,
    marginTop: 10,
  },

  footerComment: {
    marginTop: SIZES.HEIGHT * 0.46,
    fontSize: SIZES.h4,
    color: COLORS.white,
    marginLeft: 15,
    opacity: 0.4,
  },
});
