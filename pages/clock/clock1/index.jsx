import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

const styles = StyleSheet.create({

    bg1:{
        width:'80%',
        height:200,
        backgroundColor:'#0F7278',
        borderWidth:1,
        borderRadius:10,
        borderColor:"#0F7278",
        alignSelf:'center',
        marginTop:40,
    },
    bg2:{
        width:'90%',
        height:180,
        backgroundColor:'#1F7580',
        borderWidth:1,
        borderRadius:10,
        borderColor:"#1F7580",
        alignSelf:'center',
        marginTop:8,
    }



})
function Clock1({namazName,time,date}) {
    return (
        <View style={styles.bg1}>
            <View style={styles.bg2}>
                <Text style={{fontSize:20,color:'white'}}>
                {namazName}
                </Text>
                <Text style={{fontSize:105,color:'white',alignSelf:'center'}}>
                {time}
                </Text>
                <Text style={{display:'flex',flexGrow:1,textAlign:'right',paddingRight:10,fontSize:18,color:'white'}}>
                {date}
                </Text>
            </View>
        </View>
    )
}

export default Clock1
