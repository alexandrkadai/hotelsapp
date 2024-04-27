import { Tabs } from 'expo-router';
import React from 'react';
import Colors from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';



const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="search" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="airbnb" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="comment-alt" color={color} size={size} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-circle" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
