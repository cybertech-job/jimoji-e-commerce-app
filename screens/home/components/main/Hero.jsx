import { View, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Hero({navigation}) {
    const image = require("@/assets/img/laptop.png")
    const data = [
        { id: '1', title: 'IPhone' },
        { id: '2', title: 'MacBooks' },
        { id: '3', title: 'Ipad' },
        { id: '4', title: 'Airpod' },
        { id: '5', title: 'IWatch' },

      ];

      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('HomeProdct')}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      );


  return (
    <View style={styles.main}>
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

        <View style={styles.herobg}>
            <View style={styles.textbutton}>
                <Text style={styles.herotext}>
                    All Apple Gadgets at your feet
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>
                        Shop Now
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Image source={image} />
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        marginHorizontal: 18,
        marginTop: 15
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
    list: {
        marginTop: 10,
        width: "100%"
    },
    title: {
        color: "white",
        fontSize: 10,
        fontWeight: "semibold"
    },
    herotext: {
        color: "white",
        fontSize: 16, 
        fontWeight: "semibold",
        width: 133,
        textAlign: "center",
        lineHeight: 25,
        marginBottom: 10
    },
    herobg: {
        height: 157,
        width: "100%",
        backgroundColor: "#070644",
        marginTop: 20,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 26,
    },
    button: {
        backgroundColor: "#0031B0",
        height: 30,
        width: 61,
        borderRadius: 7,
        display: "flex",
        alignItems:"center",
        justifyContent: "center"
    },
    buttontext: {
        fontSize: 8,
        color: "white",
        fontWeight: "bold"
    },
    textbutton:{
        display: "flex",
        alignItems: "center"
    }

})