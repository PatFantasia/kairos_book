import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { News } from "screens";

import NewsItemContent from "components/high-components/NewsItemContent";
import { COLORS } from "constants/themes";

const Stack = createStackNavigator();

const NewsStack = () => {
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
          name="News"
          component={News}
          options={{ title: "Aujourd'hui" }}
        />
        <Stack.Screen
          name="NewsItem"
          component={NewsItemContent}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default NewsStack;
