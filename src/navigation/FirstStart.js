import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Library, OnboardingScreen } from "screens";

import SingUp from "../screens/SingUp";
import { COLORS } from "constants/themes";

const Stack = createStackNavigator();

const FirstStart = () => {
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
  let isFirstTime = false;
  let isLoggedIn = true;

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
      {isFirstTime ? (
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
      ) : !isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="SingUp"
            component={SingUp}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : null}

      <Stack.Group>
        <Stack.Screen
          name="Library"
          component={Library}
          options={{ title: "Librairie" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FirstStart;
