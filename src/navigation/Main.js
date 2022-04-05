import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Tabs from "./Tabs";
import { Profile } from "screens";
import { OnboardingScreen } from "screens";
import LibraryItemContent from "components/LibraryItemContent";
import AccountSetting from "components/AccountSetting";
import SingUp from "../screens/SingUp";
import { COLORS } from "constants/themes";
import { Icon } from "react-native-elements";

// const Stack = createStackNavigator();
import { News } from "screens";
import { Library } from "screens";
import { Bookstore } from "screens";
import { Audiobook } from "screens";
import { Search } from "screens";
import FirstStart from "./FirstStart";
import BookstoreStack from "./BookstoreStack";

const Tab = createBottomTabNavigator();
const config = {
  News: { name: "article", type: "materialicons" },
  Library: { name: "local-library", type: "materialicons" },
  Bookstore: { name: "storefront", type: "materialcommunityicons" },
  Audiobook: { name: "audiotrack", type: "materialicons" },
  Search: { name: "search", type: "ionicons" },
};

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Library"
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ focused }) => (
//           <Icon
//             name={config[route.name].name}
//             type={config[route.name].type}
//             color={focused ? "blue" : "grey"}
//           />
//         ),
//         tabBarActiveTintColor: "grey",
//         tabBarStyle: {
//           position: "absolute",
//           backgroundColor: COLORS.white,
//           opacity: 0.8,
//         },
//       })}
//     >
//       <Tab.Screen
//         name="News"
//         component={News}
//         options={{ title: "Aujourd'hui" }}
//       />
//       <Tab.Screen
//         name="Library"
//         component={FirstStart}
//         options={{ title: "Bibliothèque" }}
//       />
//       <Tab.Screen
//         name="Bookstore"
//         component={BookstoreStack}
//         options={{ title: "Librairie" }}
//       />
//       <Tab.Screen
//         name="Audiobook"
//         component={Audiobook}
//         options={{ title: "Livres Audio" }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//         options={{ title: "Recherche" }}
//       />
//     </Tab.Navigator>
//   );
// };

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
          options={{
            title: "Aujourd'hui",
            headerShown: true,
            headerBackgroundContainerStyle: {
              backgroundColor: COLORS.dark,
              opacity: 0.5,
            },
          }}
        />
        <Tab.Screen
          name="Library"
          component={FirstStart}
          options={{ title: "Bibliothèque" }}
        />
        <Tab.Screen
          name="Bookstore"
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
    </NavigationContainer>
  );
};

export default Main;
