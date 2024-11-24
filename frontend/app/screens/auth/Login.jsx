import React, { useState } from 'react';
import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView} from 'react-native'
import Logo from '../../../screens/auth/components/Logo'
import CustomInput from '../../../screens/auth/components/Input'
import Line from '../../../screens/auth/components/Line'
import LoginOptions from '../../../screens/auth/components/LoginOptions'
import { Stack, useRouter } from 'expo-router'
import { useRecoilState } from 'recoil'
import { IsUserLoggedInState } from '@/state/atoms/loginstate'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import axios from "axios"

const Login = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useRecoilState(IsUserLoggedInState)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const router = useRouter();  // useRouter hook for navigation

  const handlesubmit = async () => {
    if (email && password) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const idToken = await userCredential.user.getIdToken();

        if(userCredential){
          setLoggedIn(true)
          router.replace('/(tabs)')
        }
      } catch (error) {
        console.error(error.response?.data?.error || error.message);
      }
    }
  };

  return (
  <KeyboardAvoidingView style={styles.container}> 
      <Stack.Screen options={{ headerShown: false }} />
  <Logo />
  <View style={{ marginVertical: 10 }}>
    <Text style={styles.text}>Sign in</Text>
    <Text style={{ color: "white", textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
      Welcome back
    </Text>
  </View>

  <View>

    <CustomInput 
    placeholder="Email address" 
    iconName="at" value={email} 
    onChange={email => setEmail(email)}
    />

    <CustomInput 
    placeholder="Password" 
    iconName="key" value={password} 
    onChange={password => setPassword(password)}
    secureTextEntry 
    />

    <Text style={{ color: "#8C8C8C", textAlign: "right", fontSize: 12, fontWeight: "bold" }}>
      Forgot Password?
    </Text>
  </View>

  <View style={{ marginTop: 40 }}>
    <TouchableOpacity style={styles.button} 
    onPress={() => 
      {
        handlesubmit()
      }
    }
    
    >
      <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
  </View>

  <Line />

  <LoginOptions action="Sign in"/>

  <Text style={{ color: "white", textAlign: "center", marginTop: 75 }}>
    By using our services, you agree to our
  </Text>
  <TouchableOpacity onPress={() => router.push('/screens/profile/Terms')}>
  <Text style={{ color: "blue", textAlign: "center", textDecorationLine: "underline" }}>
    Terms & conditions
  </Text>
  </TouchableOpacity>
</KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: "#0D0F18", 
    paddingHorizontal: 20,
  },
  text:{
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
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

export default Login