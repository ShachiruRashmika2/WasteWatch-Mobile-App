import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, Alert, ScrollView, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserDetails = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://192.168.43.161:4000/auth/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data);
          setUpdatedUser({
            name: response.data.name,
            address: response.data.address,
            phone: response.data.phone,
          });
        } else {
          setError('No token found');
        }
      } catch (err) {
        setError('Failed to fetch user details');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    } catch (err) {
      setError('Failed to logout');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: handleLogout, style: 'destructive' }
      ]
    );
  };

  const handleDeleteAccount = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await axios.delete('http://192.168.43.161:4000/auth/delete', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        await AsyncStorage.removeItem('token');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }]
        });
      } else {
        setError('No token found');
      }
    } catch (err) {
      setError('Failed to delete account');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: handleDeleteAccount, style: 'destructive' }
      ]
    );
  };

  const handleSaveChanges = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await axios.put('http://192.168.43.161:4000/auth/update', updatedUser, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(prevUser => ({ ...prevUser, ...updatedUser }));
        setEditMode(false); 
      } else {
        setError('No token found');
      }
    } catch (err) {
      setError('Failed to save changes');
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false); 
    setUpdatedUser({
      name: user.name,
      address: user.address,
      phone: user.phone,
    });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
      <Text style={styles.profileTitle}>PROFILE</Text>

      <ScrollView style={styles.scrollView}>
        <View style={styles.userDetailsBox}>
          {editMode ? (
            <View style={styles.editContainer}>
              <Text style={styles.editTitle}>Edit Details</Text>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                value={updatedUser.name}
                onChangeText={text => setUpdatedUser({ ...updatedUser, name: text })}
              />
              <Text style={styles.label}>Address:</Text>
              <TextInput
                style={styles.input}
                value={updatedUser.address}
                onChangeText={text => setUpdatedUser({ ...updatedUser, address: text })}
              />
              <Text style={styles.label}>Phone:</Text>
              <TextInput
                style={styles.input}
                value={updatedUser.phone}
                onChangeText={text => setUpdatedUser({ ...updatedUser, phone: text })}
              />
              <Button title="Save Changes" onPress={handleSaveChanges} color="#FF6347" />
              <Button title="Cancel" onPress={handleCancelEdit} color="#888" />
            </View>
          ) : (
            <View style={styles.detailsContainer}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{user.name}</Text>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{user.email}</Text>
              <Text style={styles.label}>Address:</Text>
              <Text style={styles.value}>{user.address}</Text>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{user.phone}</Text>
              <Button title="Edit" onPress={() => setEditMode(true)} color="#84CDA1" />
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={confirmLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={confirmDelete} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
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
  scrollView: {
    flexGrow: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    padding: 20,
    color: '#004d00',
  },
  userDetailsBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  detailsContainer: {
    marginVertical: 10,
  },
  editContainer: {
    marginVertical: 10,
  },
  editTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  noData: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888',
  },
  buttonsContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    gap: 25, 
  },
  button: {
    backgroundColor: '#84CDA1', 
    borderRadius: 25,
    paddingVertical: 10, 
    paddingHorizontal: 30, 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18, 
    textAlign: 'center', 
    fontWeight: 'bold', 
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default UserDetails;
