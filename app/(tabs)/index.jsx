import React, {useState, useEffect} from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function () {

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="HomeProduct" component={HomeProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

