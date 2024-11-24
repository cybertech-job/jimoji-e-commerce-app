import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import Logo from '../../../screens/auth/components/Logo';
import CustomInput from '../../../screens/auth/components/Input';
import Line from '../../../screens/auth/components/Line';
import LoginOptions from '../../../screens/auth/components/LoginOptions';
import { Stack, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import axios from "axios"

const Signup = () => {
  const router = useRouter();  // useRouter hook for navigation
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = async () => {
    if (email && password && username && phone) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const idToken = await userCredential.user.getIdToken();
        const userDetails = {
          email, 
          password, 
          name: username,
          phone
        }

        await axios.post('http://192.168.145.75:5000/api/v1/auth/register', userDetails, // Request body
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${idToken}`, // Bearer token
            },
          }
        );

        if(userCredential){
          router.push('/screens/auth/Otp');
        }
      } catch (error) {
        console.error(error.response?.data?.error || error.message);
      }
    }
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Logo />
        <Text style={styles.text}>Sign Up</Text>
        <CustomInput
          placeholder="Username"
          iconName="user-circle-o"
          value={username}
          onChange={username => setUsername(username)}
        />
        <CustomInput
          placeholder="Email address"
          iconName="at"
          value={email}
          onChange={email => setEmail(email)}
        />
        <CustomInput
          placeholder="Phone number"
          iconName="phone"
          value={phone}
          onChange={phone => setPhone(phone)}
        />
        <CustomInput
          placeholder="Password"
          iconName="key"
          value={password}
          onChange={password => setPassword(password)}
          secureTextEntry
        />
        <View style={{ marginTop: 40 }}>
          <TouchableOpacity style={styles.button} onPress={handlesubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Line />
        <LoginOptions action="Sign up" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0F18",
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#09256E',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Signup;
