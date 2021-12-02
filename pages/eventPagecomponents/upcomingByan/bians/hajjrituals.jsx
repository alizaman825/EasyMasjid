import React, { useContext } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import TimeIcon from '../../../../assets/timeicon.png'
import themeContext from '../../../config/themeContext'
const styles = StyleSheet.create({
    detailtextback:{
        

    },
})


function Event({title,date,description}) {
    const theme = useContext(themeContext)
    return (
     <View>
        <View style={{backgroundColor:theme.background,
        width:'95%',
        height:107,
        borderRadius:20,
        alignSelf:'center',
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   margin:10,}}>
         <Text style={{marginLeft:20,marginTop:10,fontWeight:'400',fontSize:18,textAlign:'justify',color:theme.color}}>
             {title}
         </Text>
         <View>
             <Text style={{marginLeft:20,marginTop:10,justifyContent:'space-around',textAlign:'justify'}}>
             <Image
             source={TimeIcon}
             />
             
            <Text style={{ color:'#32c390', fontWeight:"700",textAlign:'center'}}>
             {date}
             </Text>
             </Text>
             </View>
             <Text style={{alignSelf:'center',fontSize:11,fontWeight:'300',margin:10,color:theme.color}}>
                {description}
            </Text>
         </View>
     </View>
    )
}

export default Event;
