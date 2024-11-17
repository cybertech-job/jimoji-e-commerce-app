import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import google from '../../../assets/img/google.png'
import apple from '../../../assets/img/apple.png'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";

const LoginOptions = ({action}) => {

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      // Sign in with a popup
      const result = await signInWithPopup(auth, provider);

      // This gives you a Google Access Token, which you can use to access Google APIs
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info
      const user = result.user;

      console.log("User Info:", user);

      // Navigate to the homepage or dashboard
      router.push("/screens/auth/Otp"); // Replace with your desired route
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
    }
  }

  return (
    <View style={{ display: "flex", flexDirection: 'column', gap: 30 }}>
    <TouchableOpacity style={styles.button1} onPress={handleGoogleSignIn}>
      <Image source={google} style={{ height: 20, width: 15, marginRight: 10 }} />
      <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
        {action} with Google
      </Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button1}>
      <Image source={apple} style={{ height: 20, width: 15, marginRight: 10 }} />
      <Text style={{ color: "white", fontSize: 20, textAlign: 'center' }}>
        {action} with Apple
      </Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
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
  });
export default LoginOptions