import React, { Component } from "react";
import { TouchableOpacity  ,Text} from "react-native";


function BtnComponent({btnText , btnStyle ,btnOnPress ,btnTextStyle}){

    return(


        <TouchableOpacity
        style={btnStyle}
        onPress={()=> btnOnPress()}
      >
        <Text style={btnTextStyle}>{btnText}</Text>
      </TouchableOpacity>


    )



}
export default BtnComponent;