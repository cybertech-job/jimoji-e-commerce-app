import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Main from "../.././screens/home/sreen/main"

export default function index() {
  return (
    <ScrollView vertical={true} style={styles.body}>
      <Main/>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    paddingTop: 50,
    backgroundColor: "#0D0F18"
  },
  text1: {
    color: 'white'
  }
});
