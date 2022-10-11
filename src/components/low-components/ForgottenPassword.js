import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";
import { COLORS, icons } from "constants";
import NewPassword from "./NewPassword";
import PhoneVerification from "./PhoneVerification";

const ForgottenPassword = ({ navigation }) => {
  let checkedContact = false;
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginHorizontal: 10,
            alignItems: "flex-end",
          }}
          onPress={() => navigation.goBack()}
        >
          <Icon
            source={icons.more_icon}
            name="closecircleo"
            type="antdesign"
            color={COLORS.lightGray}
          />
        </TouchableOpacity>
        {!checkedContact ? (
          <>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
            <View style={styles.header}>
              <Text style={styles.text_header}>Pas de Soucis 👼 !</Text>
            </View>
            <PhoneVerification />
          </>
        ) : (
          <>
            <View style={styles.header}>
              <Text style={styles.text_header}>Mot de Passe 🏴‍☠️</Text>
            </View>
            <NewPassword />
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default ForgottenPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
});
