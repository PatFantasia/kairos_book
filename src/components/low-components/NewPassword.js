import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";

import { COLORS } from "constants/themes";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";

const NewPassword = () => {
  const [data, setData] = React.useState({
    password_first: "",
    password_second: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password_second: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password_second: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (password_first, password_second) => {
    if (data.password_first.length == 0 || data.password_second.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "password_first or password_second field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }
  };

  return (
    <View style={[styles.footer, { backgroundColor: COLORS.white }]}>
      <Text
        style={[
          styles.text_footer,
          {
            color: COLORS.lightGrey,
            marginTop: 35,
          },
        ]}
      >
        Insérez Votre Nouveau Mot de Passe
      </Text>
      <View style={styles.action}>
        <Icon name="lock" type="feather" color={COLORS.lightGrey} size={20} />
        <TextInput
          placeholder="Votre Mot de Passe"
          placeholderTextColor="#666666"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              color: COLORS.lightGrey,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Icon name="eye-off" type="feather" color="grey" size={20} />
          ) : (
            <Icon name="eye" type="feather" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {data.isValidPassword ? null : (
        <Text style={styles.errorMsg}>Au moins 8 caractères.</Text>
      )}

      <Text
        style={[
          styles.text_footer,
          {
            color: COLORS.lightGrey,
            marginTop: 15,
          },
        ]}
      >
        Confirmez Votre Nouveau Mot de Passe
      </Text>
      <View style={styles.action}>
        <Icon name="lock" type="feather" color={COLORS.lightGrey} size={20} />
        <TextInput
          placeholder="Votre Mot de Passe"
          placeholderTextColor="#666666"
          secureTextEntry={data.secureTextEntry ? true : false}
          style={[
            styles.textInput,
            {
              color: COLORS.lightGrey,
            },
          ]}
          autoCapitalize="none"
          onChangeText={(val) => handlePasswordChange(val)}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Icon name="eye-off" type="feather" color="grey" size={20} />
          ) : (
            <Icon name="eye" type="feather" color="grey" size={20} />
          )}
        </TouchableOpacity>
      </View>
      {data.isValidPassword ? null : (
        <Text style={styles.errorMsg}>Au moins 8 caractères.</Text>
      )}

      <View style={[styles.button, { marginTop: 25 }]}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            loginHandle(data.password_first, data.password_second);
          }}
        >
          <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Continuer
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },

  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
