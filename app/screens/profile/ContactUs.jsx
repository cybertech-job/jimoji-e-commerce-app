import { ScrollView, View, Text, Switch, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import headset from "../../../assets/img/headset.png"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const ContactUs = () => {
  return (
    <View style={styles.container}>
      <View style={{ display:"flex", width:"70%", justifyContent: "space-between", flexDirection: "row"}}>
        <TouchableOpacity>
            <Ionicons name="chevron-back" size={34} color="#6A6A6A" />
        </TouchableOpacity>
        <Text style={{color:"white", fontSize:30, fontWeight: "bold" }}>Customer care</Text>
      </View>

      <Image source={headset} style={{marginHorizontal: "auto", marginTop: 10, height: 140, width:140}} />

      <TextInput
        placeholder="Type complain/ message here"
        placeholderTextColor="#CCCCCC"
        style={{
          backgroundColor: '#6A6A6A',
          height: 310,
          width: 310,
          borderRadius: 20,
          padding: 16,
          color: '#FFFFFF',
          marginHorizontal: "auto",
          marginTop:30,
          textAlign:'center',
          textAlignVertical: 'top', // Ensures the text starts at the top
        }}
      />

      <View style={{ display:"flex", justifyContent: "space-between", flexDirection: "row", marginHorizontal: "auto", width: "90%"}}>
      <View style={{backgroundColor: '#40465B', marginTop: 10, height: 50, width:50, borderRadius: 100, justifyContent: "center", alignItems:"center",  }}>
      <FontAwesome6 name="microphone" size={24} color="black" />
      </View>
      
      <View style={{ display:"flex", flexDirection: "row", gap: 5}}>
          <View style={{backgroundColor: '#40465B', marginTop: 10, height: 50, width:50, borderRadius: 100, justifyContent: "center", alignItems:"center",}}>
          <FontAwesome6 name="plus" size={24} color="black" />
          </View>
          <View style={{backgroundColor: '#40465B', marginTop: 10, height: 50, width:50, borderRadius: 100, justifyContent: "center", alignItems:"center",}}>
          <FontAwesome6 name="phone" size={24} color="black" />
          </View>
      </View>

      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 for the main container to occupy the entire screen height
    backgroundColor: '#0D0F18',
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 20, // Add padding at the bottom to ensure content isn't cut off
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Resize the switch to make it larger
  },
});

export default ContactUs;
