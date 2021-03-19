import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Image,
  ImagePickerIOS,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import navigationStrings from "../../constants/navigationStrings"

import * as ImagePicker from 'react-native-image-picker';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      hasCameraPermission: null,
      image: null,
      resourcePath: imagePath.dp,
    };
  }

  openModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  // galleryImage= async()=>{
  //     let result= await ImagePicker.launchCamera({
  //         allowsEditi
  //     })

  chooseImage = () => {
    const options = {
        title: 'Select Avatar',
        customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};
  
          this.setState({
              resourcePath: source,
          });
        }
      });
  };

  chooseImageFromGallery = () => {

    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        this.setState({
            resourcePath: source,
        });
      }
    });

  };
  OpenOrderTrack=()=>{
    const {navigation}=this.props
    navigation.navigate(navigationStrings.ORDER_TRACK)
}
  render() {
    const {isModalVisible, showImagePicker, resourcePath} = this.state;
    return (
      <View>
        <View>
          <Text style={styles.profile}>Profile</Text>
          <Image source={imagePath.background} style={styles.background} />
          <View
            style={{
              borderWidth: 1,
              width: 100,
              height: 100,
              marginVertical: -35,
              marginHorizontal: 15,
            }}>
            <Image source={resourcePath} style={styles.dp} />
          </View>
        </View>
        <TouchableOpacity onPress={this.openModal}>
          <Text>
            <Image source={imagePath.pencil} style={styles.pencil} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.name}>Ankita</Text>

        <View style={styles.secondPart}></View>
        <Image source={imagePath.order} style={styles.order} />
        <Text style={styles.orders}>Orders</Text>
        <Text style={styles.text1}>Check your order status</Text>
        <View style={{borderWidth: 1, borderColor: '#DCDCDC', marginVertical: 5}}></View>
        <Image source={imagePath.help} style={styles.help} />
        <Text style={styles.helps}>Help Center</Text>
        <Text style={styles.text2}>Help regarding your recent purchases</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DCDCDC',
            marginVertical: -45,
          }}></View>
        <Image source={imagePath.king} style={styles.king} />
        <Text style={styles.kings}>Myntra Insider</Text>
        <Text style={styles.text3}>Perks, Privileges, Pride</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DCDCDC',
            marginVertical: -75,
          }}></View>
        <Image source={imagePath.move} style={styles.move} />
        <Text style={styles.moves}>Myntra Move</Text>
        <Text style={styles.text4}>Get rewarded to stay fit</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#DCDCDC',
            marginVertical: -110,
          }}></View>
          
          <TouchableOpacity onPress={this.OpenOrderTrack}>
            <View style={{borderWidth: 1, width: 250, height: 50, marginHorizontal: 50, borderColor: '#eb3899', borderRadius: 3, backgroundColor: '#eb3899', marginVertical: 114}}>
            <Text style={styles.place}>PLACE ORDER</Text>

            </View>
          </TouchableOpacity>
       
        <Modal visible={isModalVisible} transparent>
          <View style={styles.modal}>
              <Text style={{marginVertical: 10, marginHorizontal: 120, fontWeight: 'bold'}}>SELECT PHOTO</Text>
              <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={this.chooseImage}>
              
              <Text style={{marginHorizontal: 80, height: 90}}>
                
                <Image source={imagePath.camera} style={styles.camera} /></Text>
                <Text style={{marginVertical: -30, marginHorizontal: 79}}>Camera</Text>
              {/* </Text><Text style={{marginHorizontal: 120, marginVertical: -20, color: 'grey'}}>Take a beautiful picture</Text> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.chooseImageFromGallery}>
              <Text style={{marginVertical: 5,marginHorizontal: 15, height: 90}}>
                
                <Image source={imagePath.gallery} style={styles.gallery} /></Text>
                <Text style={{marginVertical: -28, marginHorizontal: 15}}>Gallery</Text>
              {/* </Text><Text style={{marginHorizontal: 100, marginVertical: -28, color: 'grey'}}>Choose an existing photo</Text> */}
            </TouchableOpacity>
              </View>
            

            <View style={{borderWidth: 1, width: 60, height: 35, marginHorizontal: 150, marginVertical: 40, borderColor: '#eb3899', backgroundColor: '#eb3899'}}>
              <TouchableOpacity onPress={this.closeModal}>
                <Text style={styles.close}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    color: 'gray',
    marginVertical: 20,
    marginHorizontal: 10,
    // fontSize: 15,
    fontWeight: 'bold',
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#eb3899',
  },
  container: {
    borderWidth: 2,
    width: 120,
    height: 50,
    marginHorizontal: 110,
    marginVertical: 100,
    backgroundColor: '#eb3899',
    borderColor: '#eb3899',
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
   color: 'white'
  },
  background: {
    width: 400,
    height: 200,
    marginVertical: -10,
    position: 'relative',
  },
  dp: {
    position: 'absolute',
    width: 100,
    height: 100,
  },
  pencil: {
    width: 28,
    height: 30,
  },
  name: {
    marginHorizontal: 130,
    marginVertical: -30,
    fontWeight: 'bold',
    fontSize: 20,
  },
  secondPart: {
    borderWidth: 10,
    marginVertical: 50,
    borderColor: '#DCDCDC',
  },
  order: {
    width: 30,
    height: 32,
    marginHorizontal: 20,
    marginVertical: -30,
  },
  orders: {
    marginHorizontal: 60,
    marginVertical: -5,
    fontWeight: 'bold',
  },
  text1: {
    marginHorizontal: 60,
    marginVertical: 10,
    color: 'grey',
  },
  help: {
    width: 30,
    height: 32,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  helps: {
    marginHorizontal: 60,
    marginVertical: -60,
    fontWeight: 'bold',
  },
  text2: {
    marginVertical: 65,
    marginHorizontal: 60,
    color: 'grey',
  },
  king: {
    width: 25,
    height: 25,
    marginVertical: 60,
    marginHorizontal: 20,
  },

  text3: {
    marginHorizontal: 65,
    marginVertical: 95,
    color: 'grey',
  },
  kings: {
    marginHorizontal: 65,
    marginVertical: -90,
    fontWeight: 'bold',
  },
  move: {
    width: 25,
    height: 25,
    marginVertical: 90,
    marginHorizontal: 20,
  },
  moves: {
    marginHorizontal: 65,
    marginVertical: -120,
    fontWeight: 'bold',
  },
  text4: {
    marginVertical: 125,
    marginHorizontal: 60,
    color: 'grey',
  },
  place:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 50,
    marginVertical: 9

  },
  heart:{
width: 25,
height: 25
  },
  wishlist:{
    width: 25,
    height: 25,
  },
  text5:{
    marginVertical: 130
  }

});
