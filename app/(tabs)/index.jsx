import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
// import ProductDetails from "../screens/home/ProductDetails"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


export default function index() {
  const route = useRoute();
  
  

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="HomeProduct" component={HomeProduct} options={{ headerShown: false }} />
        {/* <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
// const styles = StyleSheet.create({
//   body: {
//     flexGrow: 1,
//     paddingTop: 50,
//     backgroundColor: "#0D0F18"
//   },
//   text1: {
//     color: 'white'
//   }
// });
