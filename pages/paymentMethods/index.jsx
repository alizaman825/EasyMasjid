import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import PaymentIcon from '../../assets/payment.png'
import MasterIcon from '../../assets/master.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TransactionHistory from './historyTransaction'
import { ScrollView } from 'react-native'
import HistoryIcon from '../../assets/historyicon.png'
import themeContext from '../config/themeContext'
const data = [
    {date:'  22/01/2021',description:"Bilal Masjid for Watercooler",donatedPayment:'Rs. 35,000'},
    {date:'  22/01/2021',description:"Qasim Masjid for Toilats ",donatedPayment:'Rs. 20,000'},
    {date:'  22/01/2021',description:"Aisha Masjid for Heaters",donatedPayment:'Rs. 10,000'},
]


const styles = StyleSheet.create({
    cashbox:{
        
    },
    defaultbtn:{
        width:76,
        height:27,
        borderColor:'#7DD8B8',
        borderRadius:20,
        backgroundColor:'white',
        borderWidth:1,
    },
    newmethodbtn:{
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
         marginTop:40,
    }

})

function Payment({navigation}) {
    const theme = useContext(themeContext)
    return (
        <View>
            <ScrollView>
            
        <Text style={{alignSelf:'center',fontSize:24,fontWeight:'400',marginTop:55,color:theme.color}}>
            Payment Methods
        </Text>
        <View style={{width:'80%',
        height:100,
        alignSelf:'center',
        marginTop:30,
        borderWidth:1,
        borderColor:theme.background,
        backgroundColor:theme.background,
        borderRadius:20,}}>
            <Text style={{textAlign:'center',marginTop:30,fontWeight:'300',color:theme.color}}>
                Available Credit:
            </Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:theme.color}}>
                25,000
            </Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:'space-evenly',width:'75%',marginTop:30}}>
        <Image
        source={PaymentIcon}
        />
        <Text style={{fontSize:18,fontWeight:'500',color:theme.color}}>
            Payment Methods
        </Text>
        </View>
        <View style={{width:'90%',flexDirection:'row',}}>        
            <View style={{flexDirection:"row",justifyContent:'space-evenly',width:'50%',marginTop:30}}>
            <Image
            source={MasterIcon}
            />
            <Text style={{fontSize:18,fontWeight:'500',color:theme.color}}>
                Visa
            </Text>
        </View>
        <View style={{width:'50%',flex: 1, flexDirection: 'row', justifyContent: 'flex-end',alignSelf:"center",marginTop:20}}>
            <TouchableOpacity style={styles.defaultbtn}>
                <Text style={{textAlign:'center',paddingTop:5,fontSize:10}}>
                    Default
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={styles.newmethodbtn} onPress={() => navigation.navigate("Add Payment Method")}>
            <Text style={{textAlign:'center',color:'white',fontSize:16,paddingTop:30}}>
            Add a New Payment Method
            </Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',justifyContent:'space-evenly',width:"75%",marginTop:40,}}>
     <Image
            source={HistoryIcon}
            />
            <Text style={{fontSize:18,fontWeight:'500',color:theme.color}}>
                Transaction History
            </Text>
            </View>
{
data.map(item =>
    
        <TransactionHistory date={item.date} description={item.description} donatedPayment={item.donatedPayment}/>
        )}
</ScrollView>
        </View>
    )
}

export default Payment
