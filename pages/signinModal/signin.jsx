
import React, { useState , useContext } from 'react'
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native'
import { SocialIcon } from 'react-native-elements';
import { Checkbox, HelperText } from 'react-native-paper';
import { onChange, set } from 'react-native-reanimated';

import GoogleIcon from '../../assets/google.png'
import FacebookIcon from '../../assets/facebook.png'
import themeContext from '../config/themeContext';


function Signin({navigation}) {
    const theme = useContext(themeContext)

    return (
        <View style={{backgroundColor:theme.background,height:'100%'}}>

            <Text style={{color:theme.color,fontSize: 30,marginTop: 20,marginLeft: 30,}}>
                Sign In
            </Text>
            <View>
                <TextInput placeholder="Email Address" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}} />
            </View>
            <View>
                <TextInput placeholder="Password" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}/>


            </View>
            <View style={styles.container}>
                <Checkbox
                    style={styles.checkBox} /><Text style={{color:theme.color,paddingLeft: 15,paddingTop: 21,}}>Stay Logged In</Text>
                <View style={styles.forgetPass}>
                    <TouchableOpacity onPress={() => navigation.navigate("Forgot Password") }>
                        <Text style={styles.forgetPass}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View >
                <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate("Find Masjid")}>
                    <Text style={styles.signinbtnText1}>

                        Sign In</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ alignSelf: 'center', margin: 20, fontWeight: '300', fontSize: 12,color:theme.color }}>OR</Text>
            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={{ alignSelf: 'center', margin: 30 }} onPress={() => console.log('Pressed')}>
                    <Image
                        source={GoogleIcon}
                    />

                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30 }} onPress={() => console.log('Pressed')}>
                    <Image
                        source={FacebookIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{color:theme.color}}>
                Don't have an account?
                </Text>
                <TouchableOpacity style={styles.signinBtn3} onPress={() => navigation.navigate("Sign Up")}>
                    <Text style={styles.registerbtn}>Register now!</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default Signin
const styles = StyleSheet.create({
    signinText: {
        color: 'black',
        

    },
    emailInput: {
      


    },

    checkBox: {

        width: 10,
        flexDirection: 'column',
        height: 25,
        marginTop: 20,
        marginLeft: 20,
        paddingLeft: 20,
        borderRadius: 5,
    },
    checkText: {
      


    },
    container: {
        flexDirection: "row"
    },
    forgetPass: {
        justifyContent: 'space-between',
        alignSelf: "flex-end",
        marginLeft: 30,
        color: '#05B678'
    },
    signinBtn: {
        marginTop: 20,
        padding: 5,
        width: '90%',
        alignSelf: "center",
        borderWidth: 1,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: "#05B678",


    },
    signinbtnText1: {
        color: '#05B678',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16,
        paddingTop:15

    },
   
    signinBtn2: {
        marginTop: 20,
        padding: 5,
        width: '90%',
        marginLeft: 20,
        borderWidth: 1,
        height: 70,
        backgroundColor: '#05B678',
        borderRadius: 20,
        borderColor: "#05B678",


    },
    registerbtn:{
        color: '#05B678',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 16,
        paddingLeft:10

    }



})

