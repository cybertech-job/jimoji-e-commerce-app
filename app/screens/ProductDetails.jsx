import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { router, Stack, useRouter } from 'expo-router'
import { Foundation, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const ProductDetails = () => {
  const [liked, setLiked] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [count, setCount] = useState(1)
  const router = useRouter()


  const [activeTab, setActiveTab] = useState('details') // For tab switching
   const fullText = `Lorem ipsum dolor sit amet consectetur. Ornare id pulvinar nunc fermentum erat. Amet ac urna lectus dui tempor adipiscing tortor sed massa. Parturient adipiscing leo platea nisl amet quis. Ut vestibulum tellus in suspendisse diam lectus congue elit blandit. lobortis. leo platea nisl amet quis. tellus in suspendisse diam lectus congue elit blandit. lobortis Lorem ipsum dolor sit amet consectetur. Ornare id pulvinar nunc fermentum erat. Amet ac urna lectus dui tempor adipiscing tortor sed massa. Parturient adipiscing leo platea nisl amet quis. Ut vestibulum tellus in suspendisse diam lectus congue elit blandit. lobortis. leo platea nisl amet quis. tellus in suspendisse diam lectus congue elit blandit. lobortis.`
  const truncatedText = `${fullText.slice(0, 450)}...`


  const quantity = [5, 10, 20, 25]

  handleDecrement = () => {
    if(count<=1){
      return null
    }
    else{
      setCount(count - 1)
    }
  }
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={34} color="#6A6A6A" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={34} color="#6A6A6A" />
            </TouchableOpacity>
          </View>

          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('@/assets/img/fold.png')} />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsHeader}>
            <View>
              <Text style={styles.productName}>Samsung Z fold 5</Text>
              <Text style={styles.productPrice}>$499.99</Text>
            </View>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Ionicons 
                name={liked ? "heart-sharp" : "heart-outline"} 
                size={34} 
                color={liked ? "#FF0000" : "#6A6A6A"} 
              />
            </TouchableOpacity>
          </View>

          {/* Tab navigation */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'details' && styles.activeTabButton]}
              onPress={() => setActiveTab('details')}
            >
              <Text style={[styles.tabText, activeTab === 'details' && styles.activeTabText]}>Description</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'reviews' && styles.activeTabButton]}
              onPress={() => setActiveTab('reviews')}
            >
              <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>Reviews</Text>
            </TouchableOpacity>
          </View>

          {/* Tab content */}
          {activeTab === 'details' ? (
          <View >
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: 140, overflow: "scroll"}}>
                <Text style={{color: "white", fontSize: 12}}>
                    {showMore ? fullText : truncatedText}
                </Text>
            
                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                  <Text style={{color: "#0031B0", fontSize: 12}}>
                    {showMore ? 'Read less' : 'Read more'}
                  </Text>
                </TouchableOpacity>            
            </ScrollView>
          </View>
          ) : (
            <View style={styles.tabContent}>
              <Text style={styles.tabContentText}>User reviews will appear here.</Text>
            </View>
          )}
        <View style={{paddingTop: 20}}>
          <Text style={{color: "white", fontSize: 10}}>
            Custom quantities 
          </Text>

          <View style={{display:"flex", flexDirection:"row", gap: 30, marginTop: 15}}>
            {
              quantity.map(item => (
                <TouchableOpacity key={item} onPress={() => setCount(item)} style={{backgroundColor:"#070644", paddingVertical:4, paddingHorizontal: 15, borderRadius: 5}}>
                    <Text style={{color: "white", fontSize: 11, fontWeight: "semibold"}}>{item}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>

            <View style={{ paddingTop: 50, display: "flex",flexDirection:"row", justifyContent: "space-between", alignItems: "center"}}>
              <View style={{display:"flex", flexDirection:"row", gap: 15, alignItems:"center"}}>
                  <TouchableOpacity onPress={handleDecrement} style={{height: 30, width:30, borderRadius:50, backgroundColor:`${count <= 1 ?"#40465B": "#0031B0"}`, display:"flex", alignItems:"center", justifyContent:"center"}}>
                   <Foundation name="minus" size={20} color="white" />
                  </TouchableOpacity>

                  <Text style={{color: "white", fontSize: 25}}>{count}</Text>

                  <TouchableOpacity onPress={() => setCount(count + 1)} style={{height: 30, width:30, borderRadius:50, backgroundColor:"#0031B0", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Foundation name="plus" size={20} color="white" />
                  </TouchableOpacity>

              </View>

              <TouchableOpacity onPress={() => router.push('/screens/payments/PaymentMethod')} style={{backgroundColor: "#0A0F77", width: 159, display: "flex", alignItems: "center", justifyContent: "center", paddingVertical: 10, borderRadius: 10}}>
                <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>Buy</Text>
              </TouchableOpacity>
            </View>
        </View>

      </View>
    </>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#070644",
    flex: 1,
    flexDirection: "column"
  },
  imageContainer: {
    height: "40%",
    paddingHorizontal: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 290,
    width: 209
  },
  detailsContainer: {
    height: "60%",
    backgroundColor: "#0D0F18",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  productPrice: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  tabButton: {
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderRadius:10
  },
  tabText: {
    color: 'white',
    fontSize: 16
  },
  
 
  tabContentText: {
    color: '#FFF',
    fontSize: 16,
  }
})
