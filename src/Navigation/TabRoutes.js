import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals} from "../Screen/index"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Explore from '../Screen/Explore/Explore';


const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor:'#eb3899',
      inactiveTintColor:"gray",
      marginBottom: 4,

      tabStyle: {
        paddingVertical: 5
    }
    }}>
      <Tab.Screen name="Home"  component={HomePage}  

      options={{
        // tabBarLabel: "Browse",
       
        // tabBarIcon: ({ color, focused }) => (
        //   <Icon name="home" color={focused?'#eb3899':'gray'} size={26} />
        // ),
        
      }}
      />
      <Tab.Screen name="Latest Deals" component={LatestDeals} 
    //   options={{
        // tabBarLabel: "Browse",
        // tabBarIcon: ({ color,focused }) => (
        //   <Icon name="collage" color={focused?'#eb3899':'gray'} size={26} />
        // ),
    //   }}
      />
      <Tab.Screen name="Cart" component={Cart} 
      options={{
        // tabBarLabel: "Browse",
        // tabBarIcon: ({ color, focused }) => (
        //   <Icon name="cart" color={focused?'#eb3899':'gray'} size={26} />
        // ),
      }}
      />
      
      <Tab.Screen name="Explore" component={Explore}
      options={{
        // tabBarLabel: "Browse",
        // tabBarIcon: ({ color, focused }) => (
        //   <Icon name="cog-outline" color={focused?'#eb3899':'gray'} size={26} />
        // ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        // tabBarLabel: "Browse",
        // tabBarIcon: ({ color, focused }) => (
        //   <Icon name="account-supervisor" color={focused?'#eb3899':'gray'} size={26} />
        // ),
      }}
      
      />
    </Tab.Navigator>
  );
}


export default TabRoutes;