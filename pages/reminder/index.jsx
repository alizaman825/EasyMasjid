import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import InfoBox from '../../assets/infobox.png'
import Toggle from './switch'


const styles = StyleSheet.create({
    remindertext:{
        fontWeight:'500',
        fontSize:20,
        alignSelf:'center',
        marginTop:55,
    }



})

function Reminder() {

    return (
       <View>
           <View style={{flexDirection:'column'}}>
          
           <Text style={styles.remindertext}>
               Reminder
           </Text>
           </View>
           <View style={{flexDirection:'row',width:'90%',marginTop:40}}>
           <Text style={{width:"80%",fontSize:18,fontWeight:'400',marginLeft:20,marginTop:10}}>
           Jamaat Reminder Alerts 
           </Text>
        <Toggle/>
           </View>
           <View>
           <Image
           source={InfoBox}
           style={{alignSelf:'center',}}

           />
           </View>      

       </View>
    )
}

export default Reminder
