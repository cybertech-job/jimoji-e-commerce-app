import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';

const Input = ({ label, placeholder }) => {
  const [isReadOnly, setIsReadOnly] = useState(true); // Manages the readonly state
  const [inputValue, setInputValue] = useState(placeholder); // Holds the input value

  const handleIconPress = () => {
    if (!isReadOnly) {
      // Save the changes
      console.log("Updated Value:", inputValue);
    }
    setIsReadOnly(!isReadOnly); // Toggle between edit and save modes
  };

  return (
    <View style={{ marginVertical: 8 }}>
      <Text style={{ color: "#6A6A6A", fontSize: 15, marginBottom: 2 }}>{label}</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"rgba(255, 255, 255, 0.25)"}
          style={styles.input}
          editable={!isReadOnly} // Toggles the editability of the input
          value={inputValue}
          onChangeText={setInputValue} // Updates inputValue when editing
        />
        <TouchableOpacity onPress={handleIconPress}>
          <FontAwesome5
            name={isReadOnly ? "edit" : "save"} // Dynamically switches between edit and save icons
            size={18}
            color={isReadOnly ? "rgba(255, 255, 255, 0.25)" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 25,
    color: "white",
  },
});

export default Input;
