import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Colors from '@/constants/Colors';

const ModalHeaderText = () => {
  const [active, setActive] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActive(true)}>
        <Text
          style={[
            styles.textStyle,
            {
              color: active ? '#000' : Colors.grey,
              textDecorationLine: active ? 'underline' : 'none',
            },
          ]}>
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(false)}>
        <Text
          style={[
            styles.textStyle,
            {
              color: !active ? '#000' : Colors.grey,
              textDecorationLine: !active ? 'underline' : 'none',
            },
          ]}>
          The Same
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ModalHeaderText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'mon-sb',
  },
  active: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
