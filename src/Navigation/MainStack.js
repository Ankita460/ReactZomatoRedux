import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomePage} from '../Screen';
import navigationString from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <React.Fragment>
     
      {/* <Stack.Screen name={navigationString.HOMEPAGE} component={HomePage} /> */}
      <Stack.Screen
      name={navigationString.TAB_ROUTES}
      
      component={TabRoutes}
    />

    </React.Fragment>
  );
}
