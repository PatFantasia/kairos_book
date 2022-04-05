import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";

import { Icon } from "react-native-elements";

import { News } from "screens";
import { Library } from "screens";
import { Bookstore } from "screens";
import { Audiobook } from "screens";
import { Search } from "screens";
import { COLORS } from "constants";

const Tab = createBottomTabNavigator();
const config = {
  News: { name: "article", type: "materialicons" },
  Library: { name: "local-library", type: "materialicons" },
  Bookstore: { name: "storefront", type: "materialcommunityicons" },
  Audiobook: { name: "audiotrack", type: "materialicons" },
  Search: { name: "search", type: "ionicons" },
};

const Tabs = () => {
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
        name="News"
        component={News}
        options={{ title: "Aujourd'hui" }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ title: "Bibliothèque" }}
      />
      <Tab.Screen
        name="Bookstore"
        component={Bookstore}
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

export default Tabs;
