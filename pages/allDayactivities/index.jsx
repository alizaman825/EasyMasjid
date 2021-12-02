
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import NavigationActivities from './navigation'



const styles = StyleSheet.create({
    donatetext:{
        alignSelf:'center',
        marginTop:55,
        fontSize:20,
        fontWeight:'400',
    },
  
    
})


function AllDayActivities() {
    return (
        <View>
            <ScrollView>
            <Text style={styles.donatetext}>
            Your All Day Activities
            </Text>
            <NavigationActivities/>
            </ScrollView>
        </View>
    )
}

export default AllDayActivities
