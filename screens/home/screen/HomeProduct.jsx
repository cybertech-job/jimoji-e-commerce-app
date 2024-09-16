import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Head from '@/screens/home/components/product/Head'
import Items from '@/screens/home/components/product/Items'

export default function HomeProduct({navigation}) {
  return (
    <View style={styles.body}>
     <Head
        navigation={navigation}
     />
     <Items/>
    </View>
  )
}
const styles = StyleSheet.create({
    body: {
      flexGrow: 1,
      paddingTop: 50,
      backgroundColor: "#0D0F18"
    },
   
  });