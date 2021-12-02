import React, { useContext } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import GoogleIcon from '../../assets/google.png'
import FacebookIcon from '../../assets/facebook.png'
import themeContext from '../config/themeContext'
import { color } from 'react-native-reanimated'
const styles =  StyleSheet.create({

    
    signupText:{
       
    },
    
   
    picInput:{
        
    },
    browseInput:{
        height:65,
    borderRadius:20,
    marginTop:20,
    backgroundColor:'#DFF2EB',
    width:'50%',
 textAlign:'center',
 paddingTop:20,
color:'#00536D',
fontSize:16,
    borderWidth:1,
    borderColor:"#DFF2EB", 

    },
    picview:{
        flexDirection:'row',
        width:'90%',
        flex:1,
        justifyContent:'space-between',
        alignSelf:'center'
    },
    signupbtn:{
     marginTop:20,
    padding:5,
    width:'90%',
    marginLeft:20,
    borderWidth:1,
    height:70,
    backgroundColor:'white',
    borderRadius:20,
    borderColor:"#05B678",
    marginBottom:10
    },
    signupbtnText:{
        color:'#05B678',
        justifyContent:'center',
        alignSelf:'center',
        paddingTop:15,
        fontSize:16,
    }
    
})



function Signup({navigation}) {
    const theme = useContext(themeContext)
    return (

        <View>
            <ScrollView>
            <Text style={{ color:theme.color,
    fontSize:30,
    marginTop:30,
    marginLeft:20,}}>
                Sign Up 
            </Text>
            <View>
                <TextInput placeholder="First & Last Name" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}></TextInput>
            </View>
            <View>
                <TextInput placeholder="Email"placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}></TextInput>
            </View><View>
                <TextInput placeholder="Password" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}></TextInput>
            </View>
            <View>
                <TextInput placeholder="Gender" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}></TextInput>
            </View>
            <View style={styles.picview}>
                <Text style={{width:'50%',
    height:65,
    marginTop:40,
    alignSelf:'center',
    paddingLeft:20,
    color:theme.color}}>Picture</Text>
                <TouchableOpacity style={styles.browseInput}>
                <Text style={{textAlign:'center'}} >Browse</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput placeholder="Phone" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}}></TextInput>
            </View><View>
                <TextInput placeholder="Payment Methods (Optional)" style={styles.emailInput}></TextInput>
            </View>
            
            <View >
            <TouchableOpacity style={styles.signupbtn} onPress={()=>navigation.navigate("Find Masjid")}>
                <Text style={styles.signupbtnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',flexDirection:'row'}}>
                <TouchableOpacity style={{alignSelf:'center',margin:30}} onPress={() => console.log('Pressed')}>
                <Image
                source={GoogleIcon}
                />
                
                </TouchableOpacity>
                <TouchableOpacity style={{margin:30}} onPress={() => console.log('Pressed')}>
                <Image
                source={FacebookIcon}
                />
                </TouchableOpacity>
                </View>
                
            
            </ScrollView>
            </View>

    )
}

export default Signup
