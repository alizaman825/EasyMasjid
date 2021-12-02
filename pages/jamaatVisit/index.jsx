import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import Jamaat from '../../assets/jamaat.png'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import Visits from './visits'
import Navigation from './navigation'
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
  
    
})


function JamaatVisit() {
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
            Tablagee Jamat Visit
            </Text>

            <View style={styles.imgback}>
                <View style={styles.imgback2}>
                    <Image
                    source={Jamaat}
                    style={{alignSelf:'center',marginTop:30,}}
                    />

                </View>

            </View>
            </LinearGradient>
            </View>
<Navigation/>
            </ScrollView>
        </View>
    )
}

export default JamaatVisit
