import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import themeContext from '../../../config/themeContext'

const styles = StyleSheet.create({

    background:{
        
    }
})

function PropertiesComponent({title,description,status}) {
    const theme = useContext(themeContext)
    return (
    <View>
        <View style={{width:"90%",
        height:80,
        backgroundColor:theme.background,
        alignSelf:'center',
        shadowColor:theme.background,
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.3,
         shadowRadius: 7,
         elevation: 2,
         marginTop:30,
         borderWidth:1,
         borderRadius:20,
         borderColor:theme.background,}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',width:"90%",alignSelf:'center',maxHeight:'40%'}}>
            <Text style={{fontSize:14,fontWeight:'bold',paddingTop:10,color:theme.color}}>
                {title}
            </Text>
            <View style={{borderRadius:20,backgroundColor:theme.background,borderWidth:1,borderColor:theme.background,marginTop:10}}>
            <Text style={{fontSize:12,fontWeight:'bold',color:'#2c7667',textAlign:'center',paddingTop:3,width:80,}} >
                {status}
            </Text>
            </View>
            </View>
            <View style={{flexDirection:'row', flex:1,width:'90%',alignSelf:'center'}}>
            <Text style={{fontSize:14,fontWeight:'200',paddingTop:10,color:theme.color}}>
                {description}
            </Text>
            </View>
        </View>
    </View>
    )
}

export default PropertiesComponent
