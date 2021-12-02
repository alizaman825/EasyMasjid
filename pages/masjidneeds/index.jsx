import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import DonateIcon from '../../assets/whitemasjidneeds.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import Needs from './needs'
import themeContext from '../config/themeContext'


const data = [
    {title:"Water Cooler",description:"This Masjid 1 Water Cooler is required"},
    {title:"Air-condition repair",description:"This Masjid 1 Air-codition is required"},
    {title:"Shoes Stand",description:"This Masjid 2 Shoes Stand is required"},
    {title:"Speaker ",description:"This Masjid 1 Speaker is required"},
    {title:"Generator",description:"This Masjid 1 Generator is required"}
]

const styles = StyleSheet.create({
    donatetext:{
        alignSelf:'center',
        marginTop:60,
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    background:{
        height:300,
        
    },
    imgback:{
        width:180,
        height:180,
        borderRadius:180/2,
        backgroundColor:"#0E7775",
        alignSelf:'center',
        marginTop:20,
    },
    imgback2:{
        width:150,
        height:150,
        borderRadius:180/2,
        backgroundColor:"#15867C",
        alignSelf:'center',
        marginTop:15,
    },
    
})


function MasjidNeeds({navigation}) {
    const theme = useContext(themeContext)
    return (
        <View>
            <ScrollView>
            <View style={{borderBottomLeftRadius:40,borderBottomRightRadius:40,overflow:'hidden'}}>
            <LinearGradient
             colors={['#01526D', '#008E74',]}
             style={styles.background}
            >
        
            <Text style={styles.donatetext}>
                Masjid Needs
            </Text>

            <View style={styles.imgback}>
                <View style={styles.imgback2}>
                    <Image
                    source={DonateIcon}
                    style={{alignSelf:'center',marginTop:40,}}
                    />

                </View>

            </View>
            </LinearGradient>
            </View>
            <Text style={{margin:20,fontSize:20,fontWeight:"400",color:theme.color}}>
                Masjid Needs
            </Text>
            {
                data.map(items =>
                    (
                        <Needs
                        navigation={navigation}
                        neededItem={items.title}
                        description={items.description}
                        />
                    ))
            }
            </ScrollView>

        </View>
    )
}

export default MasjidNeeds
