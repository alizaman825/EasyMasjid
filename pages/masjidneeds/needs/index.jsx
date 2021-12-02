import React, { useContext } from 'react'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import themeContext from '../../config/themeContext'
const styles = StyleSheet.create({

    box1:{
       
    },
    donatebtn:{
        backgroundColor:'#05B678',
        borderWidth:1,
        borderRadius:20,
        width:62,
        height:22,
        borderColor:'#05B678',

    }


})

function Needs({neededItem,description,navigation}) {
    const theme = useContext(themeContext)
    return (
        <View>
            <View style={{backgroundColor:theme.background,
        width:'95%',
        height:70,
        borderRadius:20,
        alignSelf:'center',
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   marginTop:10,
   marginBottom:10,}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end',marginRight:10,marginTop:10}}>
                <TouchableOpacity style={styles.donatebtn} onPress={()=> navigation.navigate("Donate")}>
                    <Text style={{color:"white",textAlign:"center"}}>
                        Donate
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={{position:'absolute'}}>
                <Text style={{margin:10,fontSize:18,fontWeight:'500',color:theme.color}}>
                    {neededItem}
                </Text>
                <Text style={{marginLeft:10,fontSize:14,fontWeight:'200',color:theme.color}}>
                    {description}
                </Text>
                </View>
            </View>
        </View>
    )
}

export default Needs
