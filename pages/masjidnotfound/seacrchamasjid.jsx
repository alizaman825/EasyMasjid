import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Searchamasjid from '../../assets/search.png'


const styles = StyleSheet.create({
    searchmasjidtext:{
        alignSelf:"center", 
        fontWeight:'500',
        fontSize:20,
        padding:0,
        marginTop:55,
    },
    noresults:{
        alignSelf:'center',
        marginTop:30,
        fontWeight:'bold',
        fontSize:30

    },
    error:{
        alignSelf:'center',
        padding:30,
         textAlign:'center',
         fontWeight:'300'
    },
    btn:{
        borderRadius:30,
        backgroundColor:'#05B678',
        width:'90%',
        height:80,
        alignSelf:'center',
        alignSelf:'center',
        shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.6,
   shadowRadius: 10,
   elevation: 3,




    },
    btntext:{
        alignSelf:'center',
        padding:30,
        color:'white'
    }
})

function MasjidNotFound() {
    return (
        <View>
            <ScrollView>
                
            <Text style={styles.searchmasjidtext}>
                Search a Masjid
            </Text>
            <Image
            source={Searchamasjid}
            style={{alignSelf:'center',marginTop:30,}}/>
            <Text style={styles.noresults}>
                No results found.
            </Text>
            <Text style={styles.error}>
            We can't find any Masjid from your search
                 If you want to add your Masjid then call us 
               or send your phone number.
            </Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>
                    Send Phone Number
                </Text>
            </TouchableOpacity>
            </ScrollView>

        </View>


    )
}

export default MasjidNotFound
