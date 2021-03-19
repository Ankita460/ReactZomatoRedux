import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, Image, Linking, Platform, Share} from 'react-native';
import imagePath from '../../constants/imagePath';
import LatestDeals from '../LatestDeals/LatestDeals';
import Deals from '../../Component/Deals';

export default class OrderTrack extends Component{
    constructor(props){
        super(props);

    }
    
    onMap=()=>{
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
const latLng = `${30.7333},${76.7794}`;
const label = 'Custom Label';
const url = Platform.select({
ios: `${scheme}${label}@${latLng}`,
android: `${scheme}${latLng}(${label})`
});


Linking.openURL(url);
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

       openDial=()=>{
        if(Platform.OS==="android"){
        Linking.openURL("tel: 9056188241")
        }
                }
    render(){
    
     
        return(
            <View>
                <Text style={styles.heading}>PLACE ORDER</Text>
                <View>
                <Image source={imagePath.women} style={styles.women}/>
                </View>

                <Text style={styles.name}>Ankita Sandhu</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={{marginHorizontal: 5, color: 'green', marginVertical: 25}}>--------------<Image source={imagePath.tik} style={{width:10, height: 10}}/>Bag</Text>
<Text style={{color: 'green', marginVertical: 25}}>--------------<Image source={imagePath.tik} style={{width:10, height: 10}}/>Address</Text>
<Text style={{color: 'grey', marginVertical: 25}}>--------------<Image source={imagePath.dot} style={{width:10, height: 10}}/>Payment</Text>
                </View>

                 <View style={{borderWidth: 10, borderColor: 'lightgrey', marginVertical: 5,}}></View>
                 <View style={{flexDirection: 'row'}}>
                     <Text style={{marginHorizontal: 10, fontWeight: 'bold'}}>Ankita Sandhu</Text>
                     <View style={{borderWidth: 1, borderRadius: 20, width: 60, marginHorizontal: 170, borderColor: 'green'}}>
                     <Text style={{marginHorizontal: 8, color: 'green'}}>HOME</Text>

                     </View>
                     

                 </View>
                 <Text style={{marginHorizontal: 10, color: '#787878'}}>House No. 420</Text>
                     <Text style={{marginHorizontal: 10, color: '#787878'}}>Sector 28B(Chandigarh)</Text>
                     <Text style={{marginHorizontal: 10, color: '#787878'}}>Chandigarh, Chandigarh 160036</Text>
                     <Text style={{marginHorizontal: 10, marginVertical: 15, fontWeight: 'bold', color: '#787878' }}>Mobile: </Text>
                     <Text style={{fontWeight: 'bold'}}>787656443323</Text>
<View style={{borderWidth: 1, width: 250, height: 40, marginHorizontal: 50, borderRadius: 5 }}>
    <Text style={{marginVertical: 8, marginHorizontal: 25}}>CHANGE OR ADD ADDRESS</Text>
</View>
<View style={{ borderColor: 'white', marginVertical: 1, flexDirection: 'row'}}>
    <TouchableOpacity onPress={this.openDial}>
    <Text style={{marginHorizontal: 30, height: 60, marginVertical: 5}}>
    <Image source={imagePath.dial} style={{width: 40, height: 40, marginHorizontal: 10, marginVertical: 10}}/>
    

    </Text>
  <Text style={{marginVertical: -15, marginHorizontal: 37}}>Call</Text>
    </TouchableOpacity>
   <TouchableOpacity onPress={()=>{
                     Linking.openURL("mailto: ankitasandhu99@gmail.com")
                 }}>
       <Text style={{marginHorizontal: 10,  height: 60, marginVertical: 5}}>
       <Image source={imagePath.email} style={{width: 45, height: 40, marginHorizontal: 30}}/>

       </Text>
       <Text style={{marginVertical: -15, marginHorizontal: 15}}>Email</Text>

   </TouchableOpacity>
   <TouchableOpacity onPress={this.onShare}>
       <Text style={{marginHorizontal: 20, height: 60, marginVertical: 5}}>
       <Image source={imagePath.share1} style={{width: 37, height: 38, marginHorizontal: 30, marginVertical: 10}}/>

           </Text>
           <Text style={{marginVertical: -15, marginHorizontal: 20}}>Share</Text>

   </TouchableOpacity>
   <TouchableOpacity onPress={this.onMap}>
       <Text style={{marginHorizontal: 20, height: 60, marginVertical: 5}}>
       <Image source={imagePath.map} style={{width: 40, height: 38, marginHorizontal: 30, marginVertical: 10}}/>

       </Text>
       <Text style={{marginVertical: -15, marginHorizontal: 20}}>Location</Text>

   </TouchableOpacity>
</View>
<View style={{backgroundColor: '#E0E0E0', height: 40, marginVertical: 25}}>
<Text style={{ marginHorizontal: 20, marginVertical: 10, color: 'black', fontWeight: 'bold'}}>DELIVERY ESTIMATES</Text>
<View style={{flexDirection: 'row'}}>
<Image source={imagePath.shoe5} style={{width: 50, height: 60, marginVertical: 10, marginHorizontal: 25}}/>
<Text style={{marginVertical: 20, marginHorizontal: -15}}>Estimated delivery by</Text>
<Text style={{marginVertical: 20, fontWeight: 'bold', marginHorizontal: 18, position: 'relative'}}>10 Mar 2021</Text>
</View>
<Text style={{position: 'absolute', marginVertical: 75, marginHorizontal: 85, color: 'green'}}>Eligible for Try & Buy</Text>
</View>

<View style={{borderWidth: 1, marginVertical: 70, height: 40, marginHorizontal: 15, borderColor: '#eb3899', backgroundColor:'#eb3899'}}>
<Text style={{fontWeight: 'bold', color: 'white',textAlign:'center', marginVertical: 5, fontSize: 20}}>CONTINUE</Text>
</View>
{/* <TouchableOpacity onPress={this.openDial}>
<Text style={{marginHorizontal: -60}}>                     <Image source={imagePath.dial} style={styles.call}/>

    Call: 9056188241  </Text>

</TouchableOpacity> */}
{/* <View style={{borderWidth: 1, borderColor: 'lightgrey', marginVertical: 10,}}></View>

                 <TouchableOpacity onPress={()=>{
                     Linking.openURL("mailto: ankitasandhu99@gmail.com")
                 }}>

                 <Text style={{marginVertical: -5, marginHorizontal: 10}}> <Image source={imagePath.email} style={styles.email}/>
                     Mail: ankitasandhu99@gmail.com</Text>

                 </TouchableOpacity>
                 <View style={{borderWidth: 1, borderColor: 'lightgrey', marginVertical: 15,}}></View>
                 <TouchableOpacity onPress={this.onShare}>
                     <Text style={{marginHorizontal: 20}}><Image source={imagePath.share1} style={{width: 20, height: 20, }}/>Share</Text>
                 </TouchableOpacity>
                 <View style={{borderWidth: 1, borderColor: 'lightgrey', marginVertical: 15,}}></View>
<TouchableOpacity onPress={this.onMap}>
<Text style={{marginHorizontal: 40, marginLeft: 15}}><Image source={imagePath.map} style={styles.map}/>
Map</Text>
</TouchableOpacity>

<View style={{borderWidth: 1, borderColor: 'lightgrey', marginVertical: 25,}}></View>
                */}
            </View> 
        )
    }

}
  
const styles=StyleSheet.create({
heading:{
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20
},
container:{
    backgroundColor: 'lightgrey',
    height: 150,
    position: 'relative',
    
},
call:{
width: 25,
height: 25,
marginHorizontal: -80
},
email:{
width: 25,
height: 25
},
map:{
    width: 25,
    height: 25,
    marginHorizontal: 10
    },
women:{
    width: 130,
    height: 130,
    borderRadius: 80,
    marginHorizontal: 120
},
name:{
position: 'absolute',
marginVertical: 200,
marginHorizontal: 130,
fontWeight: 'bold'

}
})


