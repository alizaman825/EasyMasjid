import React from 'react'
import { Text } from 'react-native'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MasjidIcon from '../../../assets/iconmasjid.png'


const styles = StyleSheet.create({
    searchmasjidtext:{
        alignSelf:"center", 
        fontWeight:'500',
        fontSize:20,
        padding:0,
        marginTop:55,
    },
    foundMasjidbox:{
        backgroundColor:'white',
        width:'95%',
        height:90,
        borderRadius:20,
        alignSelf:'center',
        shadowColor: 'lightgrey',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   marginTop:10,
   marginBottom:20,
    }

})
function FoundedMasjids({masjidName,description,detail}) {
    return (
        <View>
            <View style={styles.foundMasjidbox}>
                <Image
                style={{position:'absolute',marginTop:15,marginLeft:20}}
                source={MasjidIcon}
                />
                <View style={{flex:1,alignSelf:"center"}}>
                <Text style={{marginTop:15,fontSize:18,fontWeight:"500",}}>
                    {masjidName}
                </Text>
                <Text style={{fontSize:14,fontWeight:"200",marginTop:2}}>
                    {description}
                </Text>
                <TouchableOpacity >
                    <Text style={{textDecorationLine:"underline",textDecorationColor:"#05B678",fontWeight:"400",color:'#05B678',marginTop:2}}>
                        {detail}
                    </Text>
                </TouchableOpacity>
                </View>
                
            </View>

        </View>
    )
}

export default FoundedMasjids
