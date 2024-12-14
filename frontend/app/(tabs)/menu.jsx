import { StyleSheet } from 'react-native'
import React from 'react'
import User from '../screens/profile/User';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StripeProvider from "@stripe/stripe-react-native"
const Stack = createStackNavigator();

export default function Menu() {
  
return (
<StripeProvider publishableKey='pk_test_51QTp1tRoCINf8JKm8oBzo58aHMov2tY1rh2ZxHtDom9xTwaNakG1YSpfXLZvM1DOuwrDV0TEIewV8T9ne5v9JNf100nrqsoPGu'>
<NavigationContainer independent={true} >
<Stack.Navigator initialRouteName="Store" >
<Stack.Screen name="menu" component={User}  options={{ headerShown: false }}  />
</Stack.Navigator>
</NavigationContainer>
</StripeProvider>
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      paddingTop: 5,
      backgroundColor: "#0D0F18"
    },
    text1: {
      color: 'white'
    }
  });
  