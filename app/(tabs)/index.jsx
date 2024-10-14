import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
import Welcome from "../../screens/auth/screen/Welcome"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "../../screens/auth/screen/Signup"
import Login from "../../screens/auth/screen/Login"
import Otp from "../../screens/auth/screen/Otp"

const Stack = createStackNavigator();

export default function () {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}  />
        <Stack.Screen name="Otp" component={Otp}  options={{ headerShown: false }}  />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}  />
        <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }}  />
        <Stack.Screen name="HomeProdct" component={HomeProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

