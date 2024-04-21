import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useMemo, useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Listings from '@/components/Listings';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

import { Listings_TYPES } from '@/intreface/listing_types';

interface Props {
  listings: Listings_TYPES[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['7%', '100%'], []);
  const [refresh, setRefresh] = useState<number>(0);

  const onShowMap = () => {
    bottomSheetRef.current?.collapse();
    
  };

  
  return (
    <BottomSheet
      style={styles.containerHandler}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}>
      <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Listings listings={listings} category={category} refresh={refresh} />
          <View style={styles.absoluteBTN}>
            <TouchableOpacity onPress={onShowMap} style={styles.btn}>
              <Text style={{ fontFamily: 'mon-sb', color: '#fff' }}>Map</Text>
              <Ionicons name="map" size={20} style={{ marginLeft: 10 }} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  containerHandler: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  absoluteBTN: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  sheetContainer: {
   
  },
});

export default ListingsBottomSheet;


