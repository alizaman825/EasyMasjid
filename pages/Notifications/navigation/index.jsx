import  React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Notifications from '../YourNotifications';
import themeContext from '../../config/themeContext';
const classes = StyleSheet.create({
navigation:{
  marginTop:10,
  width:'95%',
  alignSelf:'center',
}


})

const Top = createMaterialTopTabNavigator();

export default function NavigationNotifications() {
  const theme = useContext(themeContext)
  return (
    
      <Top.Navigator tabBarOptions={{
        activeTintColor:theme.color,
        indicatorStyle:{backgroundColor:"#05B678",height:5,borderTopLeftRadius:10,borderTopRightRadius:10,},

      }}style={classes.navigation}>
        <Top.Screen name="Recent" component={Notifications}/>
        <Top.Screen name="All" component={Notifications} />
      </Top.Navigator>
   
  );
}
