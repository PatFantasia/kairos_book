import React from "react";
import { StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import {
  onboardingPicture_one,
  onboardingPicture_two,
  onboardingPicture_three,
} from "../constants/images";
import { SIZES, COLORS } from "../constants/themes";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate("SingUp0")}
      imageContainerStyles={styles.imgBox}
      titleStyles={styles.mainText}
      subTitleStyles={styles.subText}
      nextLabel="Suivant"
      showSkip={false}
      pages={[
        {
          backgroundColor: "#fff",
          title: "Prenez du Plaisir à lire",
          subtitle:
            " Découvrez le quartier latin de l'Afrique sous la plume de ses nombreux auteurs talentueux.",
          image: (
            <Image style={styles.onboarding} source={onboardingPicture_one} />
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image style={styles.onboarding} source={onboardingPicture_two} />
          ),
          title: "Recherchez et Achetez",
          subtitle:
            " Bénéficiez en quelques clics d'une sélection des meilleurs ouvrages béninois. Choisissez et achetez au meilleur prix du marché ",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image style={styles.onboarding} source={onboardingPicture_three} />
          ),
          title: "Créer votre bibliothèque personnelle",
          subtitle:
            "Tous les livres que vous acheterez resteront pour toujours dans votre bibliothèque personnelle. Vous pourrez y accéder sur les supports que nous vous proposons.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  onboarding: {
    width: 310,
    height: 300,
    bottom: 80,
  },
  mainText: {
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.lightBlue,
    bottom: 100,
  },
  subText: {
    fontSize: SIZES.h4,
    color: COLORS.lightGray,
    bottom: 100,
  },
});

export default OnboardingScreen;
