import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Head({navigation}) {
    const data = [
        { id: '1', title: 'X Series' },
        { id: '2', title: '11 Series' },
        { id: '3', title: '12 Series' },
        { id: '4', title: '13 Series' },
        { id: '5', title: '14 Series' },
        { id: '6', title: '15 Series' },
        { id: '7', title: '16 Series' },


      ];

      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      );



  return (
    <View style={styles.body}>
        <View style={styles.container1}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="chevron-back" size={34} color="#6A6A6A" />
            </TouchableOpacity>
            <Text style={{color: "white", fontSize: 24, fontWeight: "bold", textAlign:"center", width: "80%"}}>
                IPhone
            </Text>
        </View>
        <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color="rgba(255, 255, 255, 0.25)" />
            <TextInput 
                placeholder="Search"
                placeholderTextColor={"rgba(255, 255, 255, 0.25)"}
                style={styles.input}
            />
        </View>

        <FlatList
            data={data} // The data array
            renderItem={renderItem} // The render method for each item
            keyExtractor={item => item.id} // Key extractor for unique keys
            style={styles.list}
            horizontal
            showsHorizontalScrollIndicator= {false}
        />


    </View>
  )
}
const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 18,
    },

    container1:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    searchBar: {
        width: "100%",
        height: 49,
        backgroundColor: "rgba(156, 147, 147, 0.38)",
        opacity: 33,
        borderRadius: 20,
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
        

    },
    input: {
    paddingLeft: 10,
    paddingRight: 25,
    color: "white"
    },
    list:{
        marginTop:10,
    },
    item: {
        backgroundColor: "rgba(156, 147, 147, 0.38)",
        width: "content",
        marginHorizontal: 10,
        paddingHorizontal: 15,
        height: 24,
        display: "flex",
        justifyContent: "center",
        borderRadius: 7
    },
    title: {
        color: "white",
        fontSize: 10,
        fontWeight: "semibold"
    },
})