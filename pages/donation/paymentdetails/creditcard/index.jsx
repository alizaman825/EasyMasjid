import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Image } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'
import MasterIcon from '../../../../assets/master.png'
import themeContext from '../../../config/themeContext'


const styles =  StyleSheet.create({

    cardtext:{
        
    },
    detailtext:{
        

    },
    paybtn:{
        borderRadius:20,
        backgroundColor:'#05B678',
         width:'90%',
         height:70,
         alignSelf:'center',
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.6,
         shadowRadius: 10,
         elevation: 2,
         margin:30,
    }
})
function CreditCard({navigation}) {
    const theme = useContext(themeContext)
    return (
       <View>
          
           <Text style={{alignSelf:'center',
        marginTop:55,
        fontSize:24,
        fontWeight:'400',
        color:theme.color}}>
               Credit Card
           </Text>
           <Text style={{fontSize:24,
        fontWeight:'500',
        marginTop:50,
        marginLeft:30,
        color:theme.color
        }}>
               Payment Details
           </Text>
           <Text style={{marginLeft:30,marginTop:20,fontWeight:'300',color:theme.color}}>
               Enter Your Credit Card Details:
           </Text>
           <TextInput
           label="Cardholder Name:"
           style={{width:'90%',height:70,marginTop:50,alignSelf:"center",backgroundColor:theme.backgroundColor}}
           underlineColor="#05B678"
           />
           <TextInput
           label="Card Number:"
           style={{width:'90%',height:70,marginTop:30,alignSelf:"center",backgroundColor:theme.backgroundColor}}
           underlineColor="#05B678"
           />
           <View style={{width:'90%',flexDirection:'row',alignSelf:'center'}}>
               <TextInput
               label="Expiry date"
               style={{width:"50%",height:70,marginTop:30,backgroundColor:theme.backgroundColor}}
               underlineColor="#05B678"
               />
                <TextInput
               label="CVV"
               style={{width:"50%",height:70,marginTop:30,backgroundColor:theme.backgroundColor,marginLeft:5,}}
               underlineColor="#05B678"
               />
           </View>
           <TouchableOpacity style={styles.paybtn} onPress={() => navigation.navigate("Success")}>
               <Text style={{textAlign:'center',paddingTop:25,fontSize:18,fontWeight:'400',color:'white'}}>
                   Pay
               </Text>
           </TouchableOpacity>
       </View>
    )
}

export default CreditCard
