import React, { useContext } from 'react'
import { Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import MasjidImage from '../../../assets/masjidImage.png'
import MapIcon from '../../../assets/mapicon.png'
import themeContext from '../../config/themeContext';



function MasjidTitle({title,description,navigation}) {
    const theme = useContext(themeContext)
    return (
        <View >
            <Text style={{color:theme.color,alignSelf:"center",
             margin:50,
             fontSize:24,
                fontWeight:"normal",}}>
            Badshahi Mosque
         </Text>
         <View style={{ width:"95%",
        height:420,
      borderRadius:20,
      alignSelf:'center',
      shadowColor: theme.background,
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
    backgroundColor:theme.background
    }}>
         <View>
         <Image
         style={{alignSelf:"center",width:'99.7%',borderRadius:20}}
         source={MasjidImage}
         />
         <View style={styles.showclockBtn} >
             <TouchableOpacity onPress={() => navigation.navigate("Clock")}>
             <Text style={{textAlign:'center',color:'white',padding:9}}>Show Clock</Text>
             </TouchableOpacity>
             
             </View>
             </View>
         <View>
             <Text  style={{fontSize:18,marginTop:20,marginLeft:10,fontWeight:"400",color:theme.color}}>
             {title}
             </Text>
            <View>
                <View style={{flexDirection:'row'}}>
                <Image
                source={MapIcon}
                style={{margin:10}}
                />
            <TouchableOpacity>
               <Text style={{color:"#05B678",textDecorationLine:'underline',marginTop:10,marginLeft:5,color:theme.color}}>See On Map!</Text>
             </TouchableOpacity>
             </View>
            </View>
             <Text style={{alignSelf:'center',  fontSize:12,fontWeight:'300',marginLeft:10,color:theme.color}}>
            {description}
             </Text>
             <View style={styles.subscribeBtn}>
             <TouchableOpacity>
                 <Text style={{textAlign:'center', fontSize:20, color:'white',padding:20}}>
                     Subscribe
                 </Text>
             </TouchableOpacity>
             </View>
         </View>
        </View>
        </View>
    )
}

export default MasjidTitle;
const styles = StyleSheet.create({
    container:{
       
 


    },
   maintitle:{
       
       
   },
   showclockBtn:{
    position:"absolute",
    marginTop:130,
 backgroundColor:'#05B678',
    height:37,
    width:120,
    marginLeft:220,
    borderRadius:40,
    fontSize:10,
   },
   subscribeBtn:{
       width:'90%',
       height:70,
       backgroundColor:"#05B678",
       borderRadius:20,
       margin:20,

   }

})