import React from 'react'
import Store from "../../screens/search/Store"
import ProductsView from "../../screens/search/ProductsView"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Search() {
  return (
      <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Store" >
      <Stack.Screen name="Store" component={Store}  options={{ headerShown: false }}  />
      <Stack.Screen name="ProductView" component={ProductsView} options={{ headerShown: false }} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}
