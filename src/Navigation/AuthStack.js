import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signup, Login, OrderDetail, FinalOrder, OrderTrack} from '../Screen';
import navigationString from '../constants/navigationStrings';
import HomePage from '../Screen/HomePage/HomePage';
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <React.Fragment>
     
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.SIGNUP} component={Signup} />
      {/* <Stack.Screen  name={navigationString.MAIN_PAGE} component={TabRoutes} /> */}
      <Stack.Screen name={navigationString.ORDER_DETAIL} component={OrderDetail} />
      <Stack.Screen  name={navigationString.FINAL_ORDER} component={FinalOrder} />
      <Stack.Screen name={navigationString.ORDER_TRACK} component={OrderTrack} />

    </React.Fragment>
  );
}
