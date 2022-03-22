import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Icon, SearchBar, Text } from "react-native-elements";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Search = ({ navigation }) => {
  // const {container, mainBoxes_wrapper, searchBar_wrapper, customText_inputBox, iconStyle} = styles;
  const [search, setSearch] = useState({ keywords: " Votre bibliothèque" });

  const handleChangeText = (value) => {
    setSearch({ keywords: value });
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        ref={(search) => (search = search)}
        cancelButtonTitle="Annuler"
        onChangeText={handleChangeText}
        value={search.keywords}
        containerStyle={styles.searchBar_wrapper2}
        // inputStyle={styles.customText_inputBox}
        // cancelButtonProps={{}}
        showCancel
        onCancel={() => {}}
      />
      <View style={styles.defaultContent}>
        {/* <Text>Recherche dans la Bibliothèque</Text> */}
        <Icon
          name="wifi-off"
          type="feather"
          size={30}
          color="blue"
          containerStyle={{ top: -10 }}
        />
        <Text h4>Vous êtes hors ligne</Text>
        <Text style={{ paddingHorizontal: 4, textAlign: "center" }} h5>
          Recherche effectuée dans votre Bibliothèque uniquement.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  mainBoxes_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 5,
  },
  searchBar_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 10,
    // position: "absolute",
    // top: 20,
    borderRadius: 8,
    width: WIDTH - WIDTH * 0.25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // elevation: 10,
  },
  searchBar_wrapper2: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // padding: 10,
    // position: "absolute",
    // top: 20,
    borderRadius: 8,
    // width : WIDTH - (WIDTH * 0.25),
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // elevation: 10,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  customText_inputBox: {
    fontSize: 14,
    color: "#303030",
    // maxWidth: '70%',
    // minWidth: '30%',
    // fontFamily: 'Poppins'
  },
  customText_button: {
    fontSize: 16,
    paddingTop: 2,
  },
  defaultContent: {
    // flexDirection: 'row',
    alignItems: "center",
    bottom: -(HEIGHT / 2.5),
  },
});
