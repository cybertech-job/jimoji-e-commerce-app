import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Head from '@/screens/home/components/product/Head'
import Items from '@/screens/home/components/product/Items'

export default function HomeProduct({navigation}) {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.body}>
     <Head
        navigation={navigation} onSearch={(text) => setSearchText(text)}
     />
     {searchText === '' ? (
     <Items navigation={navigation} />
    ) : (
      <Text style={{ color: '#888', textAlign: 'center' }}>No Results</Text>
    )}
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