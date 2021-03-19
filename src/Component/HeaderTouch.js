import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';



function HeaderTouch({ img, pressFun, styles })
{

    return (

        <TouchableOpacity>

            <Image
                source={img}
                style={styles}
            />

        </TouchableOpacity>

    )

}
export default HeaderTouch;