import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import { COLORS } from "constants/themes";
import { Library } from "screens";
import { Audiobook } from "screens";
import { Search } from "screens";
import BookstoreStack from "./BookstoreStack";
import NewsStack from "./NewsStack";

const Tab = createBottomTabNavigator();
const config = {
  NewsStack: { name: "article", type: "materialicons" },
  Library: { name: "local-library", type: "materialicons" },
  BookstoreStack: { name: "storefront", type: "materialcommunityicons" },
  Audiobook: { name: "audiotrack", type: "materialicons" },
  Search: { name: "search", type: "ionicons" },
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon
            name={config[route.name].name}
            type={config[route.name].type}
            color={focused ? "blue" : "grey"}
          />
        ),
        tabBarActiveTintColor: "grey",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: COLORS.white,
          opacity: 0.8,
        },
      })}
    >
      <Tab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{
          title: "Aujourd'hui",
          headerBackgroundContainerStyle: {
            backgroundColor: COLORS.dark,
            opacity: 0.5,
          },
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ title: "Bibliothèque" }}
      />
      <Tab.Screen
        name="BookstoreStack"
        component={BookstoreStack}
        options={{ title: "Librairie" }}
      />
      <Tab.Screen
        name="Audiobook"
        component={Audiobook}
        options={{ title: "Livres Audio" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ title: "Recherche" }}
      />
    </Tab.Navigator>
  );
};

export default Main;
