import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/Head.png')}  
      style={styles.backgroundImage}
      resizeMode="cover" 
    >
      <View style={styles.headerContent}>
        <Text style={styles.title}>Waste Watch</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserDetails')}>
          <Icon name="person-circle" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height:154,
   
    justifyContent: 'center',
    alignItems: 'center', 
    resizeMode:'cover',
  
   
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%', 
    position: 'absolute', 
    top: 50, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#228b22', 
  },
  icon: {
    marginRight: 10, 
  },
});

export default Header;
