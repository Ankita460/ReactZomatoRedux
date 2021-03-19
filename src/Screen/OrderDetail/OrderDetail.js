import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native';
// import { nativeViewProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import imagePath from '../../constants/imagePath';
import LatestDeals from '../LatestDeals/LatestDeals';
import Deals from '../../Component/Deals';

export default class OrderDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            itemCount: 0,
            addToCart:[],
            
        }
        
    }
_addToCart=(selectItem)=>{
    const {navigation}=this.props;
    let {itemCount, addToCart}=this.state

    if(itemCount==0){
        let newCart={...selectItem}
        addToCart={...newCart}
        console.log(addToCart)
        this.setState({addToCart:{...selectItem}})
        this.setState({itemCount: itemCount + 1})
        navigation.navigate("Latest Deals", {itemCount: itemCount, addToCart: addToCart})
    }
}
render() {
    const { selectItem } = this.props.route.params;
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.details}>DETAILS</Text>
                <Image
                    source={imagePath.share}
                    style={styles.share}
                />
                <Image
                    source={imagePath.heart}
                    style={styles.icon}
                />
                <Image
                    source={imagePath.bag}
                    style={styles.icon}
                />

            </View>
            <Image
                source={selectItem.shoe}
                style={styles.photo}
            />


            <Text style={styles.name}>{selectItem.shoeCompany}</Text>
            <Text style={styles.line}>{selectItem.shoeName}</Text>
            <View style={styles.rowDirection}>
                <Text style={styles.price1}>
                    Rs.{selectItem.price1}
                </Text>
                <Text style={styles.price2}>
                    Rs.{selectItem.price2}
                </Text>
                <Text style={styles.offer}>
                    ( {selectItem.offer} )
                    </Text>
            </View>
            <Text style={styles.tax}><Image source={imagePath.eye} style={{width: 20, height: 20}}/>inclusive of all taxes</Text>




            <View style={styles.rowDirection}>
                <TouchableOpacity style={styles.wishlist}>
                <Image
                    source={imagePath.heart}
                    style={styles.iconbtn}
                    />
                    <Text style={styles.wishText}>WISHLIST</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.wishlist , styles.btnColor} onPress={()=>this._addToCart(selectItem)}>
                <Image
                    source={imagePath.bag1}
                    style={styles.iconbtn}/>
                    <Text style={styles.wishText1  }>ADD TO BAG</Text>
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
header: {
    height: 50,
    flexDirection: "row",
    marginTop: 10,



},
details: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "bold"
},
share: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginRight: 20,

},
icon: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 20
},


photo: {
    height: 530,
    width: '100%',


},
name: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5
},

line: {
    fontSize: 15,
    color: "gray",
    marginLeft: 10,
},
rowDirection: {
    flexDirection: 'row',
    marginTop: 5
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
price1: {
    marginLeft: 10,
},
tax: {
    marginLeft: 10,
    color: "#54baa4",
    fontWeight: "bold",
},
wishlist: {
    borderColor: "gray",
    borderWidth: 1,
    marginLeft:10,
    flexDirection:"row"

},
wishText:{
    color:"gray",
    fontWeight:"bold",
    fontSize:15,
    marginTop:5,
    marginBottom:5,
    marginLeft:0,
    marginRight:40
},
iconbtn:{
    width: 15,
    height: 15,
    marginTop:7,
    marginLeft:20,
    marginRight:10,
    marginBottom:5
},
btnColor:{
    backgroundColor:'#F51CB3',
    borderColor: "#F51CB3",
    borderWidth: 1,
    marginLeft:8,
    flexDirection:"row"
},
wishText1:{
    color:"white",
    fontWeight:"bold",
    fontSize:15,
    marginTop:7,
    marginBottom:5,
    marginLeft:10,
    marginRight:30,
    
},



})