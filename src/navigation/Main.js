import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Tabs from "./Tabs";
import { Profile, Bookstore } from "screens";
import { OnboardingScreen } from "screens";
import LibraryItemContent from "components/LibraryItemContent";
import AccountSetting from "components/AccountSetting";
import SingUp from "../screens/SingUp";
import { COLORS, SIZES } from "constants/themes";
import { BlurView } from "expo-blur";

const Stack = createStackNavigator();

const Main = () => {
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
    <NavigationContainer>
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
          name="Tabs"
          component={Tabs}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () =>
              getHeaderTitle(route) === "Aujourd'hui" ? (
                <AccountSetting />
              ) : null,
            headerTitleAlign: "center", // for Android platform, it's default setting on ios
          })}
        />
        <Stack.Screen
          name="LibraryItem"
          component={LibraryItemContent}
          options={{ headerShown: false, presentation: "modal" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
