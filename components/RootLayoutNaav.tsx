import ModalHeaderText from '@/components/ModalHeaderText';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Stack from 'expo-router';

export default function RootLayoutNav() {
    const Stack = createStackNavigator();
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
  
  