import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { defaultStyles } from '@/constants/Styles';
import { useRouter } from 'expo-router';
const Page = () => {
  const router = useRouter();
  const onClearAll = () => {
    
  };

  return (
    <BlurView intensity={70} tint="light" style={styles.container}>
      <Text>Booking</Text>
      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
        <View style={styles.containerFooter}>
          <TouchableOpacity onPress={onClearAll}>
            <Text style={styles.footerText}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClearAll}></TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontFamily: 'mon-sb',
    textDecorationLine: 'underline',
  },
});
