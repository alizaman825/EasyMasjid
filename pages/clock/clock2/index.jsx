import React from 'react'
import { View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({

    bg1:{
        width:'100%',
        height:120,
        backgroundColor:'#0F7278',
        borderWidth:1,
        borderRadius:10,
        borderColor:"#0F7278",
        alignSelf:'center',
       

    },
    bg2:{
        width:'90%',
        height:100,
        backgroundColor:'#1F7580',
        borderWidth:1,
        borderRadius:10,
        borderColor:"#1F7580",
        marginTop:8,
        alignSelf:'center',
    }



})

function Clock2({namazName,time,date}) {
    return (
       
        <View>
        <View style={styles.bg1}>
            <View style={styles.bg2}>
                <Text style={{fontSize:12,color:'white'}}>
                    {namazName}
                </Text>
                <Text style={{fontSize:50,color:'white',alignSelf:'center'}}>
                    {time}
                </Text>
                <Text  style={{display:'flex',flexGrow:1,textAlign:'right',paddingRight:10,fontSize:12,color:'white'}}>
                    {date}
                </Text>
            </View>
        </View>
        </View>
        
    )
}

export default Clock2
