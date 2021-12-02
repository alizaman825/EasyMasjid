import { Picker } from 'native-base';
import React, { useContext } from 'react'
import { Text } from 'react-native';
import { View } from 'react-native'
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import themeContext from '../../config/themeContext';
const styles = StyleSheet.create({
    paymentbtn:{
        marginTop:30,
        padding:5,
        width:'90%',
        marginLeft:20,
        borderWidth:1,
        height:70,
        backgroundColor:'#05B678',
        borderRadius:20,
        marginBottom:50,
        borderColor:"#05B678",
        shadowColor: '#05B678',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.6,
         shadowRadius: 10,
         elevation: 2,
        
    }
})

function RegistrationFooter({navigation}) {
    const theme = useContext(themeContext)
    return (
        <View>
            <Text style={{alignSelf:'center',fontWeight:'300',marginTop:30,width:'90%',textAlign:'center',color:theme.color}}>
            Payment option by cash or card. Pricing varies with days count.
            </Text>
            <TouchableOpacity style={styles.paymentbtn} onPress={() => navigation.navigate("Payment Methods")}>
                <Text style={{color:'white',fontSize:18,alignSelf:'center',paddingTop:20}}>
                    Payment
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegistrationFooter
