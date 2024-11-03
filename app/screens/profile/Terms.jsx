import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Logo from '../../../screens/auth/components/Logo'
import { Stack, useRouter } from 'expo-router'

const Terms = ({}) => {
  const router = useRouter();  // useRouter hook for navigation

  return (
    <View style={styles.container}> 
    <Stack.Screen options={{ headerShown: false }} />
    <Logo />
    <Text style={styles.text}>Terms $ Conditions</Text>
    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>

    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>

    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>

    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>
    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>

    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>
    <Text style={{color: "white"}}>
        1. Lorem ipsum dolor sit amet consectetur. 
Vitaenulla volutpat aliquet tempus. Sed con
sequatvel dignissim integer congue suspen
disse fames. Sagittis interdum ut mattis eros.
Amet sagittismaecenas tortor lacus duis pro
in nec in leo. Convallis nunc eu lacus quisque
eu dictumst dis torto

    </Text>
 
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

export default Terms