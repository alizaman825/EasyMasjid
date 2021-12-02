import  React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Visits from '../visits';
import themeContext from '../../config/themeContext';
const classes = StyleSheet.create({
navigation:{
  marginTop:10,
}


})

const Top = createMaterialTopTabNavigator();

export default function Navigation() {
  const theme = useContext(themeContext)
  return (
    
      <Top.Navigator tabBarOptions={{
        activeTintColor:theme.color,
        indicatorStyle:{backgroundColor:"#05B678",height:5,borderTopLeftRadius:5,borderTopRightRadius:5},
        labelStyle:{fontWeight:'bold',}

      }}style={classes.navigation}>
        <Top.Screen name="Up Coming Visits" component={Visits}/>
        <Top.Screen name="Old Visits" component={Visits} />
      </Top.Navigator>
    
  );
}
