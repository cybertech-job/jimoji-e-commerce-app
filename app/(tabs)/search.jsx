import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style={styles.body}>
      <Text style={styles.text1}>Search Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#0D0F18"
  },
  text1: {
    color: 'white'
  }
});
