import React, { Component } from "react";
import { TextInput  ,Text ,StyleSheet ,Image , View} from "react-native";



function TextInputComponent({Holder , img  }){


    return(

        <View >
            <Text style={styles.nameText}>{Holder}</Text>
            <View style={styles.rowContainer} >
              <Image
              style={styles.namepng}
              source={img}
              />

              <TextInput
              
              style={styles.inputField}
              
              />
            </View>



          </View>


    )
}
export default TextInputComponent

const styles = StyleSheet.create({

    nameText:{
          fontSize:20,
          color:"#FF406C",
          marginLeft:10,
          marginTop:20
      },
      namepng:{
        width:30,
        height:30,
        marginTop:10
      },
      rowContainer:{
          flexDirection:"row",

      },
      inputField:{
          borderBottomColor:"#FF406C",
          borderBottomWidth:2,
          width:250
          
      }
    
    
    
    })