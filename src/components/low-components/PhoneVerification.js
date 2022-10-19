import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import { COLORS, icons } from "constants";
import { firebaseConfig } from "../../../firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const PhoneVerification = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidConctact: true,
    isValidPassword: true,
  });

  const handleValidContact = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidConctact: true,
      });
    } else {
      setData({
        ...data,
        isValidConctact: false,
      });
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((result) => {
        // Do something with the results here
        console.log(result);
      });
  };
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
        <View style={styles.header}>
          <Text style={styles.text_header}>Vérification 🏴‍☠️</Text>
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebase.app().options}
          />
        </View>
        <View style={[styles.footer, { backgroundColor: COLORS.white }]}>
          <Text
            style={[
              styles.text_footer,
              {
                color: COLORS.lightGrey,
              },
            ]}
          >
            Numéro de téléphone
          </Text>

          <View style={styles.action}>
            <Icon
              name="phone"
              type="feather"
              color={COLORS.lightGrey}
              size={20}
            />
            <TextInput
              placeholder="Ex : +22967529823"
              placeholderTextColor="#666666"
              keyboardType="phone-pad"
              style={[
                styles.textInput,
                {
                  color: COLORS.lightGrey,
                },
              ]}
              autoCapitalize="none"
              autoCompleteType="tel"
              onChangeText={setPhoneNumber}
              onEndEditing={(e) => handleValidContact(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Icon
                name="check-circle"
                type="feather"
                color="green"
                size={20}
              />
            ) : null}
          </View>
          {data.isValidConctact ? null : (
            <Text style={styles.errorMsg}>Au moins 4 caractères</Text>
          )}

          <TouchableOpacity
            style={[styles.signIn, { marginTop: 20 }]}
            onPress={sendVerification}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Vérification
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={[styles.action, { marginTop: 30 }]}>
            <Icon
              name="lock"
              type="feather"
              color={COLORS.lightGrey}
              size={20}
            />
            <TextInput
              placeholder="-- -- -- --"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              style={[
                styles.textInput,
                {
                  color: COLORS.lightGrey,
                },
              ]}
              autoCapitalize="none"
              autoCompleteType="tel"
              onChangeText={setCode}
              onEndEditing={(e) => handleValidContact(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Icon
                name="check-circle"
                type="feather"
                color="green"
                size={20}
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={confirmCode}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Renvoyer le code _ _ : _ _
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
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
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  text_footer: {
    color: "#05375a",
    fontSize: 18,
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
