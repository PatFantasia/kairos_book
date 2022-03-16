import React from 'react';
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import {BlurView} from 'expo-blur';

import {News} from '../screens';
import {Library} from '../screens';
import {Bookstore} from '../screens';
import {Audiobook} from '../screens';
import {Search} from '../screens';

const Tab = createBottomTabNavigator();
const config = {
  News : { name:"article", type:"materialicons"},
  Library : { name:"local-library", type:"materialicons"},
  Bookstore : { name:"storefront", type:"materialcommunityicons"},
  Audiobook : { name:"audiotrack", type:"materialicons"},
  Search : { name:"search", type:"ionicons"},
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions= {({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon 
              name = {config[route.name].name}
              type = {config[route.name].type}
              color = {focused? "blue" : "grey"}
            />
          ),
          tabBarStyle: {position: "absolute"},
          tabBarBackground: () => (
            <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
          ),
          

       
        })
      }
    >
        <Tab.Screen name="News" component={News} options={{title: "Aujourd'hui"}} />
        <Tab.Screen name="Library" component={Library} options={{title: "Bibliothèque"}} />
        <Tab.Screen name="Bookstore" component={Bookstore} options={{title: "Librairie"}} />
        <Tab.Screen name="Audiobook" component={Audiobook} options={{title: "Livres Audio"}} />
        <Tab.Screen name="Search" component={Search} options={{title: "Recherche"}} />
    </Tab.Navigator>
  )
}

export default Tabs;

