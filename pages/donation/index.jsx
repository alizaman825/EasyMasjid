import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import DonateIcon from '../../assets/donateiconwhite.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import PaymentMethods from './paymentmethods/methods'
import { ScrollView } from 'react-native'
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
       
    },
    ammountinput:{
        
    }
})


function DonatePage({navigation}) {
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
                Donate
            </Text>

            <View style={styles.imgback}>
                <View style={styles.imgback2}>
                    <Image
                    source={DonateIcon}
                    style={{alignSelf:'center',marginTop:40,}}
                    />

                </View>

            </View>
            </LinearGradient>
            </View>
            <Text style={{ fontWeight:"bold",
        fontSize:18,
        padding:20,
        color:theme.color
}}>
                Donation For Air-Conditioner
            </Text>
            <Text style={{paddingLeft:20,fontWeight:"300",color:theme.color}}>
                By Qaisar Butt
            </Text>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
            <TextInput placeholder="Enter Ammount To Donate" placeholderTextColor="white" style={{alignSelf:'center',
        width:'90%',
        height:70,
        borderRadius:20,
        borderWidth:1,
        marginTop:40,
        borderColor:'#D0CFD2',
        paddingLeft:20,
        backgroundColor:theme.backgroundColor,}}/>
            </TouchableWithoutFeedback>
            <PaymentMethods navigation={navigation} />
            </ScrollView>

        </View>
    )
}

export default DonatePage
