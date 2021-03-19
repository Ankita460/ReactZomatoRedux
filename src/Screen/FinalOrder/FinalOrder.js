import React, { Component } from 'react';
import { Text, View, FlatList, Image ,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class FinalCart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      total:0

    }
  }


  countAdd=(index)=>{
    const { clicks, addToCart } = this.props.route.params;
    const{count ,total} =this.state;
    let newArray =[...addToCart]
    newArray[index].quantity+=1

    

    let check=newArray.length
  
    let totalHere=0
    // alert(JSON.stringify(newArray))
     
    for(let i=0;i<check;i++)
    {

      
      totalHere += newArray[i].price1*newArray[i].quantity
      
    }


    
    // alert(addTocartITem[index].quantity)
    this.setState({
        addToCart:newArray,
        total:totalHere
    
    })
  }
  countSub=(index)=>{
    const { clicks, addToCart } = this.props.route.params;
    const{count ,total} =this.state;
    let newArray =[...addToCart]




    if(newArray[index].quantity>1){
    newArray[index].quantity-=1



    let check=newArray.length
  
    let totalHere=0
    // alert(JSON.stringify(newArray))
     
    for(let i=0;i<check;i++)
    {

      
      totalHere += newArray[i].price1*newArray[i].quantity
      
    }

    // alert(addTocartITem[index].quantity)
    this.setState({
        addToCart:newArray,
        total:totalHere
    
    })
  }
  }


  componentDidMount(){

    const {clicks , addToCart  } = this.props.route.params;
    const{total} = this.state;

    let newArray =[...addToCart]
    let check=newArray.length
  
    let totalHere=0
    // alert(JSON.stringify(newArray))
     
    for(let i=0;i<check;i++)
    {

      
      totalHere += newArray[i].price1*newArray[i].quantity
      
    }


    this.setState({
      addToCart:newArray,
      total:totalHere
    })
 
    
  
  }

  _renderItem = ({item ,index}) => {
    const { clicks, addToCart } = this.props.route.params;
    const{count , countAdd , countSub} = this.state;
    return(
    <View>
     

      <View style={styles.rowDirection}>
      <Image 
      source={item.shoe}
      style={styles.photo}/>
      <View style={styles.colDirection}>
      <Text style={styles.name}>{item.shoeCompany}</Text>
      <Text style={styles.line}>{item.shoeName}</Text>
      <Text style={styles.size}>Size:8</Text>
      <Text style={styles.line}> Rs. {item.price1}</Text>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.price2}> {item.price2}</Text>
      <Text style={styles.offer}>  ({item.offer})</Text>
      </View>
      


      </View>
      <View style={styles.newView}>
      <TouchableOpacity onPress={()=>this.countSub(index)}>
      <Text style={styles.sub}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{item.quantity}</Text>
      <TouchableOpacity onPress={()=>this.countAdd(index)}>
      <Text style={styles.add}>+</Text>
      </TouchableOpacity>
      </View> 
      </View>
      {/* <View style={{borderWidth: 1, borderColor: 'lightgrey'}}></View> */}
    </View>
    )
  }




  render() {
    const { total} = this.state;
    const { clicks, addToCart } = this.props.route.params;
    return (

      <View>

<View style={{flexDirection: 'row'}}>
<Text style={styles.headerText}>SHOPPING BAG</Text>
<View style={{borderWidth: 1, width: 90, height: 30, marginHorizontal: 90, marginVertical: 10}}>
    <Text style={styles.btn}>WISHLIST</Text>
</View>
</View>
<View style={{backgroundColor: 'lightgrey'}}>
        <Text style={styles.total}>ITEM SELECTED Rs. {total}</Text>

        </View>
<View style={styles.headerShadow}>


  
</View>


        <FlatList
          data={addToCart}
          showsVerticalScrollIndicator={false}
          // numColumns={2}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={(item,index) => this._renderItem(item ,index)}
        />


        {/* <Text>TOTAL {total}</Text> */}
       
      </View>




    )
  }
}



const styles = StyleSheet.create({

  headerText:{
    fontSize:20,
    marginTop:15,
    marginLeft:20,
    marginBottom:10,
    
  },
  headerShadow:{
    height:12.5,
    backgroundColor:"gray",
    opacity:0.5
  },
  photo:{
    width:150,
    height:200
  },
  rowDirection:{
    flexDirection:'row',
    // borderColor:'lightgrey',
    // borderWidth:1,
    marginRight:3,
    marginLeft:3,
    marginTop:10
  },
  name:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  colDirection:{
    flexDirection:"column",
    marginLeft:20
  },
  add:{ 
    fontSize:20,
    marginRight:5,
    marginTop:20
  },
  count:{
    fontSize:20,
    marginRight:5,
    marginTop:20
  },
  sub:{
    fontSize:30,
    marginRight:8,
    marginTop:12,
    
  },
  line:{
    marginTop:10,
    fontSize:15
  },
  newView:{
    marginLeft:-40,
    flexDirection:'row'
  },
  btn:{
      marginVertical: 3,
      marginHorizontal: 10,
      fontWeight: 'bold',
      color: 'blue'
  },
  total: {
     marginHorizontal: 20,
     marginVertical: 10,
     fontWeight: 'bold' 
  },
  size:{
    backgroundColor: 'lightgrey', 
    width: 40,
    marginTop:10,
    fontSize:15
  },
  price2:{
    textDecorationLine: 'line-through',
    color: 'grey'
  },
  offer:{
    color: 'red'
  }





})