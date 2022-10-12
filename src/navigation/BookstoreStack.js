import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { Bookstore } from "screens";

import BookstoreItemContent from "components/high-components/BookstoreItemContent";
import { COLORS } from "constants/themes";

const Stack = createStackNavigator();

const BookstoreStack = () => {
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
      <Stack.Group>
        <Stack.Screen
          name="Bookstore"
          component={Bookstore}
          //   options={{ headerShown: false }}
          options={{ title: "Librairie" }}
        />
        <Stack.Screen
          name="BookstoreItem"
          component={BookstoreItemContent}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BookstoreStack;
