import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Searchamasjid from '../../assets/search.png'

import FoundedMasjids from './foundedMasjids'


const data = [
    { masjidname:"Aisha Masjid",description:"dragging and dropping them",detail:"View Details"},
    { masjidname:"Abuhurera Masjid",description:"dragging and dropping them",detail:"View Details"},
    { masjidname:"Asgar Masjid",description:"dragging and dropping them",detail:"View Details"}
]


const styles = StyleSheet.create({
    searchmasjidtext:{
        alignSelf:"center", 
        fontWeight:'500',
        fontSize:20,
        padding:0,
        marginTop:55,
    },
    foundMasjidbox:{
        backgroundColor:'white',
        width:'95%',
        height:107,
        borderRadius:20,
        alignSelf:'center',
        shadowColor: 'lightgrey',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   margin:10,
    }

})


function MasjidResultsFound() {
    return (
        <View>
            <ScrollView>
               
            <Text style={styles.searchmasjidtext}>
                Search a Masjid
            </Text>
            <Text style={{fontSize:16,fontWeight:"300",marginTop:40,marginLeft:20}}>
                3 Results Found
            </Text>

            {
                data.map(items =>
                    (
                        <FoundedMasjids
                        masjidName={items.masjidname}
                        description={items.description}
                        detail={items.detail}


                        />
                    ))


            }
            



            </ScrollView>
            </View>
        
    )
}

export default MasjidResultsFound
