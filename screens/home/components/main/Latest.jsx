import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Latest() {

    const data = [
        { id: '1', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
        { id: '2', title: 'Iphone pro max', price: '1000.00', image: require('@/assets/img/iphone.png') },
        { id: '3', title: 'Samsung S21 ultra', price: '355.00', image: require('@/assets/img/s21.png') },
        { id: '4', title: 'Samsung Z fold 5', price: '499.00', image: require('@/assets/img/fold.png') },
      ];

      const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.imgbg}>
                <Image source={item.image} />
            </View>
        
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.price}</Text>
        </View>
      );


  return (
    <View style={{paddingTop: 20,}}>
        <Text style={{color: "white",marginLeft: 18, fontSize: 16, fontWeight: "bold"}}>Latest</Text>

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
    list: {
        marginLeft: 18,
        marginTop: 20

    },
    item: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15

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
    }
})