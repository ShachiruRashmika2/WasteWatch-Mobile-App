import React from 'react';
import { View, TouchableOpacity ,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomNavBar = ({ navigation }) => {
  return (
    <View className="flex-row justify-around py-5 bg-green-50 border-trounded-lg" style={styles.NavTab}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="home" size={25} color='#025904' />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={25} color='#025904'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Bin')}>
        <Icon name="trash" size={25} color='#025904' />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EcoBin')}>
        <Icon name="leaf" size={25} color='#025904'/>
      </TouchableOpacity>
    </View>
  );
};
const styles=StyleSheet.create({

NavTab:{
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  zIndex:4,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 0,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,


}



})

export default BottomNavBar;