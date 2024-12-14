import React, {useState, useEffect} from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StripeProvider, useStripe} from "@stripe/stripe-react-native"
const Stack = createStackNavigator();


export default function () {

  return (
      <StripeProvider publishableKey='pk_test_51QTp1tRoCINf8JKm8oBzo58aHMov2tY1rh2ZxHtDom9xTwaNakG1YSpfXLZvM1DOuwrDV0TEIewV8T9ne5v9JNf100nrqsoPGu'>
     <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="HomeProduct" component={HomeProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
   </StripeProvider>
  )
}

