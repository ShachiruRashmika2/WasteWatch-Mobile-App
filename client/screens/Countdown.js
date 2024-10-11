import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../components/Header'; 
import BottomNavBar from '../components/BottomNavBar'; 

const Countdown = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = async () => {
      const userEmail = await AsyncStorage.getItem('userEmail');
      const countdownKey = `countdownEndTime_${userEmail}`;
      const endTime = await AsyncStorage.getItem(countdownKey);

      if (endTime) {
        const endTimeMs = parseInt(endTime, 10);
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = endTimeMs - now;

          if (distance < 0) {
            clearInterval(interval);
            setTime({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            });
            
            const saveAlertMessage = async () => {
              await AsyncStorage.setItem(
                `alertMessage_${userEmail}`,
                'Food waste has been in the bin for more than 2 minutes'
              );
            };
            saveAlertMessage(); 
            return;
          }

          setTime({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }, 1000);

        return () => clearInterval(interval);
      }
    };

    calculateTime();
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
      <Header navigation={navigation} /> 
      
      <View style={styles.mainContent}>
       
        <Image source={require('../assets/images/pngegg (5).png')} style={styles.truckImage} />

        
        <Text style={styles.title}>Waste Collection Countdown</Text>

        
        <View style={styles.timerContainer}>
          {Object.entries(time).map(([label, value]) => (
            <View key={label} style={styles.timeSection}>
              <Text style={styles.timeValue}>{value}</Text>
              <Text style={styles.timeLabel}>{label}</Text>
            </View>
          ))}
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
  },
  truckImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004d00',
    marginBottom: 20,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  timeSection: {
    alignItems: 'center',
    margin: 10,
  },
  timeValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004d00',
  },
  timeLabel: {
    fontSize: 14,
    color: '#004d00',
  },
  backButton: {
    position: 'absolute',
    right: 20,
    bottom: 40, 
    padding: 10,
    backgroundColor: '#84CDA1',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Countdown;
