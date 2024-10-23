import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native'
import Logo from '../../../screens/auth/components/Logo'
import CustomInput from '../../../screens/auth/components/Input'
import Line from '../../../screens/auth/components/Line'
import LoginOptions from '../../../screens/auth/components/LoginOptions'
import { Stack, useRouter } from 'expo-router'

const Signup = ({}) => {
  const router = useRouter();  // useRouter hook for navigation




  return (
    <KeyboardAvoidingView style={styles.container}> 
    <Stack.Screen options={{ headerShown: false }} />
    <Logo />
    <Text style={styles.text}>Sign Up</Text>
    <CustomInput placeholder="Username" iconName="user-circle-o"/>
    <CustomInput placeholder="Email address" iconName="at"/>
    <CustomInput placeholder="Phone number" iconName="phone"/>
    <CustomInput placeholder="Password" iconName="key"/>
    <View style={{marginTop: 40}}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/screens/auth/Otp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    <Line />
    <LoginOptions action="Sign up" />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    paddingTop: 50, 
    backgroundColor: "#0D0F18", 
    paddingHorizontal: 20,
  },
  text:{
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#09256E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  button1: {
    display: "flex", 
    flexDirection: 'row', 
    borderRadius: 20, 
    backgroundColor: "#40465B", 
    alignSelf: "center",  
    paddingHorizontal: 65,
    paddingVertical: 5, 
    alignItems: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
});

export default Signup