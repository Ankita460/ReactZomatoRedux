import React, {Component} from "react"
import {Text, View} from "react-native"
import Routes from "../../Navigation/MainStack"
import TabRoutes from "../../Navigation/TabRoutes"
export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            abc: "abc"
        }
    }

    render(){
        return(
            
            <>
            {/* <Routes /> */}
           
            <TabRoutes/>
            
            </>
            
        )
    }

} 