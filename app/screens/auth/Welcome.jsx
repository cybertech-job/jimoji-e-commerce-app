import React from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native'
import user from '../../../assets/img/image.png'
import Logo from '../../../screens/auth/components/Logo' 
import Line from '../../../screens/auth/components/Line'
import { useRouter } from 'expo-router'
const Welcome = ({navigation}) => {

  const router = useRouter();  // useRouter hook for navigation



  return (
    
    <View style={styles.container}>
      <Logo />

      <View style={{marginHorizontal: "auto", padding:6, paddingTop: 1, marginBottom: 40,}}>
      <Image source={user} style={{height: 320, width:180}} alt='logo' />
      </View>

      <View>
      <TouchableOpacity style={styles.button} onPress={() => router.replace('/screens/auth/Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      
      <Line />

      <View style={{}}>
      <TouchableOpacity style={styles.button1} onPress={() => router.replace('/screens/auth/Login')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: "#0D0F18", 
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#09256E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,

  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#9C9393',
    width: 10
  },
  button1: {
    backgroundColor: '#0031B0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,

  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
});
export default Welcome