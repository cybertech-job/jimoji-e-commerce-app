import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'react-native';
import { RecoilRoot, useRecoilState } from 'recoil';
import {IsUserLoggedInState} from "@/state/atoms/loginstate"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loggedIn, setLoggedIn] = useRecoilState(IsUserLoggedInState)
  const colorScheme = useColorScheme();
  // const router = useRouter();  // useRouter hook for navigation
  


  // // Load custom fonts
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //     if(loggedIn) {
  //       router.replace('/(tabs)');

  //     }else {
  //       router.replace('/screens/auth/Welcome');
        
  //     }
  //   }
  // }, [loaded, loggedIn]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <RecoilRoot>
    <ThemeProvider value={DarkTheme}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: '#0D0F18', // Global background color for all screens
          },
          headerShown: false
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>

    </RecoilRoot>
  );
}
