import {View, Text, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView} from 'react-native'
import Logo from '../../../screens/auth/components/Logo'
import { Stack, useRouter } from 'expo-router'
import { useRecoilState } from 'recoil'
import { IsProfileScreen } from '../../../state/atoms/profilestate'


const User = ({navigation}) => {
  const [profile, setProfile] = useRecoilState(IsProfileScreen)


  const router = useRouter();  // useRouter hook for navigation

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

export default User