import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
import Welcome from "../screens/auth/Welcome"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from "../screens/auth/Signup"
import Login from "../screens/auth/Login"
import Otp from "../screens/auth/Otp"

const Stack = createStackNavigator();


export default function () {
  const route = useRoute();
  
  

  return (
    
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        {/* <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}  />
        <Stack.Screen name="Otp" component={Otp}  options={{ headerShown: false }}  />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}  />
        <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }}  /> */}
        <Stack.Screen name="HomeProduct" component={HomeProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

