import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import {Profile} from '../screens/';
import Tabs from './Tabs';
import {Profile} from '../screens/';
import {OnboardingScreen} from '../screens/';

const Stack = createStackNavigator();

const Main = () => {
    const getHeaderTitle = route => {
        const routeName = getFocusedRouteNameFromRoute(route)??  'Bibliothèque';
      const defaultName = getFocusedRouteNameFromRoute(route) ==='Tabs'? 'Bibliothèque':'null';
        const routeName = (getFocusedRouteNameFromRoute(route)??  'Bibliothèque') || defaultName ;
        
        const renameRoutes = {
          News : "Aujourd'hui",
          Library : "Bibliothèque",
          Bookstore : "Librairie",
          Audiobook : "Livres Audio",
          Search : "Rechercher"
        }
        return renameRoutes[routeName] ;
      }
      
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}} />
            <Stack.Screen 
                name="Tabs" 
                component={Tabs}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                  })} 
            
            />
            <Stack.Screen name="Profile" component={Profile} options={{title: "Profile"}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Main;

