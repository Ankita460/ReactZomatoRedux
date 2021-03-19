import React from 'react';
import imagePath from '../constants/imagePath';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

function Deals(props){
    const { data } = props;

    return(
        <View>
        <View style={{flexDirection:'row'}}>
     <TouchableOpacity>
     <Image source={data.back} style={styles.back}  onPress={() => props.navigation.navigate('Latest Deals')}/>

     </TouchableOpacity>
           <Image source={data.share} style={styles.share}/>

           <Image source={data.heart} style={styles.heart}/>

<Image source={data.bag} style={styles.bag}/>       
 </View>
        <Image source={data.shoe1} style={{width: 350, height: 550}}/>
        <View style={{flexDirection: 'row'}}>
<Text style={{marginHorizontal: 10, marginVertical: 5}}>Reebok</Text>
<Text style={{color: 'gray', marginHorizontal: 1, marginVertical: 5}}>LLB Men Travellor Shoe</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginHorizontal: 10, marginVertical: -5}}>Rs. 1,999</Text>
        <Text style={{textDecorationLine: 'line-through', color: 'gray', marginVertical: -5}}>Rs. 2,999</Text>
        <Text style={{color: 'red', marginVertical: -5}}>(50% OFF)</Text>

        </View>
        
            <Text style={{color: 'green', marginHorizontal: 10, marginVertical: 3}}>inclusive of all taxes</Text>
        <View style={{flexDirection: 'row'}}>
            <Image source={imagePath.eye} style={{width: 20, height: 20, marginHorizontal: 10}}/>
            <Text style={{fontWeight: 'bold'}}>1241</Text>
            <Text style={{color: 'gray', marginHorizontal: 5}}>viewing now</Text>
        </View>
        <View>
            <TouchableOpacity onPress={()=>this._addToCart(selectItem)}>
                <View style={{flexDirection: 'row', borderWidth: 2, width: 320, borderColor: '#eb3899', backgroundColor: '#eb3899', height: 40, marginHorizontal: 15, marginVertical: 10}}>
                    <Image source={imagePath.cart1} style={{width: 20, height: 20, marginLeft: 90, marginVertical: 10}}/>
                    <Text style={{marginVertical: 10, marginHorizontal: 5, color: 'white', fontWeight: 'bold'}}>ADD TO CART</Text>
                </View>
               
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles=StyleSheet.create({
    heading:{
        color: 'gray',
        marginVertical: 10,

    },
    back:{
        width: 30,
        height: 30,
        marginHorizontal: 10,
        marginVertical: 10
    },
    share:{
        width: 20,
        height: 20,
        marginHorizontal: 170,
        marginVertical: 15
    },
 heart:{
     width: 20,
     height: 20,
   marginVertical: 15,
   marginLeft: -150

 },
 bag:{
    width: 20,
    height: 20,
  marginVertical: 15,
  marginLeft: 20 
 }
})