import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from '../screens/';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const Main = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown : false
            }}
        >
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Profile" component={Profile} options={{title: "Profile"}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Main;

