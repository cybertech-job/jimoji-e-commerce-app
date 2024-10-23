import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function AddCard() {
  return (
    <>
        <Stack.Screen options={{ headerShown: false }} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{backgroundColor:"#43425B", flex:1, paddingTop: 50, paddingHorizontal:26}}>
            <View style={{display:"flex", alignItems:"center"}}>
                    <Text style={{fontSize: 24, fontWeight:"bold", color:"white"}}>Debit or Credit card</Text>
            </View>

            <Text style={{color:"white", marginVertical:20}}>
                Card Details
            </Text>
                <View>
                <TextInput
            style={styles.input}
            placeholder="Name on card"
            placeholderTextColor="#B0B0B0"
        />
        <TextInput
            style={styles.input}
            placeholder="Card number"
            placeholderTextColor="#B0B0B0"
            keyboardType="numeric"
        />
        
            <TextInput
            style={[styles.input]}
            placeholder="MM/YY"
            placeholderTextColor="#B0B0B0"
            keyboardType="numeric"
            />
            <TextInput
            style={[styles.input]}
            placeholder="CVV"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            keyboardType="numeric"
            />
       
             </View>



            <TouchableOpacity style={{ backgroundColor:"#0A0F77", height:56, display:"flex", justifyContent:"center", alignItems:"center", borderRadius:20, marginTop: 20}}>
                <Text style={{color:"white", fontSize: 20, fontWeight:"bold"}}>
                    Done
                </Text>
            </TouchableOpacity>
            <View style={{display:"flex", flexDirection:"column", justifyContent:"center", gap:4, alignItems:"center", paddingTop: 30}}>
              <MaterialIcons name="lock" size={18} color="white" />
              <Text style={{color:"white", fontSize:12}}>Your details are saved and stored securely.</Text>
              <Text style={{color:"#0031B0", fontSize:12}}>Terms Apply</Text>
            </View>

            </View>
        </TouchableWithoutFeedback>
    
    </>
  )
}

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 34,
        color: '#ffffff',
        fontSize: 16,
        
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      inputSmall: {
        flex: 1,
        marginRight: 10,
      },
})