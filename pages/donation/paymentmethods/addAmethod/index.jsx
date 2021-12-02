
import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Image } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Checkbox, RadioButton } from 'react-native-paper';
import EasyIcon from '../../../../assets/easyicon.png'
import Jazz from '../../../../assets/jazz.png'
import MasterIcon from '../../../../assets/master.png'
import themeContext from '../../../config/themeContext';





const styles = StyleSheet.create({
paymenttext:{
    
},
paymentbtn:{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    borderRadius:20,
    borderWidth:1,
    height:70,
    borderColor:"#D0CFD2",
    display:"flex",
    marginBottom:20,
},
continuebtn:{
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
},
paymenticon:{
    flex: 1,
     flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelf:"center",
      marginRight:10,
},


})

function AddMethod() {
    const theme = useContext(themeContext)

    const [checked, setChecked] = React.useState('first');
    return (
        <View >
            <Text style={{fontSize:18,
    alignSelf:'center',
    marginTop:55,
    marginBottom:50,
    color:theme.color
    }}>
            Add Payment Method
            </Text>
            <TouchableOpacity style={styles.paymentbtn}>
                <Text style={{fontSize:16,padding:25,color:theme.color}}>
                    EasyPaisa
                </Text>
                <View style={styles.paymenticon}>
                <Image
                source={EasyIcon}
        
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentbtn}>
                <Text style={{fontSize:16,padding:25,color:theme.color}}>
                   Jazz Cash
                </Text>
                <View style={styles.paymenticon}>
                <Image
                source={Jazz}
        
                />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentbtn}>
                <Text style={{fontSize:16,padding:25,color:theme.color}}>
                    Credit Card
                </Text>
                <View style={styles.paymenticon}>
                <Image
               source={MasterIcon}

                />
                </View>
            </TouchableOpacity>
   <TouchableOpacity style={styles.continuebtn}>
       <Text style={{textAlign:'center',paddingTop:25,fontSize:16,color:'white'}}>
           Add
       </Text>
   </TouchableOpacity>
        </View>
    )
}

export default AddMethod
