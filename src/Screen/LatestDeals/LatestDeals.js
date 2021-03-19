
import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList,Linking,Share,Platform} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import BtnComponent from "../../Component/BtnCompoment"
import Order from "../../Component/Order"
import navigationString from "../../constants/navigationStrings"
import imagePath from "../../constants/imagePath"
import OrderDetail from "../OrderDetail/OrderDetail"


export default class LatestDeals extends Component{
 constructor(props){
     super(props);
     this.state={
        clicks: 0,
        addToCart: [],
        orderArray:[
            {
                id: 0,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe1,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                  button: 'Add to Cart',  
                  quantity: 1
                
            },
            { id: 1,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe8,
                button: 'Add to Cart',
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                quantity: 1
        
            },
            {
                id: 2,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe2,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
                quantity: 1
            },{
                id: 3,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe3,
                price1: '1,999',
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
                quantity: 1

            },{
                id: 4,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe4,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
                quantity: 1
            },{
                id: 5,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe5,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                
                button: 'Add to Cart',
                quantity: 1
                
            },{
                id: 6,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe6,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                
                button: 'Add to Cart',
                quantity: 1
            },{
                id: 7,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe7,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                button: 'Add to Cart',
                quantity: 1
                
            },
            {
                id: 8,
                shoeCompany: 'Reebok',
                shoeName: 'Men Traveller LP Running',
                shoe: imagePath.shoe1,
                price1: 1999,
                price2: '2,999',
                offer: '50% OFF',
                  button: 'Add to Cart',  
                  quantity: 1
                
            },
            
              
               
            
        ]       
     }
 }

 OpenFinalCart=(id)=>{
     const {navigation}=this.props
     const {orderArray, addToCart, clicks}=this.state
     let newArray=[...orderArray]
     navigation.navigate(navigationString.FINAL_ORDER, {addToCart: addToCart, clicks: clicks})
 }

 _onNextScreen=(id)=>{
   
    const{navigation}=this.props
    const {orderArray}=this.state
    let newArray=[...orderArray]
    navigation.navigate(navigationString.ORDER_DETAIL, {selectItem: newArray[id]});
}
IncrementItem = (id) => {

    let {orderArray, clicks, addToCart}=this.state;
    let newArray=[...orderArray];
    let index=newArray.findIndex((item)=>item.id===id);
    
    if(!addToCart.includes(newArray[index])){
        let finalArray=[...addToCart, newArray[index]];
        // alert(JSON.stringify(finalArray))
        this.setState({
            clicks: clicks + 1,
            addToCart: finalArray
        });
    }
    // alert()
    // this.setState({ clicks: this.state.clicks + 1 });
  };

componentDidMount(){
    const{navigation}=this.props;
    this.focusListener=this.props.navigation.addListener('focus', ()=>{
if(this.props.route.params){
    let test=this.props.route.params.addToCart
    this.IncrementItem(test.id)
    this.props.route.params=null
}

    })
}
   
  render(){
      const {navigation}=this.props;
      const {orderArray}=this.state;
      
      return(
          <View>
              <View style={styles.rowDirection}>
                                     <Text style={styles.footware} >FOOTWEAR</Text>

                  <Image style={styles.icon1}
                        source={imagePath.search}
                    />
                    <Image style={styles.icon1}
                        source={imagePath.heart}
                    />
                    <TouchableOpacity onPress={this.OpenFinalCart}>
                        <View style={styles.container}>
                        <Text style={styles.cart}>{this.state.clicks}</Text>

                        </View>
                    <Image style={styles.icon}
                        source={imagePath.bag}
                    />
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.items}>xxxx Items</Text>

               <Image style={styles.footwareImg}
                   source={imagePath.footware}
                />
  <View>
<FlatList
    data={orderArray}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>
    <Order data={item} IncrementItem={this.IncrementItem} _onNextScreen={this._onNextScreen} />}
    numColumns={2}
    keyExtractor={(item)=> item.id}
    ItemSeparatorComponent={()=><View style={{marginBottom: 10}}/>}
  

/>
  </View>   
          </View>
      )
  }
     
}

                


const styles = StyleSheet.create({
    rowDirection: {
        flexDirection: "row",
        marginTop:10

    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginTop: -1
    },
    icon1: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginTop: 10
    },
    footware: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginRight: 100

    },
    items: {
        marginTop: -10,
        marginLeft: 45,
        color: "gray"

    },
    footwareImg: {
        width: 350,
        height: 50,
        marginTop: 20,
        marginLeft: 5
  },
    shoes: {         
        width: 170,
         height: 200,
       marginRight: 8,       
        marginLeft: 5
    },
    cart:{
       marginLeft: 5,
       color: 'white'
    },
    container:{
        marginTop: -10,
        marginLeft: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#eb3899',
        backgroundColor: '#eb3899'
    }

})


