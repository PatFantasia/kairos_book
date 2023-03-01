import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserSelector, getUserAuthSelector } from "stores/selectors";
import { setUser, setAuth } from "stores/slices/authSlice";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Un minimun de trois (03) lettres est requis")
    .required("Non d'utilisateur Obligatoire "),
  password: Yup.string()
    .min(5, ({ min }) => `Un minimun de ${min} lettres pour votre mot de passe`)
    .required("obligatoire"),
  confirmPassword: Yup.string()
    .min(5, ({ min }) => `Un minimun de ${min} lettres pour votre mot de passe`)
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("obligatoire"),
});

const SignInScreen = ({ navigation }) => {
  const [localData, setLocalData] = React.useState({
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const dispatch = useDispatch();
  const doAddUser = (user) => dispatch(setUser(user));
  const currentUser = useSelector(getCurrentUserSelector);
  const userIsOnline = useSelector(getUserAuthSelector);
  let secureTextEntry = true;

  const updateSecureTextEntry = () => {
    setLocalData({
      ...localData,
      secureTextEntry: !localData.secureTextEntry,
    });
    console.log({ secureTextEntry });
  };

  const updateConfirmSecureTextEntry = () => {
    setLocalData({
      ...localData,
      confirm_secureTextEntry: !localData.confirm_secureTextEntry,
    });
  };

  const handleNextScreen = () => {
    navigation.navigate("PhoneVerification");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log({ values });
          doAddUser(values);
          setTimeout(() => {
            handleNextScreen();
            console.log("good bye");
          }, 2000);
        }}
        validationSchema={validationSchema}
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
            <View style={styles.header}>
              <Text style={styles.text_header}>Inscrivez-vous !</Text>
            </View>
            <View style={styles.footer}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.text_footer}>Nom d&apos;utilisateur</Text>
                <View style={styles.action}>
                  <Icon name="user" type="feather" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Nom d'utilisateur"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                  {!errors.username ? (
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
                <Text style={styles.errorMsg}>
                  {touched.username && errors.username ? errors.username : null}
                </Text>

                <Text
                  style={[
                    styles.text_footer,
                    {
                      marginTop: 35,
                    },
                  ]}
                >
                  Mot de Passe{" "}
                </Text>
                <View style={styles.action}>
                  <Icon name="lock" type="feather" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Your Password"
                    secureTextEntry={localData.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {localData.secureTextEntry ? (
                      <Icon
                        name="eye-off"
                        type="feather"
                        color="grey"
                        size={20}
                      />
                    ) : (
                      <Icon name="eye" type="feather" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={styles.errorMsg}>
                  {touched.password && errors.password ? errors.password : null}
                </Text>
                <Text
                  style={[
                    styles.text_footer,
                    {
                      marginTop: 35,
                    },
                  ]}
                >
                  Confirmation du Mot de Passe
                </Text>
                <View style={styles.action}>
                  <Icon name="lock" type="feather" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Confirm Your Password"
                    secureTextEntry={
                      localData.confirm_secureTextEntry ? true : false
                    }
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                  />
                  <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {localData.confirm_secureTextEntry ? (
                      <Icon
                        name="eye-off"
                        type="feather"
                        color="grey"
                        size={20}
                      />
                    ) : (
                      <Icon name="eye" type="feather" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <Text style={styles.errorMsg}>
                  {touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : null}
                </Text>

                <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                    En vous inscrivant, vous acceptez nos
                  </Text>
                  <Text
                    style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                  >
                    {" "}
                    conditions générales d&apos;utilisations{" "}
                  </Text>
                  <Text style={styles.color_textPrivate}> et de</Text>
                  <Text
                    style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                  >
                    {" "}
                    confidentialité
                  </Text>
                </View>
                <View style={styles.button}>
                  <TouchableOpacity style={styles.signIn}>
                    <LinearGradient
                      colors={["#08d4c4", "#01ab9d"]}
                      style={styles.signIn}
                    >
                      <Button
                        title="S'inscrire"
                        style={styles.textSign}
                        color="#fff"
                        onPress={handleSubmit}
                        disabled={!isValid}
                      />
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
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
                      onPress={() => navigation.navigate("SingIn")}
                    >
                      Se Connecter
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignInScreen;

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
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
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
  errorMsg: {
    marginTop: 10,
    color: "#FF0000",
    fontSize: 14,
    textAlign: "center",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
