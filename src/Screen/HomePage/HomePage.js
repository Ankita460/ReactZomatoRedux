import React,{Component} from 'react';

import {View, Text} from 'react-native';

export default class HomePage extends Component {
 constructor(props){
     super(props)
 }



render(){
    return(
<View>
    <Text style={{textAlign: 'center', marginVertical: 50}}>HomePage</Text>
</View>
    )
}
}