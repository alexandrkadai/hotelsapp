import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
// import ListingsMap from '@/components/ListingsMap';

import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import listingsData from '@/assets/data/airbnb-listings.json';


const Page = () => {
  const [category, setCategory] = useState('Tiny Homes');

  const items = useMemo(() => listingsData as any , [] );

  const onDataChange = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChange}/>,
        }}
      />
  <Listings listings={items} category={category}/>
      {/* <Link href={'/(modals)/login'}>Login </Link>
      <Link href={'/(modals)/booking'}>Booking </Link>
      <Link href={'/listing/1223'}>Listing Details </Link> */}
    </View>
  );
};

export default Page;
