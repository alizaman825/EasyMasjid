
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import NavigationNotifications from './navigation'
import themeContext from '../config/themeContext'


const styles = StyleSheet.create({
    donatetext:{
        
    },
  
    
})


function AllNotifications() {
    const theme = useContext(themeContext)
    return (
        <View>
            <ScrollView>
        
            <Text style={{alignSelf:'center',
        marginTop:55,
        fontSize:20,
        fontWeight:'400',
        color:theme.color
        }}>
           Notifications
            </Text>
            <NavigationNotifications/>
            </ScrollView>
        </View>
    )
}

export default AllNotifications
