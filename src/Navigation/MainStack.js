import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../Screen';
import navigationString from '../constants/navigationStrings';
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <React.Fragment>
     
      <Stack.Screen name={navigationString.HOMEPAGE} component={HomePage} />
     

    </React.Fragment>
  );
}
