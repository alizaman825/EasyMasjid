
import React, { useContext, useState } from 'react'
import { Text, View , StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native'
import themeContext from '../config/themeContext'
const styles = StyleSheet.create({
signinText:{
    
    
},
emailInput:{
    width:'90%',
    height:65,
    backgroundColor:'white',
    borderRadius:20,
    marginTop:20,
    marginLeft:20,
    paddingLeft:20,
    

},


checkBox:{
    
    width:10,
     flexDirection:'column',
    height:25,
    marginTop:20,
    marginLeft:20,
    paddingLeft:20,
    borderRadius:5,
},
checkText:{
    paddingLeft:15,
    paddingTop:21,
    

},
container:{
    flexDirection:"row"
},
forgetPass:{
alignSelf:'flex-end',
marginLeft:40,
marginBottom:5
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

signinBtn2:{
    marginTop:20,
    padding:5,
    width:'90%',
    marginLeft:20,
    borderWidth:1,
    height:70,
    backgroundColor:'#05B678',
    borderRadius:20,
    borderColor:"#05B678",
    
    
},
resettext:{
    
}



}) 


function ResetPass() {
    const theme = useContext(themeContext)

    return (
        <View>
           

            <Text style={{color:theme.color,
    fontSize:30,
    marginTop:20,
    marginLeft:20,}}>
                Reset Password
            </Text>
            <Text style={{marginTop:20,
    marginLeft:20,
    color:theme.color,
    fontSize:13}}>Please Enter Your New Password And Confirm:</Text>
            <View>
                <TextInput placeholder="Enter New Password" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}} />


            </View>
            <View>
                <TextInput placeholder="Confirm New Password" placeholderTextColor="white" style={{  width: '90%',
        height: 65,
        backgroundColor: theme.backgroundColor,
        borderRadius: 20,
        marginTop: 20,
        paddingLeft: 20,
        alignSelf: 'center'}} />


            </View>
            <View >
            <TouchableOpacity style={styles.signinBtn}>
                <Text style={styles.signinbtnText}>
                    
                    
                    Reset Password</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        

    )
}

export default ResetPass;
