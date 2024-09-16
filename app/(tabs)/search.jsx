import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Store from "../../screens/search/Store"

export default function Search() {
  return (
    <View style={styles.body}>
      <Store />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "#0D0F18"
  },
});