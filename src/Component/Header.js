import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import imagePath from '../constants/imagePath';
import signup from '../Screen/Signup/Signup';
function Header() {
    return(
<View>
            <TouchableOpacity onPress={() => navigation.goBack()} >
<View style={styles.container}>
    <Image source={imagePath.back} style={styles.back}/>
    </View>
            </TouchableOpacity>
            <Text style={styles.Signup}>Sign Up</Text>
            </View>
    )
    
}

const styles=StyleSheet.create({
    container:{
        height: 40,
        marginHorizontal: 25
            },
            back:{
                width: 35,
                height: 35
            },
            Signup:{
                marginHorizontal: 130,
                marginVertical: -35,
                fontWeight: 'bold',
                fontSize: 25
            },
})

export default Header;