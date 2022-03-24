import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { Icon, SearchBar, Divider } from "react-native-elements";
import { COLORS, SIZES } from "constants/themes";

const Search = () => {
  const [search, setSearch] = useState({ keywords: " Votre bibliothèque" });

  const handleChangeText = (value) => {
    setSearch({ keywords: value });
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        // ref={(search) => (search = search)}
        cancelButtonTitle="Annuler"
        onChangeText={handleChangeText}
        value={search.keywords}
        containerStyle={styles.searchBar_wrapper}
        showCancel
        // onCancel={() => {}}
      />
      <Divider style={{ marginHorizontal: 15 }} color={COLORS.lightGray} />

      <View style={styles.defaultContent}>
        <Icon
          name="wifi-off"
          type="feather"
          size={30}
          color="blue"
          containerStyle={{ top: -10 }}
        />
        <Text h4>Vous êtes hors ligne</Text>
        <Text
          style={{
            paddingHorizontal: 4,
            textAlign: "center",
            fontSize: SIZES.h4,
            color: COLORS.white,
          }}
        >
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

  searchBar_wrapper: {
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  defaultContent: {
    alignItems: "center",
    bottom: -(SIZES.HEIGHT / 2.5),
  },
});
