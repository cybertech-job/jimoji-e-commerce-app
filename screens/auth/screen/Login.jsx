import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView} from 'react-native'
import Logo from '../components/Logo'
import CustomInput from '../components/Input'
import Line from '../components/Line'
import google from '../../../assets/img/google.png'
import apple from '../../../assets/img/apple.png'
const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}> 
    <Logo />
   <View style={{marginVertical: 10}}>
   <Text style={styles.text}>Sign in</Text>
   <Text style={{color: "white", textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Welcome back</Text>
   </View>

    <View>
    <CustomInput placeholder="Email address" iconName="at"/>
    <CustomInput placeholder="Password" iconName="key"/>
    <Text style={{color: "#8C8C8C", textAlign: "right", fontSize: 12, fontWeight: "bold"}}>Forgot Password ?</Text>
    </View>

    <View style={{marginTop: 40}}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      </View>

      <Line />

      <View style={{display: "flex", flexDirection: 'column', gap: 30}}>
      <TouchableOpacity style={styles.button1}>
        <Image source={google} style={{height: 20, width: 15, marginRight: 10}} />
        <Text style={{color: "white", fontSize: 20, textAlign: 'center'}}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}>
        <Image source={apple} style={{height: 20, width: 15, marginRight: 10}} />
        <Text style={{color: "white", fontSize: 20, textAlign: 'center'}}>Sign up with Google</Text>
      </TouchableOpacity>
      </View>
      <Text style={{color: "white", textAlign: "center", marginTop: 75}}>By using our services, you agree to our</Text>
      <Text style={{color: "blue", textAlign: "center", textDecorationLine: "underline"}}>Terms & conditions</Text>
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
    textAlign: "center",
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