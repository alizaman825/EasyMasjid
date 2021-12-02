import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import TimeIcon from '../../../../assets/timeicon.png'

const styles = StyleSheet.create({
    detailtextback:{
        backgroundColor:'white',
        width:'90%',
        height:107,
        borderRadius:8,
        alignSelf:'center',
        shadowColor: 'lightgrey',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   margin:10,

    },
})


function AttendJamaat({title,date,description,masjidName}) {
    return (
     <View>
        <View style={styles.detailtextback}>
            <View style={{flexDirection:"row",justifyContent:'space-evenly',width:'80%'}}>
         <Text style={{marginTop:10,fontWeight:'400',fontSize:15,textAlign:'justify'}}>
             {title}
         </Text>
         <Text style={{marginTop:10,fontSize:14,fontWeight:'200'}}> 
             {masjidName}
         </Text>
         </View>
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
             <Text style={{fontSize:11,fontWeight:'300',textAlign:'auto',padding:10,paddingLeft:20}}>
                {description}
            </Text>
         </View>
     </View>
    )
}

export default AttendJamaat;
