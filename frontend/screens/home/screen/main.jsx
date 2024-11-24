import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import UserAvatar from "../components/main/userAvatar"
import Hero from "../components/main/Hero"
import Latest from "../components/main/Latest"
import Trending from "../components/main/Trending"




export default function Main({navigation}) {
  return (
    <ScrollView style={styles.body}>
      <UserAvatar/>
      <Hero
      navigation={navigation}
      />
      <Latest />
      <Trending />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#0D0F18"
  },
  text1: {
    color: 'white'
  }
});