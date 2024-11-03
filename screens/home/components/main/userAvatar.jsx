import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function UserAvatar({navigation}) {
    const userImage = require("@/assets/img/useravatar.png")
    const router = useRouter();

  return (
    <View style={styles.body}>
      <View style={styles.firstCont}>
        <TouchableOpacity onPress={() => router.push('/screens/profile/User')}>
        <Image source={userImage} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>Hi, Maxwell...</Text>
      </View>

      <View>
        <Ionicons name="notifications-outline" size={30} color="white" />
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
      height: 30,
      width: 30
    }
})