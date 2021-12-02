
import CheckBox from '@react-native-community/checkbox'
import React, { useContext, useState } from 'react'
import { Text, View , StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import { onChange, set } from 'react-native-reanimated';
import themeContext from '../config/themeContext';
const styles = StyleSheet.create({
signinText:{
   
},
emailInput:{
    

},
signinBtn:{
    marginTop:20,
    padding:5,
    width:'90%',
    marginLeft:20,
    borderWidth:1,
    height:70,
    backgroundColor:'white',
    borderRadius:20,
    borderColor:"#05B678",
    
    
},
signinbtnText:{
    color:'#05B678',
        justifyContent:'center',
        alignSelf:'center',
        paddingTop:15,
        fontSize:16

},


forgottext:{
    
}



}) 




function ForgotPass({navigation}) {
    const theme = useContext(themeContext);
    return (
        <View>
        

            <Text style={{ color:theme.color,
    fontSize:30,
    marginTop:20,
    marginLeft:20,
    }}>
                Forgot Password
            </Text>
            <Text style={{marginTop:20,
    marginLeft:20,
    color:theme.color,
    fontSize:13}}>Please Enter Your Email Or Phone Number:</Text>

            <View>
                <TextInput style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}
                placeholder="Email Or Phone Number" placeholderTextColor="white"/>
            </View>
            
            <View >
            <TouchableOpacity style={styles.signinBtn} onPress={() => navigation.navigate("New Password")}>
                <Text style={styles.signinbtnText}>
                    
                    
                    Send</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        

    )
}

export default ForgotPass;
