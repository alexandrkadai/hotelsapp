import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import ExploreHeader from '@/components/ExploreHeader';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import listingsData from '@/assets/data/airbnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Page = () => {
  const [category, setCategory] = useState('Tiny Homes');

  const items = useMemo(() => listingsData as any, []);
  const getoItems = useMemo(() => listingsDataGeo, []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 80 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChange} />,
          }}
        />

        {/* <Listings listings={items} category={category} refresh={3}/> */}

        <ListingsMap listingsData={getoItems} />
        <ListingsBottomSheet listings={items} category={category} />

        {/* <Link href={'/(modals)/login'}>Login </Link>
        <Link href={'/(modals)/booking'}>Booking </Link>
        <Link href={'/listing/1223'}>Listing Details </Link> */}
        
      </View>
    </GestureHandlerRootView>
  );
};

export default Page;
