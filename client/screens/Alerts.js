import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header';  
import BottomNavBar from '../components/BottomNavBar';  

const Alerts = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const userEmail = await AsyncStorage.getItem('userEmail');  
      const savedMessage = await AsyncStorage.getItem(`alertMessage_${userEmail}`);
      if (savedMessage) {
        setMessage(savedMessage);
      } else {
        setMessage('');  
      }
    };
  
    fetchMessage();
  }, []);

  const handleContactCollectors = () => {
    navigation.navigate('Collectors');
  };

  
  const handleBackPress = () => {
    navigation.navigate('Dashboard');
  };

  return (

    <ImageBackground 
      source={require('../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
    <View style={styles.container}>
     
      <Header navigation={navigation} />

      <View style={styles.alertContent}>
        {message ? (
          <View style={styles.alertBox}>
            <Text style={styles.alertMessage}>{message}</Text>
            <TouchableOpacity style={styles.button} onPress={handleContactCollectors}>
              <Text style={styles.buttonText}>Contact Collectors</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.noAlertMessage}>No alerts at the moment.</Text>
        )}
      </View>

      
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      
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
  alertContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  alertBox: {
    backgroundColor: '#84CDA1',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A4E4B4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noAlertMessage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    right: 20,
    bottom: 100, 
    padding: 10,
    backgroundColor: '#84CDA1',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Alerts;
