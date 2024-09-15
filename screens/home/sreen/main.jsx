import { View, Text } from 'react-native'
import React from 'react'
import UserAvatar from "../components/userAvatar"
import Hero from "../components/Hero"
import Latest from "../components/Latest"
import Trending from "../components/Trending"




export default function Main() {
  return (
    <View>
      <UserAvatar/>
      <Hero/>
      <Latest />
      <Trending />
    </View>
  )
}