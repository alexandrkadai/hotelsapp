import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Button, TouchableOpacity } from 'react-native';
import { Stack, useNavigation, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ModalHeaderText from '@/components/ModalHeaderText';
import Colors from '@/constants/Colors';

// import { useColorScheme } from '@/components/useColorScheme';
const CLERK_PUBL_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const token_cash = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },

  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView  style={{ flex: 1 }}> 
    <ClerkProvider publishableKey={CLERK_PUBL_KEY!} tokenCache={token_cash}>
      <RootLayoutNav />
    </ClerkProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const router = useRouter();

  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('./(modals)/login');
    }
  }, [isLoaded]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          title: 'Log In or Sign Up',
          headerTitleStyle: {
            fontFamily: 'mon-sb',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="listing/[id]"
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerTransparent: true,
          headerTitle: () => <ModalHeaderText />,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderColor: Colors.grey,
                borderRadius: 20,
                borderWidth: 1,
              }}
              onPress={() => router.back()}>
              <Ionicons name="close-outline" size={28} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
