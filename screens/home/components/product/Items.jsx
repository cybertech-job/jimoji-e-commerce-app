import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

export default function Items() {
    const ItemSeparator = () => <View style={styles.separator} />;


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
    <FlatList
        data={data} // The data array
        renderItem={renderItem} // The render method for each item
        keyExtractor={item => item.id} // Key extractor for unique keys
        style={styles.list}
        numColumns={2}
        ItemSeparatorComponent={ItemSeparator} // Use ItemSeparatorComponent for gaps
      />
  )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        marginHorizontal: 28,
        marginTop: 20

    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: Platform.OS === 'android' ? 22 : 80,

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
})