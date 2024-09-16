import React from 'react'
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProductsView({route, navigation}) {
    const userImage = require("@/assets/img/useravatar.png")
    const ItemSeparator = () => <View style={styles.separator} />;
    const { title } = route.params

    const data = [
        { id: '1', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '2', title: 'Iphone pro max', price: '1000.00', image: require('@/assets/img/iphone.png') },
        { id: '3', title: 'Samsung S21 ultra', price: '355.00', image: require('@/assets/img/s21.png') },
        { id: '4', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '5', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '6', title: 'Iphone pro max', price: '1000.00', image: require('@/assets/img/iphone.png') },
        { id: '7', title: 'Samsung S21 ultra', price: '355.00', image: require('@/assets/img/s21.png') },
        { id: '8', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '9', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '10', title: 'Iphone pro max', price: '1000.00', image: require('@/assets/img/iphone.png') },
        { id: '11', title: 'Samsung S21 ultra', price: '355.00', image: require('@/assets/img/s21.png') },
        { id: '12', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
      ];

      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <View style={styles.imgbg}>
                <Image source={item.image} />
            </View>
        
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.price}</Text>
        </TouchableOpacity>
      );

  return (
    <View style={{ flex: 1, backgroundColor: "#0D0F18", paddingHorizontal: 8, paddingTop: 40}}>
        <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginBottom: 15}}>
        <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <Ionicons name="chevron-back" size={25} color="#6A6A6A" />
        </TouchableOpacity>
        
        <View style={{display: "flex", flexDirection: "row", paddingHorizontal: 8, justifyContent: "space-between", alignItems: "center"}}>
      <View >
        <Image source={userImage} />
      </View>
      <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color="rgba(255, 255, 255, 0.25)" />
            <TextInput 
                placeholder="Search"
                placeholderTextColor={"rgba(255, 255, 255, 0.25)"}
                style={styles.input}
            />
        </View>
      <View>
        <Ionicons name="notifications-outline" size={30} color="white" />
      </View>
    </View>
        </View>

<View style={{width: "100%", backgroundColor: "white", height: 75, borderRadius: 20, marginVertical: 5, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{textAlign: 'center', fontWeight: "bold", fontSize: 50}}>{title}</Text>
</View>
        <FlatList
        data={data} // The data array
        renderItem={renderItem} // The render method for each item
        keyExtractor={item => item.id} // Key extractor for unique keys
        style={styles.list}
        numColumns={2}
        showsVerticalScrollIndicator= {false}
        ItemSeparatorComponent={ItemSeparator} // Use ItemSeparatorComponent for gaps
      />
    </View>

  )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20

    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: Platform.OS === 'android' ? 35 : 80,
    },
    imgbg: {
        height: 135,
        width: 135,
        backgroundColor: "#40465B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 10,
    },
    separator: {
        height: 28, // Gap between items
      },
      searchBar: {
        width: "60%",
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
})