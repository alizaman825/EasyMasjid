import React, { useContext, useState } from 'react'
import { StyleSheet, Text, Modal, Pressable, Alert } from 'react-native'
import { Image } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Successdonation from '../../assets/successdonation.png'
import ReciptText from '../donationRecipt/donationreciptText/index';
import themeContext from '../config/themeContext'

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
       
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop:100
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
        
      },
      savebtn:{
        width:'100%',
        height:70,
        backgroundColor:'#05B678',
        borderWidth:1,
        borderColor:'#05B678',
        borderRadius:20,
        marginTop:30,
        alignSelf:'center',
    
      }
})

function Donationsucces() {
    const [modalVisible, setModalVisible] = useState(false);
    const theme = useContext(themeContext)
    return (
        <View>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ backgroundColor:theme.background,
        borderRadius: 20,
        shadowColor:theme.background,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'75%',
        height:'70%',
        }}>
          <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{margin:10,flexDirection:'row',color:theme.color}}>✖</Text>
            </Pressable>
            <View style={{justifyContent:"center",flexDirection:'row',flex:1}}>
            <Text style={{fontSize:24,color:theme.color}}>Receipt!</Text>
            </View>
            <View style={{width:'90%',
        height:'70%',
        backgroundColor:theme.background,
        borderWidth:2,
        borderRadius:20,
        borderColor:'#05B678',
        alignSelf:'center',
        marginBottom:50}}>
              <ReciptText/>
              <View  style={styles.savebtn}>
        <TouchableOpacity >
                <Text style={{color:'white',paddingTop:25,alignSelf:"center",}}>
                    Save In Gallery
                </Text>
            </TouchableOpacity>
            </View>
            </View>

        
          </View>
          
        </View>
      </Modal>
            <Image
            source={Successdonation}
            style={{alignSelf:'center',marginTop:80,}}
            />
            <Text style={{fontSize:20,alignSelf:'center',fontWeight:'bold',color:theme.color,paddingTop:20}}>
            Your donation is successful.
            </Text>
            <View style={{width:'90%',height:70,marginTop:30,alignSelf:'center',backgroundColor:'white',borderWidth:1,borderColor:'#05B678',borderRadius:20}}>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <Text style={{textAlign:'center',padding:25,color:'#05B678',fontSize:18}}>
                Get Your Receipt
                </Text>
             </TouchableOpacity>
             </View>
      </View>
        
    )          
        
}

export default Donationsucces
