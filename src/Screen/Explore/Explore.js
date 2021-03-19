import React, { Component } from "react"
import { View, Text, Image, StyleSheet, RecyclerViewBackedScrollViewBase } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BtnComponent from "../../Component/BtnCompoment"
import imagePath from "../../constants/imagePath"


export default class Explore extends Component {
    render() {
        return (

            <View>

                <Text style={styles.heading}>Explore on Myntra</Text>
                <View style={{borderBottomWidth: 2.5, borderColor: 'lightgray', marginTop: 1}}>

</View>
            {/* <Image source={imagePath.explore} style={{height: 900, width: 440, }}/>     */}
<View style={styles.details}>
<Image source={imagePath.myntraMall} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Myntra Mall</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.king} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Myntra Insider</Text>
<Text style={styles.enroll}>ENROLL NOW</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.gift} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Gift Cards</Text>
</View>
<View style={{borderBottomWidth: 2.5, borderColor: 'lightgray', marginTop: 40}}>

</View>
<View style={styles.details}>
<Image source={imagePath.earn} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Play & Earn</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.move} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Myntra Move</Text>
</View>
<View style={{borderBottomWidth: 2.5, borderColor: 'lightgray', marginTop: 30}}>

</View>
<View style={styles.details}>
<Image source={imagePath.refer} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Refer & Earn</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.scan} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Scan for Coupon</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.star} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Myntra Fashion Superstar</Text>
</View>
<View style={styles.details}>
<Image source={imagePath.myntraClass} style={styles.myntraMall}/>

<Text style={styles.myntraMallDetail}>Myntra Masterclass</Text>
</View>
                </View>

            

        )
    }
}

const styles=StyleSheet.create({
    heading: {
        color: 'gray',
        marginHorizontal: 30,
        marginVertical: 10,
        fontSize: 20,
        marginTop: 10,
       
        
    },
    details:{
flexDirection:'row'
    },
    myntraMall:{
        width: 25,
        height: 20,
        marginHorizontal: 30,
        marginTop: 30
    },
    myntraMallDetail:
    {
        fontSize: 20,
        color: 'black',
        marginTop: 30,
        // borderBottomWidth: 2.5, 
        // borderColor: 'lightgray'

    },
    enroll:{
        color: 'red',
        marginTop: 35,
        marginHorizontal: 50,
        fontWeight: 'bold'
    }
})