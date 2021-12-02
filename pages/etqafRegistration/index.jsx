import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, PickerIOSItem } from 'react-native'
import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import { View } from 'react-native'

import { ScrollView } from 'react-native'
import Etqaficon from '../../assets/etqaf.png'
import RegistrationSection from './registrationSection'
import RegistrationFooter from './footerSection'



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
   
})


function EtqafRegistrationMain({navigation}) {
    return (
        <View>
            <ScrollView>
            <View style={{borderBottomLeftRadius:40,borderBottomRightRadius:40,overflow:'hidden'}}>
            <LinearGradient
             colors={['#01526D', '#008E74',]}
             style={styles.background}
            >
        
            <Text style={styles.donatetext}>
                Etqaf Registration
            </Text>

            <View style={styles.imgback}>
                <View style={styles.imgback2}>
                    <Image
                    source={Etqaficon}
                    style={{alignSelf:'center',marginTop:40,}}
                    />

                </View>

            </View>
            </LinearGradient>
            </View>
            <RegistrationSection/>
            <RegistrationFooter navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default EtqafRegistrationMain;
