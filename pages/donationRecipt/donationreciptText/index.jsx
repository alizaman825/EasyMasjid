import React, { useContext } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import themeContext from '../../config/themeContext'
const styles = StyleSheet.create({
   
})

function ReciptText() {
    const theme = useContext(themeContext)
    return (
        <View style={{width:'90%',flexDirection:'row',alignSelf:'center',height:'80%'}}>
            <View style={{justifyContent:'space-between', marginTop:20}}>
            <Text style={{color:theme.color}}>
            Transferred Amount:
            </Text>
            <Text style={{color:theme.color}}>
            Sender Name:
            </Text>
            <Text style={{color:theme.color}}>
            Receiver Masjid:
            </Text>
            <Text style={{color:theme.color}}>
            Transaction Date:
            </Text>
            <Text style={{color:theme.color}}>
            Transaction Time:
            </Text>
            <Text style={{color:theme.color}}>
            Transaction ID:         
             </Text>
            </View>
            <View style={{justifyContent:'space-between',marginTop:20,marginLeft:15}}>
                <Text style={{color:theme.color}} >
                60,000

                </Text>
                <Text style={{color:theme.color}}>
                Qaisar Butt

                </Text>
                <Text style={{color:theme.color}}>
                Bilal Masjid

                </Text>
                <Text style={{color:theme.color}}>
                26-02-2021
                </Text>
                <Text style={{color:theme.color}}>
                3:25 pm
                </Text>
                <Text style={{color:theme.color}}>
                    1
                </Text>
            </View>
        </View>
    )
}

export default ReciptText
