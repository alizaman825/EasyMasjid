import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Activities from '../activities';

const classes = StyleSheet.create({
navigation:{
  marginTop:10,
  width:'98%',
  alignSelf:'center',
}


})

const Top = createMaterialTopTabNavigator();

export default function NavigationActivities() {
  return (
   
      <Top.Navigator tabBarOptions={{
        activeTintColor:'black',
        indicatorStyle:{backgroundColor:"#05B678",height:5,borderTopLeftRadius:5,borderTopRightRadius:5,},

      }}style={classes.navigation}>
        <Top.Screen name="Attend Jamat" component={Activities}/>
        <Top.Screen name="Donation" component={Activities} />
        <Top.Screen name="Miscellaneous" component={Activities} />
      </Top.Navigator>
  
  );
}
