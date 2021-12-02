import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import DonateIcon from '../../assets/properties.png'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import Properties from './properties'
import themeContext from '../config/themeContext'


const styles = StyleSheet.create({
    donatetext:{
        alignSelf:'center',
        marginTop:60,
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    background:{
        height:300,
        
    },
    imgback:{
        width:180,
        height:180,
        borderRadius:180/2,
        backgroundColor:"#0E7775",
        alignSelf:'center',
        marginTop:20,
    },
    imgback2:{
        width:150,
        height:150,
        borderRadius:180/2,
        backgroundColor:"#15867C",
        alignSelf:'center',
        marginTop:15,
    },
    donationfortext:{
        fontWeight:"bold",
        fontSize:18,
        padding:20,

    },
    ammountinput:{
        alignSelf:'center',
        width:'90%',
        height:70,
        borderRadius:20,
        borderWidth:1,
        marginTop:40,
        borderColor:'#D0CFD2',
        paddingLeft:20,
    }
})


function MasjidProperties() {
    const theme = useContext(themeContext)
    return (
        <View>
            <ScrollView>
            <View style={{borderBottomLeftRadius:40,borderBottomRightRadius:40,overflow:'hidden'}}>
            <LinearGradient
             colors={['#01526D', '#008E74',]}
             style={styles.background}
            >
       
            <Text style={styles.donatetext}>
                Masjid Properties
            </Text>

            <View style={styles.imgback}>
                <View style={styles.imgback2}>
                    <Image
                    source={DonateIcon}
                    style={{alignSelf:'center',marginTop:30,}}
                    />

                </View>

            </View>
            </LinearGradient>
            </View>
            <View style={{flexDirection:"row",flex:1,justifyContent:'space-evenly',width:'78%',marginTop:30,}}>
                <Text style={{fontSize:18,fontWeight:'bold',color:theme.color}}>
                    Bilal Masjid
                </Text>
                <View style={{borderRadius:20,backgroundColor:theme.background,borderWidth:1,borderColor:theme.background}}>
                <Text style={{width:120,fontSize:12,fontWeight:'300',color:'#05B678',textAlign:'center',paddingTop:2}}>
                    Maslik-Deobandi
                </Text>
                </View>
            </View>
            <Properties/>
            </ScrollView>

        </View>
    )
}

export default MasjidProperties
