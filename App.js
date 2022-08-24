import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, onPress } from 'react-native';
import Axios from 'axios';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {


  const [origin, setOrigin] = useState(null);





   useEffect(() => {
    (async () => {
       let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});

      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    })();
  }, []); 

  return (
    <View style={styles.container}>

      <MapView 
      style={styles.map}
      region={origin}
      showsBuildings
      showsUserLocation
      userLocationCalloutEnabled
      showsMyLocationButton={true}
      showsPointsOfInterest
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },

});
