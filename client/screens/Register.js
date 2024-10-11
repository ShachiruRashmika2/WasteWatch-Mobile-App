import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phone);
  };

  const isValidPassword = (password) => {
    return password.length >= 8; 
  };

  const handleRegister = async () => {
    if (name === '' || email === '' || address === '' || phone === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
    } else if (!isValidPhone(phone)) {
      Alert.alert('Invalid Phone Number', 'Phone number should be a 10-digit number');
    } else if (!isValidPassword(password)) {
      Alert.alert('Invalid Password', 'Password should be at least 8 characters long');
    } else if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://192.168.43.161:4000/auth/register', {
          name,
          email,
          address,
          phone,
          password,
          confirmPassword,
        });

        console.log('Register Response:', response.data);

        if (response.status === 201) {
          Alert.alert('Success', 'Account created!');
          navigation.navigate('Login');
        } else {
          Alert.alert('Error', response.data.message || 'Registration failed');
        }
      } catch (error) {
        console.log('Register Error:', error);
        Alert.alert('Error', `An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/1-photoaidcom-cropped.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>Hello</Text>
      <Text style={styles.subText}>Create Your Account</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Register</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an account?{''}
              <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                Login here.
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 75,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004d00',
    marginBottom: 5,
  },
  subText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#004d00',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20, 
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'rgb(9, 72, 43)',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#BEE4D7',
    textAlign: 'center',
    placeholderTextColor: '#888',
  },
  button: {
    backgroundColor: '#168153',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 16,
    marginLeft:30,
    marginRight:30
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginContainer: {
    marginTop: 20, 
    alignItems: 'center',
  },
  loginText: {
    color: '#333',
    textAlign: 'center',
  },
  loginLink: {
    color: '#007bff',
  },
});

export default Register;
