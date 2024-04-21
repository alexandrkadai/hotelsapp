import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from 'expo-router';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      // header: () => (),
      headerBackground: () => <View style={{ flex: 1, backgroundColor: '#fff' }}></View>,
      headerRight: () => <View style={{}}></View>,
      headerLeft: () => (
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} style={styles.IconStyle} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <Text style={styles.textMessage}>No new Messages</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textMessage: {
    fontSize: 25,
    fontFamily: 'mon',
    justifyContent:'center',
    textAlign: 'center',
    marginTop:20
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.primary,
    marginLeft: 30
  },
  IconStyle:{
    color: '#fff'
  }
});
export default Page;
