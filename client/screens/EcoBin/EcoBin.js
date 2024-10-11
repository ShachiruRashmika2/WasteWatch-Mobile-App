import React from "react";
import { View,StyleSheet,Text,ImageBackground } from "react-native";
import BottomNavBar from "../../components/BottomNavBar";
import Header from "../../components/Header";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";


const EcoBin=()=>{


return(
        
<ImageBackground 
      source={require('../../assets/images/—Pngtree—green leaves falling floating material_2988217.png')} 
      style={styles.background}
    >
<View style={styles.container}>
    <Header/>

   
    <View style={styles.ProgressContainer}>
    
   <View style={styles.EcobinLogo}><Icon name="leaf-outline" size={40} style={styles.Leaf} /><Text style={styles.EcobinText}>eco BIN</Text>
   <Image source={require('../../assets/images/Hand.png')} style={styles.HandImg} resizeMode="cover" ></Image>
   </View>
   <View style={styles.MileStnone_RemTime}>
   <View style={styles.MileStnone_RemTime_Tabs} ><Icon name="hourglass-outline" size={20}  /></View>
   <View style={styles.MileStnone_RemTime_Tabs} ><Icon name="flag-outline" size={20}  /></View>
  
   </View>
  
    </View>
   
</View>
<BottomNavBar/>
</ImageBackground>
   

)




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
    
   
    ProgressContainer:{
        width:"90%",
        backgroundColor:"green",
        height:170,
       margin:"5%",
        borderBottomRightRadius:60,
        borderTopLeftRadius:60,
        padding:"5%",
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    Leaf:{
        color:"white",
        position:"relative",
        marginRight:8,
        top:0,
        textShadowColor: 'rgba(0, 0, 0, 0.25)', 
        textShadowOffset: { width: 0,
            height: 2, }, 
        textShadowRadius: 3.84, 
        shadowOpacity: 0.25,

    },
    EcobinLogo:{
       
        flex: 1,
    flexDirection: 'row',
    height:"45%"
    },
    EcobinText:{
        fontSize:32,
        color:"white",
        fontStyle:"italic",
        textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: { width: 0,
        height: 2, }, 
    textShadowRadius: 3.84, 
    shadowOpacity: 0.25,
        
    },
    HandImg:{
        width:220,
        height:150,
        position:"relative",
        right:0,
        top:-50
    },
    MileStnone_RemTime:{

        flex:1,
        flexDirection:"column",
        position:"relative",
        top:-20
      

    },
    MileStnone_RemTime_Tabs:{

        width:150,
        height:25,
        backgroundColor:"#96E097",
        margin:2,
        borderRadius:10,
        padding:2,
        paddingLeft:5,
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5


    }


  });

  export default EcoBin;