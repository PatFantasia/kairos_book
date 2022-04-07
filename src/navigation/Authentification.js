import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Library, OnboardingScreen } from "screens";

import SingUp from "../screens/SingUp";
import { COLORS } from "constants/themes";

const Stack = createStackNavigator();

const Authentification = (onboarding, auth) => {
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Bibliothèque";
    const renameRoutes = {
      News: "Aujourd'hui",
      Library: "Bibliothèque",
      Bookstore: "Librairie",
      Audiobook: "Livres Audio",
      Search: "Rechercher",
    };
    return renameRoutes[routeName];
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
        headerBackgroundContainerStyle: {
          backgroundColor: COLORS.white,
          opacity: 0.5,
        },
        headerTransparent: true,
        headerTitleStyle: {
          color: COLORS.white,
        },
      }}
    >
      {onboarding ? (
        <Stack.Group>
          <Stack.Screen
            name="OnboardingScreen"
            component={OnboardingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : !auth ? (
        <Stack.Group>
          <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};

export default Authentification;
