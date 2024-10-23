import { Tabs } from 'expo-router';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import AntDesign from '@expo/vector-icons/AntDesign';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { useNavigationState, useRoute } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const currentRoute = useRoute()
  // const tabBarStyle = currentRoute === 'ProductDetails' ? { display: 'none' } : { backgroundColor: "#0D0F18" };
console.log(currentRoute)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["dark"].tint,
        headerShown: false,
        tabBarStyle: {
          display: "flex"
        }
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign 
            name="home" 
            size={20} 
            color={color} 
            style={{ marginBottom: -20 }}
            />

          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Store Search',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
            name="store-search-outline" 
            size={20} 
            color={color} 
            style={{ marginBottom: -20 }}
            />

            // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
          <AntDesign 
          name="menu-fold" 
          size={20} 
          color={color}
          style={{ marginBottom: -20 }}
          />
          
            
          ),
        }}
      />
    </Tabs>
  );
}
