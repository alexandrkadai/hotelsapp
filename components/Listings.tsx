import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

interface Props {
  listings: string[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {}, [category]);

  return (
    <View style={styles.container}>
      <Text>Listings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 150 },
});

export default Listings;
