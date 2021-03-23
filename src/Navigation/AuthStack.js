import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signup, Login} from '../Screen';
import navigationString from '../constants/navigationStrings';
import HomePage from '../Screen/HomePage/HomePage';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <React.Fragment>
     
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.SIGNUP} component={Signup} />

    </React.Fragment>
  );
}
