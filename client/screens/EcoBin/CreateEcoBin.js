import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuDrawer from 'react-native-side-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CalendarPicker from "react-native-calendar-picker";
import Slider from "react-native-sliders";


const CreateEcoBin=()=>{

    const[SidebarActive,SetSidebarActive]=useState('true');
    const[Stage,SetStage]=useState(2);
    const[level,setLevel]=useState(0);
  

    const StageHandler=(stage)=>{

        SetStage(stage);


    }
    

    return(
        <View style={styles.container}>


<ImageBackground
        source={require('../../assets/images/Head.png')}  
        style={styles.backgroundImage}
        resizeMode="cover" 
      >
         <View style={styles.headerContent}>
        <Text style={styles.title}>Create New ecoBIN</Text>
     
      </View>
</ImageBackground>
        <View style={{flexDirection:'row'}}>

      <View style={styles.SideDrawer}>
        <TouchableOpacity style={Stage === 1 ? [styles.DrawerTabs_active, { marginTop: 130 }] : [styles.DrawerTabs, { marginTop: 130 }]}  onPress={() => StageHandler(1)}
        ><Icon name="calendar-number-outline" size={30} style={{color:'#fff'}}></Icon></TouchableOpacity>
        <TouchableOpacity style={Stage === 2 ? [styles.DrawerTabs_active] : [styles.DrawerTabs]}><Icon name="speedometer-outline" size={30} style={{color:'#fff'}} onPress={() => StageHandler(2)}></Icon></TouchableOpacity>
        <TouchableOpacity style={Stage === 3 ? [styles.DrawerTabs_active] : [styles.DrawerTabs]}><Icon name="nutrition-outline" size={30} style={{color:'#fff'}} onPress={() => StageHandler(3)}></Icon></TouchableOpacity>
        <TouchableOpacity style={Stage === 4 ? [styles.DrawerTabs_active] : [styles.DrawerTabs]}><Icon name="water-outline" size={30} style={{color:'#fff'}} onPress={() => StageHandler(4)}></Icon></TouchableOpacity>
        <TouchableOpacity style={Stage === 5 ? [styles.DrawerTabs_active] : [styles.DrawerTabs]}><Icon name="checkmark-done-outline" size={30} style={{color:'#fff'}} onPress={() => StageHandler(5)}></Icon></TouchableOpacity>
        
      
      </View>

    <View style={styles.Content}>

     {Stage===1?(
        <>
         <Text style={styles.Content_Title}>Pick Date</Text>
         <View style={styles.container}>
          
             <View style={styles.calendarContainer}>
               <CalendarPicker width={300}   />
             </View>
     
             <View>
             
             </View>
           </View>
         <TouchableOpacity style={styles.Confirm}><Icon name="checkmark-circle-outline" size={70} style={{color:'green'}} onPress={() => StageHandler(2)}></Icon></TouchableOpacity>
         </>):
            Stage===2?(<>
             <Text style={styles.Content_Title}>Set Level</Text>
         <View style={styles.container}>
       
     
             <View>
             <Slider
              style={{width: 300, height: 40}}
          value={level}
          onValueChange={value => setLevel( value )}
          minimumValue={0}
          maximumValue={100}
          step={0.1}
         
        
        />

             </View>
           
           </View>

           <View style={{top:200,alignItems:'center',justifyContent:'center'}} ><Text style={{fontSize:40}}>{level}</Text></View>
          
         <TouchableOpacity style={styles.Confirm}><Icon name="checkmark-circle-outline" size={70} style={{color:'green'}} onPress={() => StageHandler(3)}></Icon></TouchableOpacity>
            </>):null
            
            
            
            }   
   

    </View>
   
        </View>
    




      
        </View>
      


    )

};

const styles=StyleSheet.create({
    containerCal: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 100,
      },
      calendarContainer: {
        width:400, 
        height: 400, 
        left:-48
     
        
        
      },
    container: {
        flex: 1,  
        backgroundColor: 'rgba(164, 228, 180, 0.8)', 
      },
      title:{
        fontSize:30,
      fontStyle:'italic',
      fontWeight:'bold',
      color:'#025904',
      

      },
      headerContent:{
            left:50
      },
    backgroundImage: {
        width: '100%',
        height:154,
       
        justifyContent: 'center',
        alignItems: 'center', 
        resizeMode:'cover',
      
       
      },
      SideDrawer:{
        backgroundColor:'green',
        position:'absolute',
      left:0,
       width:90,
       height:842,
    top:-150,
    
       borderTopRightRadius:50,
       borderBottomRightRadius:50,
       paddingTop:40,
   

zIndex:5,
     
       flexDirection:'column',
       shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation:10,
       
      },
      
      
      Content:{
        flex:1,
        position:'relative',
      left:100,
      top:20,
        fontSize:30,
        flexDirection:'column'
      },
      DrawerTabs:{
        height:'10%',
        padding:10,
        justifyContent:'center',
        alignItems:'center', marginBottom:20,
      },
      DrawerTabs_active:{
        height:'10%',
        marginBottom:20,
        backgroundColor:'#000',
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    
        
      },
      Content_Title:{
        fontSize:25,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'#fff',
        marginBottom:35
      },
      Confirm:{
        top:420,
        left:220
      }


});

export default CreateEcoBin;