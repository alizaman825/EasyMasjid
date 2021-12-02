import { CheckBox, Radio } from 'native-base'
import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { TextInput, View } from 'react-native'
import RadioButtons from '../RadioButtons'
import themeContext from '../../config/themeContext'
const styles = StyleSheet.create({
    inputname:{
        

    }
})

function RegistrationSection() {
    const theme = useContext(themeContext)
    return (
       <View>
           <Text style={{marginLeft:20,marginTop:20,fontSize:18,fontWeight:'400',color:theme.color}}>
               Etqaf Registration
           </Text>
           <TextInput placeholder="Name" placeholderTextColor="white" style={{width:'90%',
        height:65,
        backgroundColor:theme.backgroundColor,
        borderRadius:20,
        marginTop:20,
        paddingLeft:20,
        alignSelf:'center',}}/>
           <TextInput placeholder="Address" placeholderTextColor="white" style={{width:'90%',
        height:65,
        backgroundColor:theme.backgroundColor,
        borderRadius:20,
        marginTop:20,
        paddingLeft:20,
        alignSelf:'center',}}/>
           <RadioButtons/>
       </View>
    )
}

export default RegistrationSection
