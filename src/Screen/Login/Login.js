import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import validator from '../../utils/validation';
import { showMessage, hideMessage } from "react-native-flash-message";
import apis from '../../apis';
import fontFamily from '../../styles/fontFamily';



export default class Login extends Component {
    constructor(props) {
      super(props);
      this.state={
        email: "",
        password: "",
        isloading: false
        
      }
      
    }
    onLogin=()=>{
      const {email, password}=this.state;
      const {navigation}=this.props;
      if(this.isValidData()){
          this.setState({
              isloading: true
          })
          apis.login({
               email: email, password: password})
        
          .then((res)=>{
                console.log(res);
                  this.setState({
                      isloading: false
                  })
                  showMessage({
                      type:"success",
                      icon:"success",
                      message: "Successfully Registered!"
                  });
                  navigation.navigate(navigationStrings.HOMEPAGE);

          })
          .catch((error)=>{
              this.setState({
                  isloading: false
              })
              showMessage({
                  type:"danger",
                  icon:"danger",
                  message: error.message
              });
          })
      
      }
  }
  isValidData = () => {
    const{email, password}=this.state;
    console.log(email, password);

    const error=validator({ email:email, password:password}) 
   if (error) { 
       showMessage({
       type:"danger",
      icon:"danger",
      message:error
       })
       return false;
    } 
       return true; 
   };
   onChangeText(key){
    return (value)=>{
        this.setState({
            [key]: value
        })
    }
}
   
render(){
    let {navigation, isloading} = this.props;

    return(
        <View>
            <Text style={styles.login}>Login</Text>
            <View style={styles.email}>
            <TextInput placeholder="Email" onChangeText
            ={this.onChangeText("email")}/>

            </View>
            <View style={styles.password}>
            <TextInput placeholder="Password"  onChangeText
            ={this.onChangeText("password")}/>

            </View>
            
            {isloading&&(<View style={styles.loading}><ActivityIndicator size="small" color="grey"></ActivityIndicator></View>)}
<TouchableOpacity onPress={this.onLogin}>
  <View style={{borderWidth: 1, width: 80, height: 30, marginHorizontal: 130, borderColor: colors.textTerms, backgroundColor: colors.textTerms }}>
  <Text style={{textAlign: 'center', fontWeight: 'bold', marginVertical: 3, color: colors.textField}}>LOGIN</Text>

  </View>
</TouchableOpacity>
<View style={{flexDirection: 'row'}}>
<Text style={ styles.account}>Create New Account?</Text>

<TouchableOpacity  onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
<Text style={styles.signup}>Sign Up</Text>
</TouchableOpacity>
</View>



           
        </View>
    )
}
}

const styles=StyleSheet.create({
  login:{
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 25
  },
  email:{
    borderWidth: 1,
    width: 270,
    height: 45,
    marginHorizontal: 35,
    marginVertical: 20,
    borderColor: colors.textBorder,
    backgroundColor: colors.textField
  },
  password:{
    borderWidth: 1,
    width: 270,
    height: 45,
    marginHorizontal: 35,
    marginVertical: 10,
    borderColor: colors.textBorder,
    backgroundColor: colors.textField
  },
  signup:{
    color: colors.textTerms,
    marginVertical: 20,
    marginHorizontal: -20
  },
  account:{
    marginVertical: 20,
    marginHorizontal: 30,
    fontFamily:fontFamily.openSensLight,
    fontSize: 15,
    
  }
})