import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForgotPass from '../../forgotpass/forgotpass';
import { Label } from 'native-base';
import UpcomingBian from '../upcomingByan';
import OldBian from '../upcomingByan/oldbian';
import MajlisayZikar from '../upcomingByan/majlisayzikar';
import themeContext from '../../config/themeContext';

const classes = StyleSheet.create({
navigation:{
  marginTop:20,
}


})

const Top = createMaterialTopTabNavigator();

export default function NavigationBar() {
  const theme = useContext(themeContext)
  return (
    
      <Top.Navigator tabBarOptions={{
        activeTintColor:theme.color,
        indicatorStyle:{backgroundColor:"#05B678",height:5,borderTopLeftRadius:5,borderTopRightRadius:5},
        labelStyle:{fontWeight:'bold',}

      }}style={classes.navigation}>
        <Top.Screen name="Up Coming Bian" component={UpcomingBian}/>
        <Top.Screen name="Old Bian" component={OldBian} />
        <Top.Screen name="Majlisay Zikar" component={MajlisayZikar}/>
      </Top.Navigator>
    
  );
}
