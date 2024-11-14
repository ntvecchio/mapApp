import React, { useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const INITIAL_REGION: Region = {
  latitude: -23.6205, // Latitude da sua cidade
  longitude: -45.4134, // Longitude da sua cidade
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function App() {
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(INITIAL_REGION, 1000);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      />
    </View>
  );
}
