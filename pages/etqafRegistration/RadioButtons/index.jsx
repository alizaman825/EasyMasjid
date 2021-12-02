import { CheckBox, Radio } from 'native-base'
import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import themeContext from '../../config/themeContext'
const styles = StyleSheet.create({
  
})

function RadioButtons() {
    const theme = useContext(themeContext)
    return (
       <View>
           <View style={{flexDirection:"row",}}>
           <View style={{flexDirection:'row'}}>
           <CheckBox
           checked={false}
           color='#05B678'
           style={{margin:20}}
           />
           <Text style={{marginTop:20,color:theme.color}}>
           3 days
           </Text>
           </View>
           <View style={{flexDirection:'row'}}>
           <CheckBox
           checked={false}
           color='#05B678'
           style={{margin:20}}
           />
           <Text style={{marginTop:20,color:theme.color}}>
           10 days
           </Text>
           </View>
           <View style={{flexDirection:'row'}}>
           <CheckBox
           checked={false}
           color='#05B678'
           style={{margin:20}}
           />
           <Text style={{marginTop:20,color:theme.color}}>
           30 days
           </Text>
           </View>
           </View>
           <View style={{flexDirection:"row" ,width:'85%',alignSelf:'center'}}>
               <Text style={{marginTop:20,color:theme.color}}>
               Sehr-o-iftar meal
               </Text>
               <CheckBox
           checked={false}
           color='#05B678'
           style={{margin:20}}
           />
           <Text style={{marginTop:20,color:theme.color}}>
           Yes
           </Text>

           <CheckBox
           checked={false}
           color='#05B678'
           style={{margin:20}}
           />
           <Text style={{marginTop:20,color:theme.color}}>
           No
           </Text>
           </View>
       </View>
    )
}

export default RadioButtons
