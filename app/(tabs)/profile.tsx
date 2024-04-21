import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
      {isSignedIn && <Button title="Log Out" onPress={() => signOut()} />}

      {!isSignedIn && (
        <Link href={'/(modals)/login'}>
          <Text style={styles.textStyle}>Sign In</Text>
        </Link>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    fontFamily: 'mon-b',
    textAlign: 'center'
  },
});
export default Page;
