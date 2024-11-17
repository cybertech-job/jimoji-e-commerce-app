import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'
import React, {useState, useEffect} from 'react'
import Main from "../../screens/home/screen/main"
import HomeProduct from "../../screens/home/screen/HomeProduct"
import Welcome from "../screens/auth/Welcome"
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {auth} from "../../firebase"
const Stack = createStackNavigator();


export default function () {
  const route = useRoute();
  const [user, setUser] = useState(null);

  // Check authentication state on app load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);
  

  return (
    
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}  />
        <Stack.Screen name="HomeProduct" component={HomeProduct} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

