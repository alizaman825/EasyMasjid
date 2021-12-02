import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import Clock1 from './clock1'
import Clock2 from './clock2'

const data =[
    {namazName1:"   Namaz-E-Zohar",time1:"01:30",date1:"24-Feb-2021"},
]
const data2 =[
      {namazName2:"   Namaz-E-Zohar",time2:"01:30",date2:"24-Feb-2021"},
]
function Clock() {
    return (
        <View >
            <ScrollView>
            
            <LinearGradient
            colors={['#01526D', '#008E74',]}

            >
            <Text style={{fontSize:24,color:'white',alignSelf:'center',paddingTop:40}}>
                    Badshahi Mosque
                    </Text>
            {
                data.map(items => (
                    <Clock1 namazName={items.namazName1} time={items.time1} date={items.date1}/>
                ))
            }
            <View style={{flexDirection:'row',flex:1,width:'95%', alignSelf:'center',marginTop:40,justifyContent:'space-evenly'}}>
                <View style={{width:"47%"}}>
            {
                data2.map(items => (
                    <Clock2 namazName={items.namazName2} time={items.time2} date={items.date2}/>
                ))
            }
            </View>
            <View style={{width:"47%"}}>
            {
                data2.map(items => (
                    <Clock2 namazName={items.namazName2} time={items.time2} date={items.date2}/>
                ))
            }
            </View>
            </View>
            <View style={{flexDirection:'row',flex:1,width:'95%', alignSelf:'center',justifyContent:'space-evenly',marginTop:30}}>
                <View style={{width:"47%"}}>
            {
                data2.map(items => (
                    <Clock2 namazName={items.namazName2} time={items.time2} date={items.date2}/>
                ))
            }
            </View>
            <View style={{width:"47%"}}>
            {
                data2.map(items => (
                    <Clock2 namazName={items.namazName2} time={items.time2} date={items.date2}/>
                ))
            }
            </View>
            </View>
            <View style={{width:"50%",alignSelf:"center",marginTop:30,marginBottom:50}}>
            {
                data2.map(items => (
                    <Clock2 namazName={items.namazName2} time={items.time2} date={items.date2}/>
                ))
            }
            </View>



         
    
            </LinearGradient>
            </ScrollView>

        </View>
    )
}

export default Clock
