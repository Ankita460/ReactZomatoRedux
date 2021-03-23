import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './src/Navigation/Routes';
import FlashMessage from "react-native-flash-message";
import { getUserData } from './src/utils/utils';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
  isLogin: false
    }
  }
  

  componentDidMount(){
    getUserData().then((res)=>{
      if(res){
        this.setState({
          isLogin: true
        })
      }
    })
  }
render (){
  const{isLogin}=this.state;
  return(
    <>
    <Routes isLogin={isLogin}/>

    <FlashMessage position="top" />
    </>
  )
}
}