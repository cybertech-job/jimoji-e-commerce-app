import React from 'react'
import Store from "../../screens/search/Store"
import ProductsView from "../../screens/search/ProductsView"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createStackNavigator();

export default function Search() {

  return (
    <StripeProvider publishableKey='pk_test_51QTp1tRoCINf8JKm8oBzo58aHMov2tY1rh2ZxHtDom9xTwaNakG1YSpfXLZvM1DOuwrDV0TEIewV8T9ne5v9JNf100nrqsoPGu'>
      <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Store" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Store" component={Store}  options={{ headerShown: false }}  />
      <Stack.Screen name="ProductView" component={ProductsView} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  )
}

