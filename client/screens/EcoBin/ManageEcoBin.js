import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import BottomNavBar from '../../components/BottomNavBar';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Ionicons';





const { width: screenWidth } = Dimensions.get('window');

const dummyData = [
  { id: 1, title: 'Week1' },
  { id: 8, title: 'Title 2' },
  { id: 3, title: 'Title 3' },
  { id: 4, title: 'Title 4' },
  { title: 'Title 5' }
];

const MyCarousel = ({ data }) => {
  const renderItem = ({ item }) => (
    <View  style={styles.card}>
        <View style={styles.card_top}>
            <Icon name='flag-outline' size={30} style={{color:'#025904',left:45}}></Icon>
            <Text style={{color:'#025904',top:10,left:45}}>12</Text>
            <Text style={{fontSize:18,fontStyle:'italic',color:'#025904',left:100,fontWeight:600}}>6th Week</Text>
        </View>
        <View style={styles.card_mid}>
            <View style={styles.PartBtns}>
                <TouchableOpacity style={styles.PartBtn_btn}><Icon name="hammer-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                <TouchableOpacity style={styles.PartBtn_btn}><Icon name="water-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                <TouchableOpacity style={styles.PartBtn_btn}><Icon name="footsteps-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                
            </View>
            <Image source={require('../../assets/images/Shovel.png')} style={styles.card_img} resizeMode="cover" ></Image>
        </View>
        <View style={styles.card_bottom}>
            <TouchableOpacity><Icon name='checkbox-outline' size={30} style={{color:'#025904',left:45}}></Icon></TouchableOpacity>
        
            
            <Text style={{fontSize:18,fontStyle:'italic',color:'#025904',left:100,fontWeight:600}}>2024 OCT 23</Text>
        </View>
       
     
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth}
      layout={'default'}
      
    />
  );
};

const ManageEcoBin = ({navigation}) => {
  return (

           
<ImageBackground 
      source={require('../../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
      
<View style={styles.container}>
    <Header/>
    <View style={styles.Walktrough}>
        <View style={styles.TitleManage}>
        <Icon name="leaf-outline" size={50} style={{color:'#025904',marginRight:20}}></Icon>
                    <Text style={{fontSize:35,fontStyle:'italic',color:'#025904',fontWeight:'600'}}>Manage EcoBin</Text>
                    
                    </View>
   
      <MyCarousel data={dummyData} />
      <View style={styles.BottomTbs}>
                <TouchableOpacity style={styles.BottomTbs_btn}><Icon name="hammer-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                <TouchableOpacity style={styles.BottomTbs_btn}><Icon name="water-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                <TouchableOpacity style={styles.BottomTbs_btn}><Icon name="footsteps-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                <TouchableOpacity style={styles.BottomTbs_btn}><Icon name="footsteps-outline" size={30} style={{color:'#025904'}}></Icon></TouchableOpacity>
                
            </View>
    </View>
    <BottomNavBar navigation={navigation}/>
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
        backgroundColor: 'rgba(216, 256, 217, 0.8)',
      },
      mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -30,
      },
      
  text:{
    fontSize:20,
    marginBottom:20,
    color:'#764ABC'
  },
  card: {
    backgroundColor: 'rgba(180, 242, 182,1)',
    borderRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth - 170, 
    marginHorizontal: 20 ,
    height:350,
    position:"relative",
    left:"16%",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation:10,
    flexDirection:'column'
  },
  title: {
    fontSize: 24,
    color:'white'
  },
  Walktrough:{
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  TitleManage:{
    flexDirection:'row',
    position:'relative',
    left:-40,
    marginBottom:30
  },
  card_top:{
position:'relative',
top:-30,
left:-80,
flexDirection:'row',
justifyContent:'space-between',
marginTop:20
  },
card_bottom:{
    position:'relative',
    top:10,
    left:-80,
    flexDirection:'row'
},
card_mid:{

    position:'relative',
    top:-60,
    left:-80,
    flexDirection:'row'

},
card_img:{
    width:300,
    height:200,
top:40,
    left:120
},
PartBtns:{flexDirection:'column',top:10},
PartBtn_btn:{
    width:60,
    height:60,
    backgroundColor:'#D9D9D9',
    left:150,
    top:40,
    borderRadius:40,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center'
},
BottomTbs:{
    flexDirection:'row',
    top:-80,
    margin:0,
    alignContent:'space-around',
    justifyContent:'space-around'
},
BottomTbs_btn:{
    width:90,
    height:90,
    backgroundColor:'#B4F2B6',
   
    top:40,
    borderRadius:40,
    marginBottom:10,
    margin:3,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation:3,
}
});

export default ManageEcoBin;