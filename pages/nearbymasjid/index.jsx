import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../../assets/logo2.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import Icon1 from '../../assets/avatar.jpeg'
import { Icon } from 'native-base'


const styles = StyleSheet.create({

    searchInput:{
        width:'70%',
        height:60,
        backgroundColor:'white',
        borderColor:'white',
        borderWidth:1,
        borderRadius:30,
        alignSelf:'center',
        paddingLeft:10

    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'85%',
        borderRadius:30,
        alignSelf:'center',
    },
    searchIcon: {
        padding:2,
        paddingLeft:30,
        color:"#05B678",
    },
    input: {
        
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    shuffleicon:{
        paddingRight:20,
        color:"#05B678",
    }

})

function LocateMasjid({navigation}) {
    return (
        <View>
            <View style={{borderBottomLeftRadius:40,borderBottomRightRadius:40,overflow:'hidden'}}>
            <LinearGradient
            colors={['#01526D', '#008E74',]}
            style={{height:300}}
            >
                <View style={{flexDirection:'row',flex:1,width:'90%',alignSelf:'center',justifyContent:'space-between',marginTop:70,maxHeight:100}}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image
                    source={Logo}
                    style={{
                        width:50,
                        height:70
                    }}
                    
                    />
                    </TouchableOpacity>
                    <Avatar
                    source={Icon1}
                    rounded
                    size={60}
                    />
                </View>
                <View style={styles.searchSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("Masjid Details")}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="#05B678"/>
                </TouchableOpacity>
                <TextInput
                placeholder="Search a Masjid"
                style={styles.searchInput}
                />
                <TouchableOpacity>
                <Icon  name="ios-shuffle" size={20} color="#05B678" style={styles.shuffleicon}/>
                </TouchableOpacity>
                </View>

            </LinearGradient>
            </View>
        </View>
    )
}

export default LocateMasjid
