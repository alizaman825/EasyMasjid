import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
const SendPhoneModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
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
            <Text style={{textAlign:'center',fontSize:18}}>
            We've got your phone number
             we will call after 5 minutes   
            </Text>
            </View>
            

        
          </View>
          
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyles}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop:100,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'75%',
    height:'40%',
    
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
});

export default SendPhoneModal;