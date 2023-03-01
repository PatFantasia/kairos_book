import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase/app";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
// import { registration } from "services/firebaseAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserSelector, getUserAuthSelector } from "stores/selectors";
import { setUser, setAuth } from "stores/slices/authSlice";
import { COLORS, icons } from "constants";
import { firebaseConfig } from "../../../firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const signUpValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    // .matches(/(01)(\d){8}\b/, "Enter a valid phone number")
    .required("Phone number is required"),
  validationCode: Yup.number()
    // .matches(/(01)(\d){8}\b/, "Enter a valid phone number")
    .required("Phone number is required"),
  // beforeSubmission: Yup.boolean()
  //   .matches(false, "Wrong validation code")
  //   .required("Phone number is required"),
});

const PhoneVerification = ({ navigation }) => {
  const [data, setData] = useState({
    check_textInputChange: false,
    validationSucces: false,
  });

  const dispatch = useDispatch();
  const doAddUser = (user) => dispatch(setUser(user));
  const setUserAuth = (isLogged) => dispatch(setAuth(isLogged));
  const currentUser = useSelector(getCurrentUserSelector);
  const isLogged = useSelector(getUserAuthSelector);

  const handleValidContact = (val) => {
    if (val.trim().length >= 10) {
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

  const [message, showMessage] = useState();
  const attemptInvisibleVerification = false;

  const handleNextScreen = () => {
    navigation.navigate("PhoneVerification");
  };

  const sendVerification = (phoneNumber) => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();

      phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
      // console.log({ verificationId });
      showMessage({
        text: "Le code de vérification a été envoyé sur votre téléphone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };
  const confirmCode = (validationCode) => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        validationCode
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          // Do something with the results here
          console.log(result);
        });
      showMessage({ text: "Authentification réussi 👍" });
      setData({ ...data, validationSucces: true });
    } catch (err) {
      showMessage({ text: `Erreur: ${err.message}`, color: "red" });
      setData({ ...data, validationSucces: false });
    }
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
        <Formik
          initialValues={{
            username: currentUser.username,
            password: currentUser.password,
            confirmPassword: currentUser.confirmPassword,
            phoneNumber: null,
          }}
          onSubmit={(values, { resetForm }) => {
            // confirmCode(values.validationCode);
            setTimeout(() => {
              doAddUser(values);
              setUserAuth(true);
              console.log({ values });
              console.log("cc ");
              console.log("good bye");
              // handleNextScreen();
            }, 2000);
            // doAddUser(values);
            // setUserAuth(true);
            // console.log({ values });
            // console.log("cc ");
            // registration({
            //   username: values.username,
            //   password: values.password,
            //   // confirmPassword: values.confirmPassword,
            //   phoneNumber: values.phoneNumber,
            // });
            console.log({ isLogged });
            resetForm();
            // setTimeout(() => {
            //   console.log("good bye");
            //   handleNextScreen();
            // }, 2000);
          }}
          validationSchema={signUpValidationSchema}
          // validationSchema={() => ({})}
        >
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            isSubmitting,
            touched,
            handleBlur,
          }) => (
            <>
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
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    // onChangeText={setPhoneNumber}
                    onEndEditing={(e) => handleValidContact(e.nativeEvent.text)}
                  />
                  {!errors.phoneNumber ? (
                    <Icon
                      name="check-circle"
                      type="feather"
                      color="green"
                      size={20}
                    />
                  ) : (
                    <Icon
                      name="error-outline"
                      type="material-icons"
                      color="red"
                      size={25}
                    />
                  )}
                </View>

                <TouchableOpacity
                  style={[styles.signIn, { marginTop: 20 }]}
                  onPress={() => sendVerification(values.phoneNumber)}
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
                    // editable={!!verificationId}
                    // placeholder="123456"
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
                    onChangeText={handleChange("validationCode")}
                    onBlur={handleBlur("validationCode")}
                    value={values.validationCode}
                    onEndEditing={(e) => handleValidContact(e.nativeEvent.text)}
                  />
                </View>
                <TouchableOpacity
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#009387",
                      borderWidth: 1,
                      marginTop: 15,
                    },
                  ]}
                  // onPress={() => confirmCode(values.validationCode)}
                >
                  <Button
                    // title="Renvoyer le code _ _ : _ _"
                    title="Confirmer"
                    style={styles.textSign}
                    color="#009387"
                    //onPress={handleSubmit}
                    onPress={() => {
                      confirmCode(values.validationCode);
                      handleSubmit();
                    }}
                  />
                </TouchableOpacity>
                {message ? (
                  <Text style={styles.errorMsg}> {message.text}</Text>
                ) : undefined}
              </View>
              {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
            </>
          )}
        </Formik>
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
