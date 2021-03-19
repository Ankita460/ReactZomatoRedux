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
import { userContext } from './src/Context/Context';
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
  isLogin: false
    }
  }
  

  componentDidMount(){
    const{isLogin}=this.state;
    getUserData().then((res)=>{
      if(res){
        this.setState({
          isLogin: true
        })
      }
    })
  }

  render() {
    const {isLogin} = this.state;
    return (
      <userContext.Provider
        value={{
          isLogin: isLogin,
          // onLogin: this.onLogin,
          // onLogout: this.onLogout,
        }}>
          <Provider store={store}>
        <Routes />
        </Provider>
        <FlashMessage position="top" />
      </userContext.Provider>
    );
  }
}

// render (){
//   const{isLogin}=this.state;
//   return(
//     <>
//     <Routes isLogin={isLogin}/>

//     <FlashMessage position="top" />
//     </>
//   )
// }
// }