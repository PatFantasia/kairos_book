import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { OnboardingScreen } from "screens";

import SignIn from "components/low-components/SingIn";
import SingUp from "components/middle-components/SingUp";
import ForgottenPassword from "components/low-components/ForgottenPassword";
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
          <Stack.Screen
            name="SingIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgottenPassword"
            component={ForgottenPassword}
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
          <Stack.Screen
            name="SingIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgottenPassword"
            component={ForgottenPassword}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : null}
    </Stack.Navigator>
  );
};

export default Authentification;
