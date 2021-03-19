import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import imagePath from "../../constants/imagePath";
import BtnComponent from '../../Component/BtnCompoment';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            abc: "abc"
        }





    }

    render() {
        const { _loginOnPress } = this.state;
        return (
          


                <View style={Styles.footer}>


                   

                    <View style={Styles.btns}>
                    <BtnComponent
                        btnText={'Login'}
                        btnStyle={Styles.login}
                        btnOnPress={() => this.props.navigation.navigate('login')}
                        btnTextStyle={Styles.loginText}
                    />

                    <BtnComponent
                        btnText={'Sign Up'}
                        btnStyle={Styles.login}
                        btnOnPress={() => this.props.navigation.navigate('signup')}
                        btnTextStyle={Styles.loginText}
                    />
                    </View>
                    <BtnComponent
                    btnText={"Skip for now"}

                    btnOnPress={() =>this.props.navigation.navigate('homePage') }
                    btnTextStyle={Styles.skip}
                    />
                </View>

                

            



                

            
        )
    }


}


const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F51CB3"
    },
    header: {
        flex: 4,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    logoMyntra: {
        borderRadius: 500,
        width: 150,
        height: 150,
        marginTop: 10,
        marginLeft: "25%"
    },
    login: {
        width: 150,
        height: 50,
        marginTop: 60,
        backgroundColor: "#F51CB3",
        borderRadius: 50,
        marginRight: 10,



        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    loginText: {
        paddingLeft: '30%',
        paddingTop: 10,
        fontSize: 20,
        color: "white"

    },
    skip: {
        fontSize: 15,
        color: "#F51CB3",

        marginTop: 20,
        marginLeft: 120

    },
    btns:{
        flexDirection: "row",
    }

    ,
    welcome:{
        fontSize:30,
        marginLeft:35
    }



})