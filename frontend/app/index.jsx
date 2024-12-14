import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'react-native';
import {useRecoilState } from 'recoil';
import {IsUserLoggedInState} from "@/state/atoms/loginstate"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loggedIn, setLoggedIn] = useRecoilState(IsUserLoggedInState)
  const colorScheme = useColorScheme();
  const router = useRouter();  // useRouter hook for navigation
  


  // Load custom fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
  
    if (loaded) {
      SplashScreen.hideAsync();
      if(loggedIn) {
        router.replace('/(tabs)');

      }else {
        if(loaded){   
          router.replace('/screens/auth/Welcome');
        }
      }
    }
  }, [loaded, IsUserLoggedInState]);

  if (!loaded) {
    return null;
  }

  return (
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
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
