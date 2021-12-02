import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Image } from 'react-native'
import { View } from 'react-native'
import themeContext from '../../config/themeContext'


const styles = StyleSheet.create({
    background:{
        
    }
})

function TransactionHistory({date,description,donatedPayment}) {
    const theme = useContext(themeContext)
    return (
        <View>
            <View style={{backgroundColor:theme.background,
        width:'95%',
        height:90,
        borderRadius:20,
        alignSelf:'center',
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   marginTop:30,}}>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:18,fontWeight:'bold',paddingLeft:20,paddingTop:15,color:theme.color}}>
                    Donate
                </Text>
                <Text style={{paddingTop:20,fontWeight:'300',color:theme.color}}>
                    {date}
                </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start',}}>
                <Text style={{paddingTop:15,paddingLeft:20,fontWeight:'300',color:theme.color}}>
                    {description}
                </Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end',}}>
                    <Text style={{fontWeight:'bold',fontSize:18,paddingRight:10,color:theme.color}}>
                        {donatedPayment}
                    </Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default TransactionHistory
