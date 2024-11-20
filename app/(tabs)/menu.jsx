import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import User from '../screens/profile/User';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Menu() {
  
return (
<NavigationContainer independent={true} >
<Stack.Navigator initialRouteName="Store" >
<Stack.Screen name="menu" component={User}  options={{ headerShown: false }}  />
</Stack.Navigator>
</NavigationContainer>
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
  