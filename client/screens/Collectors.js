import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';
import BottomNavBar from '../components/BottomNavBar';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location'; 

const Collectors = () => {
  const navigation = useNavigation();

  
  const [currentLocation, setCurrentLocation] = useState(null);

  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  
  const initialRegion = {
    latitude: 6.8825,
    longitude: 79.9786,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  const collectors = [
    { id: '1', latitude: 6.8825, longitude: 79.9786, title: 'Collector 1 - Athurugiriya' },
    { id: '2', latitude: 6.8883, longitude: 80.0312, title: 'Collector 2 - Kottawa' },
    { id: '3', latitude: 6.8740, longitude: 79.9936, title: 'Collector 3' },
    { id: '4', latitude: 6.8445, longitude: 80.0036, title: 'Collector 4 - Homagama' },
    { id: '5', latitude: 6.9080, longitude: 80.0281, title: 'Collector 5' },
  ];

  return (
    <ImageBackground
      source={require('../assets/images/—Pngtree—green leaves falling floating material_2988217.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Header navigation={navigation} />
        <View style={styles.mainContent}>
          <Text style={styles.title}>Collection Centers</Text>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={
                currentLocation
                  ? {
                      latitude: currentLocation.coords.latitude,
                      longitude: currentLocation.coords.longitude,
                      latitudeDelta: 0.05,
                      longitudeDelta: 0.05,
                    }
                  : initialRegion
              }
              showsUserLocation={true} 
              followsUserLocation={true} 
            >
              
              {collectors.map((collector) => (
                <Marker
                  key={collector.id}
                  coordinate={{ latitude: collector.latitude, longitude: collector.longitude }}
                  title={collector.title}
                />
              ))}

             
              {currentLocation && (
                <Marker
                  coordinate={{
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude,
                  }}
                  title="My Location"
                  pinColor="blue" 
                />
              )}
            </MapView>
          </View>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>

        <BottomNavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(164, 228, 180, 0.8)',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 40,
  },
  mapContainer: {
    width: '90%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: 60,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    backgroundColor: '#84CDA1',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Collectors;
