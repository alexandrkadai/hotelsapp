import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { defaultStyles } from '@/constants/Styles';
const Page = () => {
  useWarmUpBrowser();
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={'red'}
        placeholder="Plese Enter Email"
        style={[defaultStyles.inputField, { marginBottom: 30 }]}
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text  style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 26,
  },
});
export default Page;
