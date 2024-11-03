import {View, Text, TextInput, StyleSheet} from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
const Input = ({label, onclick, placeholder, }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (

  <View style={{marginVertical: 8}}>
  <Text style={{color:"#6A6A6A", fontSize: 15, marginBottom: 2}}>{label}</Text>
  <View style={styles.searchBar}>
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor={"rgba(255, 255, 255, 0.25)"}
                style={styles.input}
                secureTextEntry={placeholder === "Password" ? true : false}
                readOnly
            />
            <FontAwesome5 name="edit" size={18} color="rgba(255, 255, 255, 0.25)"  />
        </View>
  </View>

  )
}

const styles = StyleSheet.create({
    searchBar: {
        width: "100%",
        height: 49,
        backgroundColor: "rgba(156, 147, 147, 0.38)",
        opacity: 33,
        borderRadius: 10,
        paddingHorizontal: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        justifyContent: "space-between"

    },
    input: {
        paddingLeft: 10,
        paddingRight: 25,
        color: "white"
        },
});

export default Input