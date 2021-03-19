import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
    TouchableOpacity,
    Alert,
    ScrollView,
    Button,
} from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
// import {Dimensions } from "react-native";




function Order(props) {
    // const{screenWidth} = Dimensions.get('window').width;
    const { data, Test, item, selectfun, deselectFun, _onNextScreen, IncrementItem } = props;
    return (
        <View>
            <TouchableOpacity onPress={()=>_onNextScreen(data.id)} >
              
                <View style={styles.card}>
                    <Image
                        source={data.shoe}
                        style={styles.photo}
                    />
                    <View style={styles.rowDirection}>
                        <Text style={styles.name}>{data.shoeCompany}</Text>
                        <Image
                            source={imagePath.heart}
                            style={styles.heart}
                        />
                    </View>
                    <Text style={styles.line}>{data.shoeName}</Text>
                    <View style={styles.rowDirection}>
                        <Text style={styles.price1}>
                            Rs.{data.price1}
                        </Text>
                        <Text style={styles.price2}>
                            Rs.{data.price2}
                        </Text>
                        <Text style={styles.offer}>
                            {data.offer}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
<View style={styles.container}>
  <TouchableOpacity onPress={()=>IncrementItem(data.id)}>
    <Text style={styles.buttonText}>{data.button}</Text>
  
  </TouchableOpacity>
</View>
        </View>


    )

} export default Order;
const styles = StyleSheet.create({
    card: {
        marginLeft: 5
    },
    photo: {
        width: 180,
        height: 200
    },
    heart: {
        width: 15,
        height: 15,
        marginLeft: "auto",
        marginRight: 15,
        marginTop: 5
    },
    name: {
        fontWeight: 'bold',

    },
    line: {
        fontSize: 15,
        color: "gray"
    },
    rowDirection: {
        flexDirection: 'row'
    },
    price2: {
        fontSize: 12,
        marginTop: 2,
        textDecorationLine: 'line-through',
        color: "gray",
        marginRight: 2,
        marginLeft: 2
    },
    offer: {
        color: 'red'
    },
    container:{
      width: 100,
      height: 30,
      borderWidth: 5,
      borderRadius: 4,
      borderColor: '#eb3899',
      backgroundColor: '#eb3899',
      marginLeft: 30,
      marginTop: 10
    },
    buttonText:{
     color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      fontWeight: 'bold'
    }

})














// import React, {Component} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
// import imagePath from '../Images/imagePath';
// import {LatestDeals} from '../Screen';
// import OrderDetail from '../Screen/OrderDetail/OrderDetail';
// import Deals from '../Component/Deals';
// export default class Order extends Component {
  
      
//   render() {
    
// const {navigation}=this.props
// let {data}= this.props

        
    
// return(
//   <View>
// <FlatList
//     data={this.data}
//     renderItem={({item})=> <Deals data={item} _onNextScreen={this._onNextScreen}/>}
//     numColumns={2}
//     // keyExtractor={(item)=> item.id}
//     ItemSeparatorComponent={()=><View style={{marginBottom: 10}}/>}
  

// />
//   </View>

// )
// }
// } 

