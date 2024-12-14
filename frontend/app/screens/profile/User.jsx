import { ScrollView, View, Text, Switch, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import Header from '../../../components/profileComponents/header';
import Input from '../../../components/profileComponents/inputfield';
import React, { useState } from 'react';

const Setting = ({ title, value, type, onPress }) => {
  if(type === "switch"){
    return (
        <View style={{ display: 'flex', flexDirection: 'row', height: 40, alignItems: 'center' }} onPress={onPress}>
        <Text style={{ color: 'white', flex: 1, fontSize: 20, }}>{title}</Text>
        <Switch
          value={value}
          onValueChange={(value) => onPress(value)}
          trackColor={{ false: 'rgba(64, 70, 91, 1)', true: 'rgba(64, 70, 91, 1)' }}
          thumbColor={value ? 'rgba(0, 49, 176, 1)' : '#6A6A6A'}
          style={styles.switch}
        />
      </View>
    );
  }
  else{
    return(
    <TouchableOpacity onPress={onPress}>
      <View style={{ display: 'flex', flexDirection: 'row', height: 40, alignItems: 'center' }} onPress={onPress}>
        <Text style={{ color: 'white', flex: 1, fontSize: 20, }}>{title}</Text>
      </View>
    </TouchableOpacity>
    )
  }
  
};

const User = () => {
  const userImage = require('@/assets/img/maxlarge.png');
  const router = useRouter(); // useRouter hook for navigation
  const [faceid, setFaceid] = useState(false);
  const [useNotification, setUseNotification] = useState(false);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{ marginVertical: 10, justifyContent: 'center' }}>
          <Image source={userImage} style={{ width: 90, height: 90, marginHorizontal: 'auto' }} resizeMode="contain" />
          <Text style={styles.text}>Maxwell Bruxelles</Text>
        </View>
        <View>
          <Text style={{ color: '#6A6A6A', textDecorationLine: 'underline' }}>Basic Settings</Text>
        </View>

        <Input label="Username" placeholder="MaxwellBruxelles" />
        <Input label="Email" placeholder="maximbrux2023@example.com" />
        <Input label="Phone number" placeholder="+43 432534345" />
        <Input label="Password" placeholder="Password" />
        <Input label="Language" placeholder="English" />

        <View>
          <Text style={{ color: '#6A6A6A', textDecorationLine: 'underline' }}>Advanced Settings</Text>
        </View>

        <Setting title="Notification" value={faceid} type="switch" onPress={(value) => setFaceid(value)} />
        <Setting title="History" value={useNotification} type="switch" onPress={(value) => setUseNotification(value)} />
        <Setting title="Verification Status" value={faceid} type="button" onPress={() => router.push("/screens/profile/VerificationStatus")}/>
        <Setting title="Wishist" value={faceid} type="button" />
        <Setting title="Favorites" value={faceid} type="button" onPress={(value) => setFaceid(value)} />
        <Setting title="Contact us" type="button" onPress={() => router.push("/screens/profile/ContactUs")} />
        <Setting title="Terms and conditions" type="button" onPress={() => router.push("/screens/profile/Terms")} />
        <Setting title="Logout" value={faceid} type="button" onPress={(value) => setFaceid(value)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex: 1 for the main container to occupy the entire screen height
    backgroundColor: '#0D0F18',
    paddingHorizontal: 20,
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

export default User;
