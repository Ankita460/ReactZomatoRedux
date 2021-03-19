import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import imagePath from '../constants/imagePath';
import HeaderTouch from '../Component/HeaderTouch'



function TopHeader()
{
    return(

        <View style={styles.header}>
            
        
        <HeaderTouch img={imagePath.menu}  styles={styles.icon} />
        <HeaderTouch img={imagePath.logoMyntra} styles={styles.logo}/>
        <View><Text style={{width: 60, height: 15, marginLeft: -100}}>Become</Text><Text style={{color: 'orange', width: 60, height: 15, marginLeft: -100}}>INSIDER</Text></View>
        <View style={{flexDirection: 'row'}}>
        <HeaderTouch img={imagePath.search} styles={styles.icon}/>
        <HeaderTouch img={imagePath.bell} styles={styles.icon}/>
        <HeaderTouch img={imagePath.heart} styles={styles.icon}/>
      <TouchableOpacity>
      <HeaderTouch img={imagePath.bag} styles={styles.icon}/>

      </TouchableOpacity>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      backgroundColor:"white"
  
    },
    icon:{
      width:20, 
      height:20,
      marginLeft:20,
      marginTop:10
    },
    logo:{
      width:35, 
      height:35,
      marginLeft:10,
      marginRight:100,
      marginTop:5,
    
    }
  
  });
  
  export default TopHeader;