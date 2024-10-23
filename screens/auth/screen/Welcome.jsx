import React from 'react'
import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native'
import user from '../../../assets/img/image.png'
import Logo from '../components/Logo' 
import Line from '../components/Line'
const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />

      <View style={{marginHorizontal: "auto", padding:6, paddingTop: 1, marginBottom: 40,}}>
      <Image source={user} style={{height: 320, width:180}} alt='logo' />
      </View>

      <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      
      <Line />

      <View style={{}}>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    paddingTop: 50, 
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