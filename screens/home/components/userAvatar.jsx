import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function UserAvatar() {
    const userImage = require("../../../assets/img/useravatar.png")


  return (
    <View style={styles.body}>
      <View style={styles.firstCont}>
        <Image source={userImage} style={styles.image}/>
        <Text style={styles.text}>Hi, Maxwell...</Text>
      </View>

      <View>
        <Ionicons name="notifications-outline" size={46} color="white" />
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    firstCont: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 21
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    image: {

    }
})