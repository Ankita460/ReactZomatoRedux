
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Modal, ScrollView } from 'react-native'

import TopHeader from '../../Component/TopHeader'
import imagePath from '../../constants/imagePath';


export default class HomePage extends Component {
  constructor(props) {
    super(props)
    

 
   }
  render() {
    return (

      <View>
        <TopHeader  />


        

 
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <Image
            source={imagePath.dress}
            style={styles.imgScroll}
          />
          <View><Text style={{width: 40, height: 90, marginTop: 90, marginLeft: -70}}></Text></View>
          <Image
            source={imagePath.sportsShoes}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.trackpant}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.tshirt}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.jeans}
            style={styles.imgScroll}
          />

          <Image
            source={imagePath.casualShoes}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.sportsShoes}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.handbag}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.tshirt}
            style={styles.imgScroll}
          />
          <Image
            source={imagePath.jeans}
            style={styles.imgScroll}
          />





        </ScrollView>
        
        <ScrollView>
          <Image
            source={imagePath.sale}
            style={styles.sale}
          />



<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <Image source={imagePath.bob}
   style={styles.bank}
   />
<Image source={imagePath.kotak}
   style={styles.bank}
   /><Image source={imagePath.sc}
   style={styles.bank}
   />
</ScrollView>

         


          <Image
            source={imagePath.flat}
            style={styles.flat}
          />

          <Image
            source={imagePath.crazy}
            style={styles.crazyDeal}
          />


      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Image
              source={imagePath.crazy1}
              style={styles.crazy}
            />
            <Image
              source={imagePath.crazy2}
              style={styles.crazy}
            />
            <Image
              source={imagePath.crazy3}
              style={styles.crazy}
            />
          </ScrollView>  

          <Image
            source={imagePath.budget}
            style={styles.budget}
          />
          <Image
            source={imagePath.budget2}
            style={styles.budget2}
          />







        
</ScrollView>
 
      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {

    height: "100%",

  },
  modalTop: {
    width: '90%',
    height: '100%'

  },
  imgScroll: {
    marginTop: 20,
    width: 90,
    height: 100,



  },
  sale: {
    width: 360,
    height: 300,
    marginTop: 10,
    resizeMode: 'contain'
  },
  bank: {
    width: 500, 
    height: 25, 
    marginTop: 20, 
    marginLeft: -70,
    resizeMode: 'contain',

  },
  flat: {
    width: 355,
    height: 650,
    resizeMode: 'contain',
    marginTop: -250
  },
  crazyDeal: {
    width: 310,
    height: 200,
    resizeMode: 'contain',
    marginTop: -300,
    marginLeft: 15
  },
  crazy: {
    width: 150,
    height: 800,
    resizeMode: 'contain',
    marginRight: 35,
marginTop: -320


  },
  budget:{
    width:350,
    height:500,
    resizeMode: 'contain',
    marginTop: -380
  },
  budget2:{
    width:350,
    height:500,
    resizeMode: 'contain',
    marginTop: -230,
    marginBottom:50
  }


});
