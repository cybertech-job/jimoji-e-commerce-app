import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function PaymentMethod() {
    const router = useRouter()
    const methods = [
        {
            id: 1,
            icon: "credit-card-chip",
            title: "Pay with card",
            detail: "Pay with Debit card or Credit card"
        },
        {
            id: 2,
            icon: "bank",
            title: "Bank Transfer",
            detail: "Pay with Bank Transfer"
        },
        {
            id: 3,
            icon: "cash-multiple",
            title: "Cash Delivery",
            detail: "Pay cash on delivery"
        },
        {
            id: 4,
            icon: "cloud-check",
            title: "Saved Accounts",
            detail: "Choose from saved Accounts"
        }
    ]



  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={{backgroundColor:"#43425B", flex:1, paddingTop: 50, }}>
            <View style={{display:"flex", alignItems:"center"}}>
                <Text style={{fontSize: 24, fontWeight:"bold", color:"white"}}>Payment method</Text>
            </View>

            <View style={{display: "flex", flexDirection: "column", gap: 25, alignItems: "center", marginTop: 30}}>
                {
                    methods.map((item) => (
                        <TouchableOpacity onPress={() => router.push("/screens/payments/card/AddCard")} key={item.id} style={{display:"flex", flexDirection:"row", alignItems: "center", gap:20, height: 91, width: "80%", backgroundColor:"#25244F", borderRadius: 20, paddingLeft: 30}}>
                            <View>
                                <MaterialCommunityIcons name={item.icon} size={34} color="white" />
                            </View>
                            <View>
                                <Text style={{fontSize:16, fontWeight:"semibold", color:"white"}}>
                                    {item.title}
                                </Text>
                                <Text style={{fontSize:10, fontWeight:"normal", color:"white", paddingTop: 4}}>
                                    {item.detail}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:4, alignItems:"center", paddingTop: 30}}>
              <MaterialIcons name="lock" size={18} color="white" />
              <Text style={{color:"white", fontSize:12}}>Your details are saved and stored securely.</Text>
              <Text style={{color:"#0031B0", fontSize:12}}>Terms Apply</Text>
            </View>

        </View>
    
    </>
  )
}

const styles = StyleSheet.create({})