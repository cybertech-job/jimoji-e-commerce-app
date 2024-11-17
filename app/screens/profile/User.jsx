import {View, Text, Switch, Image, StyleSheet} from 'react-native'
import { Stack, useRouter } from 'expo-router'
import Header from '../../../components/profileComponents/header';
import Input from '../../../components/profileComponents/inputfield';
import React, {useState} from 'react'

const Setting = ({title, value, type, onPress, }) =>{
      return(
           <View style={{display: "flex", flexDirection: "row", height: 50, alignItems: "center"}} onPress={onPress}>
          <Text style={{color: "white", flex: 1, fontSize: 20, fontWeight: "bold"}}>Notifications</Text>
          
          <Switch value={value}
          onValueChange={(value) => onPress(value)}
          trackColor={{ false: 'rgba(64, 70, 91, 1)', true: 'rgba(64, 70, 91, 1)' }} // Dark gray color when off
          thumbColor={value ? 'rgba(0, 49, 176, 1)' : '#6A6A6A'} // Blue when on, dark gray when off
        //   ios_backgroundColor="#3A3A3A"
          style={styles.switch} />
        </View>
      )
  }
const User = () => {
  const userImage = require("@/assets/img/maxlarge.png")
  const router = useRouter();  // useRouter hook for navigation
  const [faceid, setFaceid] = useState()

  return (
  <View style={styles.container}> 
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

    <View style={{ marginVertical: 10, justifyContent: "center",}}>
        <Image source={userImage} style={{ width: 90, height: 90,  marginHorizontal: "auto"}}  resizeMode='contain'/>
        <Text style={styles.text}>Maxwell Bruxelles</Text>
    </View>
    <View>
        <Text style={{color:"#6A6A6A", textDecorationLine: "underline"}}>Basic Settings</Text>
    </View>
    
    <Input label="Username" placeholder="MaxwellBruxelles" />
    <Input label="Email" placeholder="maximbrux2023@example.com" />
    <Input label="Phone number" placeholder="+43 432534345" />
    <Input label="Password" placeholder="Password" />
    <Input label="Language" placeholder="English" />

    <View>
        <Text style={{color:"#6A6A6A", textDecorationLine: "underline"}}>Basic Settings</Text>
    </View>

    <Setting 
        title="FaceID"
        value={faceid}
        type="switch"
        onPress={(faceid) =>setFaceid(faceid)
        }
        />
        <Setting 
        title="FaceID"
        value={faceid}
        type="switch"
        onPress={(faceid) =>setFaceid(faceid)
        }
        />
          

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
  text:{
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Resize the switch to make it larger
  },
});

export default User