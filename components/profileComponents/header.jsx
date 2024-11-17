import {View, TouchableOpacity, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {

  return (
      <View style={styles.header}>
        <TouchableOpacity>
            <Ionicons name="chevron-back" size={34} color="#6A6A6A" />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  header:{
    display: "flex", 
    flexDirection: "row", 
    justifyContent:  "space-between"
}
});

export default Header