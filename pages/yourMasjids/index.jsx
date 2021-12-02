
import React from 'react'
import { Image, TextInput } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import Masjids from './masjids'
import { Icon } from 'native-base'



const styles = StyleSheet.create({
    donatetext:{
        alignSelf:'center',
        marginTop:55,
        fontSize:20,
        fontWeight:'400',
    },
    searchinput:{
        width:'90%',
        height:60,
        backgroundColor:'white',
        borderColor:'#E5E7E9',
        borderWidth:1,
        borderRadius:30,
        alignSelf:'center',
        paddingLeft:10,
        
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'90%',
        borderRadius:30,
        alignSelf:'center',
        marginTop:30,
    },
    searchIcon: {
        padding: 10,
    },
  
    
})


function AllMasjids() {
    return (
        <View>
            <ScrollView>
        
            <Text style={styles.donatetext}>
            Your Masjids
            </Text>
            <View style={styles.searchSection}>
                <TextInput placeholder="Search" style={styles.searchinput}/>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="#05B678"/>
            </View>
            <Masjids/>
            </ScrollView>
        </View>
    )
}

export default AllMasjids
