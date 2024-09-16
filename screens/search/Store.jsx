import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import UserAvatar from '../home/components/main/userAvatar';

export default function Store() {
  const userImage = require("../../assets/img/useravatar.png")
  const product = require("../../assets/img/Vector.png")
  const logo = require("../../assets/img/logo.png")

  const data = [
    { id: '1', title: 'IPhones' },
    { id: '2', title: 'Headphones' },
    { id: '3', title: 'Laptops' },
    { id: '4', title: 'Airpods' },
    { id: '5', title: 'IWatch' },

  ];

  const products = [
    {id: "1", title: "Iphone store"}, {id: "2", title: "Apple store"},
    {id: "3", title: "Airpod store"}, {id: "4", title: "Tablet store"},
    {id: "5", title: "IWatch store"}, {id: "6", title: "LG store"},
    {id: "7", title: "Apple Laptop store"}, {id: "8", title: "Headphone store"},
  ]

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{backgroundColor: "#40465B", width: "content", marginHorizontal: 2, 
      paddingHorizontal: 8,
      height: 20,
      display: "flex",
      justifyContent: "center",
      borderRadius: 20}}
      >
      <Text style={{color: "white", fontSize: 10, fontWeight: "semibold"}}>{item.title}</Text>
    </TouchableOpacity>
  );

  const list = ({ item }) =>{
    return(
    <View style={{display: 'flex', flexDirection: "column", marginVertical: 5 }}>
    <TouchableOpacity style={{display: 'flex', flexDirection: "row", alignItems: 'center', gap: 10}}>
    <View className="container" style={{marginTop: 8, marginHorizontal: 10, display: "flex", flexDirection: "row", gap: 15}}>
      <LinearGradient
        colors={['#0A0F77', '#40465B']}
        start={{ x: 0, y: 0 }}   // Starting point (bottom-left)
        end={{ x: 1, y: 1 }}     // Ending point (top-right)
        locations={[-0.207, 0.7968]} // End position of the gradient (bottom-right)
        style={{height: 55, width: 60, borderRadius: 20, alignItems: "center", justifyContent: "center"}}
      >
        <Image style={{color: "#40465B", fontWeight: "bold"}} source={logo}/>
      </LinearGradient>
    </View>

 <View>
 <View style={{display:'flex', flexDirection: "row", alignItems: "center"}}>
<Image source={product} />
<Text style={{color: "white", fontSize: 25, fontWeight: "bold", marginHorizontal: 8}}>{item.title}</Text>
  </View>

  <View>  
  <FlatList
  data={data} // The data array
  renderItem={renderItem} // The render method for each item
  keyExtractor={item => item.id} // Key extractor for unique keys
  style={{marginTop: 3, width: "100%", }}
  horizontal
  showsHorizontalScrollIndicator= {false}
/>
</View>
 </View>
</TouchableOpacity>
      </View>

    )
    
  }

  return (
    <View style={{padding: 10}}>
<View style={styles.body}>
<View style={{display: "flex", flex: 1, flexDirection: "column"}}>
<UserAvatar />

  <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="rgba(255, 255, 255, 0.25)" />
        <TextInput 
            placeholder="Search"
            placeholderTextColor={"rgba(255, 255, 255, 0.25)"}
            style={styles.input}
        />
  </View>
</View>
</View>

<View >


<View style={{ marginTop: 10}}> 
      <FlatList
          data={products} // The data array
          renderItem={list} // The render method for each item
          keyExtractor={item => item.id} // Key extractor for unique keys
          style={{marginTop: 2, width: "100%", }}
          horizontal={false}
          showsVerticalScrollIndicator={true}
      />
</View>

</View>

    </View>
  )
}


const styles= StyleSheet.create({
  body: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
  },
  input: {
    paddingLeft: 10,
    paddingRight: 25,
    color: "white"
    },
  searchBar: {
    width: "100%",
    height: 49,
    backgroundColor: "rgba(156, 147, 147, 0.38)",
    opacity: 33,
    borderRadius: 20,
    paddingHorizontal: 25,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 10, 
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
    marginTop: 11, 
  }
})