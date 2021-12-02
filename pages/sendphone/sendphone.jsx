import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput,  Alert, Modal, Pressable } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import themeContext from '../config/themeContext'

const styles = StyleSheet.create({
    phonetext:{
        alignSelf:'center',
        marginTop:55,
        fontSize:24,
    },
    phoneinput:{
        
    },
    phonesendBtn:{
        borderRadius:20,
        backgroundColor:'#05B678',
         width:'90%',
         height:80,
         alignSelf:'center',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.6,
         shadowRadius: 10,
         elevation: 2,
    },
    phonesendtext:{
        textAlign:'center',
        padding:25,
        color:'white',
        fontSize:18,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'80%',
        height:'45%',
        alignSelf:'center',
        marginTop:150,
        
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      modalText: {
        textAlign: "center",
        fontSize:24,
        fontWeight:'400',
        
      },
      reciptbox:{
        width:'90%',
        height:'70%',
        flexDirection:'row',
        backgroundColor:'#F4F9F7',
        borderWidth:2,
        borderRadius:20,
        borderColor:'#05B678',
        marginBottom:50,
    
    
    
      }
})

function Sendphone() {
  const theme = useContext(themeContext)

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
             <Modal
        animationType="slide"
       
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          
        }}
        presentationStyle='pageSheet'
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{margin:10,flexDirection:'row',}}>✖</Text>
            </Pressable>
            <View style={{justifyContent:"center",flexDirection:'row',flex:1}}>
            <Text style={{fontSize:24,}}>Thank You!</Text>
            </View>
            <View style={{justifyContent:"center",flexDirection:'row',flex:1}}>
            <Text style={{textAlign:'center',fontSize:14,fontWeight:'200'}}>
            We've got your phone number,
             We will call after 5 minutes   
            </Text>
            </View>
          </View>
        </View>
      </Modal>
           
            <Text style={styles.phonetext}>
        Send Phone
            </Text>
            <TextInput style={{width:'90%', 
        borderRadius:20,
         backgroundColor:theme.backgroundColor,
         height:80,
         margin:40,
         alignSelf:'center',
         marginTop:50,
         paddingLeft:20}} placeholder="Your Phone Number" placeholderTextColor="white" />
            <View >
            <TouchableOpacity style={styles.phonesendBtn} 
           onPress={() => setModalVisible(true)}>
                <Text style={styles.phonesendtext}>
                    Send
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default Sendphone