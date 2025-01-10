import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text,ImageBackground, Image, TouchableOpacity } from "react-native";
import BottomNavBar from "../../components/BottomNavBar";
import Header from "../../components/Header";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from "react-native-animated-progress";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";

const EcoBin=({navigation})=>{

    const Navigate=useNavigation();

    useEffect(()=>{



    },[])


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
   <View style={styles.MileStnone_RemTime_Tabs} ><Icon name="hourglass-outline" size={20}  /><Text style={styles.MileStnone_RemTime_Tabs_Text}>2M 3d</Text></View>
   <View style={styles.MileStnone_RemTime_Tabs} ><Icon name="flag-outline" size={20}  /><Text style={styles.MileStnone_RemTime_Tabs_Text}>18</Text></View>
  
   </View>
   <View style={styles.ProgressContainer_Progress}>
    <Text style={styles.ProgressContainer_Progress_Text}>Your Progress</Text>
    <View style={styles.ProgressContainer_Progress_progressTab} >
        
    <ProgressBar
          progress={30}
          height={10}
        
       
         backgroundColor="#fff"
          animated={false}
          
         
        />
        </View>

   </View>
  
    </View>

    <View style={styles.ButtonContainer}>
    <ImageBackground 
      source={require('../../assets/images/71285356.jpg')} 
      style={styles.ButtonContainer_Background}
      
    >
        <View style={styles.ButtonContainer_Content}>
            <View style={styles.ButtonContainer_Content_horizontal_Sec}>
                <TouchableOpacity 
 style={styles.ButtonContainer_Content_horizontal_Sec_manageBtn}   onPress={() => navigation.navigate('ManageEcoBin')}>
                    <Icon name="leaf-outline" size={50} style={{color:'#025904'}}></Icon>
                    <Text style={{color:'#025904'}}>Manage</Text>
                    <Text style={{fontSize:40,fontStyle:'italic',color:'#025904'}}>EcoBin</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
                <TouchableOpacity style={styles.ButtonContainer_Content_horizontal_Sec_3butns}>

                    <Icon name="notifications-outline" size={50} style={{color:'#025904'}}></Icon>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonContainer_Content_horizontal_Sec_3butns}>

<Icon name="help-circle-outline" size={50} style={{color:'#025904'}}></Icon>

</TouchableOpacity>
<TouchableOpacity style={styles.ButtonContainer_Content_horizontal_Sec_3butns} onPress={() => navigation.navigate('CreateEcoBin')}>

<Icon name="archive-outline" size={50} style={{color:'#025904'}}></Icon>

</TouchableOpacity>
                </View>
                <TouchableOpacity 
 style={styles.ButtonContainer_Content_horizontal_Sec_StatsBtn}>
                    <Icon name="bar-chart-outline" size={40} style={{color:'#025904',marginRight:20,left:-40,top:10}}></Icon>
                  
                    <Text style={{fontSize:30,fontStyle:'italic',color:'#025904',top:10}}>Show Stats</Text>
                </TouchableOpacity>

            </View>

        </View>
    </ImageBackground>

    </View>
   
</View>
<BottomNavBar navigation={navigation}/>
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
      backgroundColor: 'rgba(216, 256, 217, 0.8)',
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -30,
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
        top:4,
        height:100
      

    },
    MileStnone_RemTime_Tabs:{

        width:150,
       height:"auto",
        backgroundColor:"#96E097",
        margin:2,
        borderRadius:10,
        padding:0,
        paddingLeft:5,
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
       
        flexDirection:"row",
   


    },
    MileStnone_RemTime_Tabs_Text:{
        marginLeft:10,
        marginTop:2,
       

    },
    ProgressContainer_Progress:{

        flex:1,
        flexDirection:"column",
        width:"98%",
        position:"relative",
        bottom:-20
        


    },
    ProgressContainer_Progress_progressTab:{
        width:'90%'
    },
    ProgressContainer_Progress_Text:{
        fontSize:12,
        marginBottom:6
    },
    ButtonContainer:{
        width:"100%",
        position:"relative",
        bottom:0,
        backgroundColor:"white",
        height:450,
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
      
        flexDirection:"column",
        overflow:"hidden",
        shadowColor:"#000000",
        shadowOffset: {
           width: -6,
           height: -8,
        },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: -16
       
      
    },
    ButtonContainer_Background:{
        flex:1,
        height:500,
       
    },
    ButtonContainer_Content:{
        flex:1,
        backgroundColor: 'rgba(164, 228, 180, 0.8)',
        padding:30
        
    },
    ButtonContainer_Content_horizontal_Sec:{

        flex:1,
        flexDirection:"column",
     
        

    },
    ButtonContainer_Content_horizontal_Sec_manageBtn:{

       
        flexDirection:"row",
        backgroundColor: 'rgba(216, 256, 217,1)',
        borderRadius:50,
        height:'35%',
        padding:40,
        paddingBottom:30,
        alignContent:"center",
        justifyContent:"center",
        color:"#025904",
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
       



    }
    , ButtonContainer_Content_horizontal_Sec_3butns:{
        backgroundColor: 'rgba(216, 256, 217,1)',
        borderRadius:40,
        height:'65%',
        width:"30%",
        padding:20,
        paddingBottom:10,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        color:"#025904",
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
      

    },

    ButtonContainer_Content_horizontal_Sec_StatsBtn:{

       
        flexDirection:"row",
        backgroundColor: 'rgba(216, 256, 217,1)',
        borderRadius:50,
        height:'20%',
        padding:10,
      
        alignContent:"center",
        justifyContent:"center",
        color:"#025904",
        shadowColor: "#000000",
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5,
        position:"relative",
        top:-35
       
       



    }





  });

  export default EcoBin;