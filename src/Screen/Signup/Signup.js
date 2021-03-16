import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ActivityIndicator, Modal} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import validator from '../../utils/validation';
// import navigationStrings from '../constant/navigationStrings';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showMessage, hideMessage } from "react-native-flash-message";
import apis from '../../apis';
import navigationStrings from '../../constants/navigationStrings';
import * as ImagePicker from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';
import Header from '../../Component/Header';

export default class Signup extends Component {
    constructor(props) {
      super(props);
      this.state={
          name: "",
          dob: "",
          email: "",
          password: "",
          rePassword: "",
          isVisible: false,
          date: "",
          isloading: false,
          isModalVisible: false,
          hasCameraPermission: null,
          image: null,
          resourcePath: "https://i.pinimg.com/736x/5a/14/33/5a1433b23915354a678da95caabff9af.jpg",
      }
      
    }
    openModal = () => {
        this.setState({
          isModalVisible: true,
        });
      }
      closeModal = () => {
        this.setState({
          isModalVisible: false,
        });
      };

      onChooseCamera=async()=>{
        try{
          const granted=await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Cool Photo App Camera Permission ",
              message: "This App needs access to your camera" +
              "so you can take awesome pictures.",
              buttonNeutral: "Ask me later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if(granted===PermissionsAndroid.RESULTS.GRANTED){
            console.log("You can use the camera");
            const options={
              mediaType: 'photo',

            }
            ImagePicker.launchCamera(options, (response)=>{
              console.log('Response =', response);
              if (response.didCancel) {
                          console.log('User cancelled image picker');
                        } else if (response.error) {
                          console.log('ImagePicker Error: ', response.error);
                        } else if (response.customButton) {
                          console.log('User tapped custom button: ', response.customButton);
                        } else {
                          const source =  response.uri;
                  
                          this.setState({
                              resourcePath: source,
                              isModalVisible: false
                          });
                        }
            })
          }
          else{
            console.log("Camera permission denied ");
          }
        }
        catch(err){
          console.warn(err);
        }
      }
    


      onChooseGallery=async()=>{
        try{
          const granted=await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: "Cool Photo App Camera Permission ",
              message: "This App needs access to your camera" +
              "so you can take awesome pictures.",
              buttonNeutral: "Ask me later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if(granted===PermissionsAndroid.RESULTS.GRANTED){
            console.log("You can use the camera");
            const options={
              mediaType: 'photo',

            }
            ImagePicker.launchImageLibrary(options, (response)=>{
              console.log('Response =', response);
              if (response.didCancel) {
                        console.log('User cancelled image picker');
                      } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                      } else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                      } else {
                        const source = response.uri;
                        this.uploadImage(response);
                        this.setState({
                            resourcePath: source,
                            isModalVisible: false
                        });
                      }
            })
          }
          else{
            console.log("Gallery permission denied ");
          }
        }
        catch(err){
          console.warn(err);
        }
      }

      uploadImage=(response)=>{
        const apiData=new FormData();
        apiData.append('image',{
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        })
        apis.uploadImage(apiData).then((response)=>{
          showMessage({
            type:"success",
            icon: "success",
            message: "Successfully Uploaded"
          })
        })
        .catch((error)=>{
          showMessage({
            type:"danger",
            icon: "danger",
            message: "Error"
          })
        })
      }
 



    onChangeText(key){
        return (value)=>{
            this.setState({
                [key]: value
            })
        }
    }
    onSignup=()=>{
        const{name, email}=this.state;
        const {navigation}=this.props;
        if(this.isValidData()){
            this.setState({
                isloading: true
            })
            apis.Signup({
                name: name, email: email, languageCode: 'EN', signupType: 'APP'
            })
            .then((res)=>{
              
                    this.setState({
                        isloading: false
                    })
                    showMessage({
                        type:"success",
                        icon:"success",
                        message: "Successfully Registered!"
                    });
                    navigation.navigate(navigationStrings.LOGIN);

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
        const{name, email, password, rePassword}=this.state;
        const {isModalVisible, showImagePicker, resourcePath} = this.state;

        console.log(name, email, password, rePassword);

        const error=validator({name: name, email:email, password:password, rePassword: rePassword}) 
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
        
       

showPicker=()=>{
   this.setState({isVisible: true
})
}
hidePicker=()=>{
    this.setState({
        isVisible: false
    })
}
    handlePicker=(picked)=>{
        let day=picked.getDate();
        let month=picked.getMonth() + 1;
        let year=picked.getFullYear();
let final=day + "/" + month + "/" + year
        this.setState({
            isVisible: false,
            date: final
        })
}

render(){
    const{isVisible, date, isloading, isModalVisible, resourcePath}=this.state
const{navigation}=this.props
    return(
        <KeyboardAwareScrollView>
        <View style={styles.background}>
          <Header/>
            {/* <TouchableOpacity onPress={() => navigation.goBack()} >
<Text style={styles.container}><Image source={imagePath.back} style={styles.back}/></Text>
            </TouchableOpacity>
            <Text style={styles.Signup}>Sign Up</Text> */}
<TouchableOpacity onPress={this.openModal}>
    <View>
    <Image source={{uri: resourcePath}} style={styles.dp}/>

    </View>

    

</TouchableOpacity>
            <View style={styles.nameBorder}>
            <TextInput placeholder="Name " onChangeText ={this.onChangeText("name")}
            />
            </View>
            <View style={styles.dobBorder}>

            <TextInput placeholder="Date of Birth " onFocus={this.showPicker} value={date} />
            </View>
            <View style={styles.emailBorder}>

            <TextInput placeholder="Email" onChangeText
            ={this.onChangeText("email")} />
            </View>
            <View style={styles.passwordBorder}>

            <TextInput placeholder="Password "  onChangeText
            ={this.onChangeText("password")}/>
            </View>
            <View style={styles.rePasswordBorder}>

            <TextInput placeholder="Re-Enter Password" onChangeText
            ={this.onChangeText("rePassword")} />

            </View>
            <DateTimePickerModal 
            isVisible={isVisible}
            mode="date"
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker}
            />

            {/* <TouchableOpacity>
            <View style={styles.submitStyle}>
<Text style={styles.submit}>Submit</Text>
            </View>
            </TouchableOpacity> */}
           <View style={{flexDirection: 'row'}}>
           <Text style={styles.register}>Already Register?</Text>
            
            <Text style={styles.login}>Login</Text>

            <TouchableOpacity onPress={this.onSignup}>
            <View style={styles.arrow}>
<Image source={imagePath.rightBack} style={styles.rightBack}/>

</View>
</TouchableOpacity>
           </View>
            
            {isloading&&(<View style={styles.loading}><ActivityIndicator size="small" color="grey"></ActivityIndicator></View>)}

<Text style={styles.agree}>By Signing up you agree to our</Text>
<View style={styles.condition}>
<Text style={styles.terms}>Terms of service</Text>
<Text style={styles.and}>and</Text>
<Text style={styles.privacy}>Privacy Policy</Text>
</View>
<Modal visible={isModalVisible} transparent>
          <View style={styles.modal}>
              <Text style={{marginVertical: 10, marginHorizontal: 120, fontWeight: 'bold'}}>SELECT PHOTO</Text>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={this.onChooseCamera}>
              
              <Text style={{marginHorizontal: 80, height: 90}}>
                
                <Image source={imagePath.camera} style={styles.camera} /></Text>
                <Text style={{marginVertical: -30, marginHorizontal: 79}}>Camera</Text>
              {/* </Text><Text style={{marginHorizontal: 120, marginVertical: -20, color: 'grey'}}>Take a beautiful picture</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onChooseGallery}>
              <Text style={{marginVertical: 5,marginHorizontal: 15, height: 90}}>
                
                <Image source={imagePath.gallery} style={styles.gallery} /></Text>
                <Text style={{marginVertical: -28, marginHorizontal: 15}}>Gallery</Text>
              {/* </Text><Text style={{marginHorizontal: 100, marginVertical: -28, color: 'grey'}}>Choose an existing photo</Text> */}
            </TouchableOpacity>
              </View>
            

            <View style={{borderWidth: 1, width: 60, height: 35, marginHorizontal: 150, marginVertical: 40, borderColor: colors.textTerms, backgroundColor: colors.textTerms}}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.close}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        </View>
</KeyboardAwareScrollView>
    )
}
}

const styles=StyleSheet.create({
  
//     container:{
// height: 40,
// marginHorizontal: 25
//     },
//     back:{
//         width: 35,
//         height: 35
//     },
//     Signup:{
//         marginHorizontal: 130,
//         marginVertical: -30,
//         fontWeight: 'bold',
//         fontSize: 25
//     },
    dp:{
        width: 80,
        height: 80,
        borderRadius: 60,
        marginHorizontal: 130,
        marginVertical: 60
    },
  //   dp1:{
  //     width: 80,
  //     height: 90,
  //     borderRadius: 60,
  //     marginHorizontal: 130,
  //     marginVertical: 60
  // },
    nameBorder:{
       
borderWidth: 1,
width: 290,
height: 44,
backgroundColor: colors.textField,
marginVertical: -30,
marginHorizontal: 30,
borderColor: colors.textBorder,
    },
dobBorder:{
       
        borderWidth: 1,
        width: 290,
        height: 44,
        backgroundColor: colors.textField,
        marginVertical: 50,
        marginHorizontal: 30,
        borderColor: colors.textBorder,
            },
emailBorder:{
       
                borderWidth: 1,
                width: 290,
                height: 44,
                backgroundColor: colors.textField,
                marginVertical: -30,
                marginHorizontal: 30,
                borderColor: colors.textBorder,
                    },
                    
                passwordBorder:{
       
                        borderWidth: 1,
                        width: 290,
                        height: 44,
                        backgroundColor: colors.textField,
                        marginVertical: 50,
                        marginHorizontal: 30,
                        borderColor: colors.textBorder,
                            },  
                            rePasswordBorder:{
       
                                borderWidth: 1,
                                width: 290,
                                height: 44,
                                backgroundColor: colors.textField,
                                marginVertical: -30,
                                marginHorizontal: 30,
                                borderColor: colors.textBorder,
                            },
    rightBack:{
        width: 30,
        height: 30,
       marginHorizontal: 15,
       marginVertical: 14

    },
    register:{
       marginHorizontal: 40,
       marginVertical: 60
    },
    login:{
        marginVertical: 60,
        color: colors.textTerms,
        marginLeft: -35
    },
    arrow:{
        borderWidth: 1,
        borderRadius: 50,
        width: 60,
        height: 60,
       marginVertical: 40,
       marginHorizontal: 20,
        borderColor: colors.textTerms,
        backgroundColor: colors.textTerms
    },
    condition:{
        flexDirection: 'row'
    },
    agree:{
       marginHorizontal: 50,
       
    },
    terms:{
       color: colors.textTerms,
marginHorizontal: 34
    },
    and:{
        marginLeft: -30
    },
    privacy:{
marginHorizontal: 5,
        color: colors.textTerms,
    },
    modal: {
        width: 370,
        height: 300,
        backgroundColor: 'white',
        marginVertical: 450,
      },
      camera: {
        width: 50,
        height: 50,
        marginVertical: 50,
        marginHorizontal: 90,
      },
      gallery: {
      width: 50,
      height: 50,
      marginVertical: 50
     
      },
      close: {
       marginVertical: 4,
       marginHorizontal: 10,
       fontWeight: 'bold',
       color: colors.textField,
      },
    // submitStyle:{
    //     borderWidth: 1,
    //     width: 140,
    //     height: 40,
    //     marginVertical: 50,
    //     marginHorizontal: 90,
    //     borderColor: colors.textTerms,
    //     backgroundColor: colors.textTerms
    // },
    // submit:{
    //     marginHorizontal: 40,
    //     marginVertical: 10,
    //     fontWeight: 'bold',
    //     color: colors.textField
    // }
})