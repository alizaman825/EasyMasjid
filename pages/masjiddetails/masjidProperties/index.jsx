
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PropertiesIcon from '../../../assets/masjidPropertiesicon.png'
import EventIcon from '../../../assets/eventIcon.png'
import ListenIcon from '../../../assets/listenIcon.png'
import ClockIcon from '../../../assets/clockIcon.png'
import TablageeIcon from '../../../assets/tableeghIcon.png'
import EtqafIcon from '../../../assets/etqafIcon.png'
import MasjidNeedsIcon from '../../../assets/masjidNeedsicon.png'
import DonateIcon from '../../../assets/donateIcon.png'
import themeContext from '../../config/themeContext'



function MasjidDetailsOptions({navigation}) {
    const theme = useContext(themeContext);
    return (
        <>
     <View style={{flexDirection:'row', width:'90%'}}>
      <View style={{width:'50%',
        height:90,
        marginTop:20,
        marginLeft:10,
        backgroundColor:theme.background,
        borderRadius:20,
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   }}>
          <TouchableOpacity onPress={() => navigation.navigate("Masjid Properties")}>
              <Image
              source={PropertiesIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
                  Masjid Properties
              </Text>
          </TouchableOpacity>
      </View>
      <View style={{  width:'50%',
            height:90,
            marginTop:20,
            marginLeft:20,
            backgroundColor:theme.background,
            borderRadius:20,
            shadowColor:theme.background,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 1,
       shadowRadius: 8,
       elevation: 2,}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Events")}>
              <Image
              source={EventIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
                  Events
              </Text>
          </TouchableOpacity>
      </View>
     </View>
     <View style={{flexDirection:'row', width:'90%'}}>
     <View  style={{width:'50%',
        height:90,
        marginTop:20,
        marginLeft:10,
        backgroundColor:theme.background,
        borderRadius:20,
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   }}>
          <TouchableOpacity onPress={()=> navigation.navigate("Listen Live")}>
              <Image
              source={ListenIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Listen Live
              </Text>
          </TouchableOpacity>
      </View>
      <View style={{  width:'50%',
            height:90,
            marginTop:20,
            marginLeft:20,
            backgroundColor:theme.background,
            borderRadius:20,
            shadowColor:theme.background,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 1,
       shadowRadius: 8,
       elevation: 2,}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Clock")}>
              <Image
              source={ClockIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Show Clock
              </Text>
          </TouchableOpacity>
      </View>
     </View>
     <View style={{flexDirection:'row', width:'90%'}}>
     <View  style={{width:'50%',
        height:90,
        marginTop:20,
        marginLeft:10,
        backgroundColor:theme.background,
        borderRadius:20,
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   }}>
          <TouchableOpacity  onPress={()=> navigation.navigate("Tableegh Jamaat Visit")} >
              <Image
              source={TablageeIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Tablagee Jamat Visit
              </Text>
          </TouchableOpacity>
      </View>
      <View style={{  width:'50%',
            height:90,
            marginTop:20,
            marginLeft:20,
            backgroundColor:theme.background,
            borderRadius:20,
            shadowColor: theme.background,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 1,
       shadowRadius: 8,
       elevation: 2,}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Etqaf Registration")}>
              <Image
              source={EtqafIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Etqaf Registration
              </Text>
          </TouchableOpacity>
      </View>
     </View>
     <View style={{flexDirection:'row', width:'90%',marginBottom:40}}>
     <View  style={{width:'50%',
        height:90,
        marginTop:20,
        marginLeft:10,
        backgroundColor:theme.background,
        borderRadius:20,
        shadowColor: theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   }}>
          <TouchableOpacity  onPress={()=> navigation.navigate("Masjid Needs")}>
              <Image
              source={MasjidNeedsIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Masjid Needs
              </Text>
          </TouchableOpacity>
      </View>
      <View style={{  width:'50%',
            height:90,
            marginTop:20,
            marginLeft:20,
            backgroundColor:theme.background,
            borderRadius:20,
            shadowColor: theme.background,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 1,
       shadowRadius: 8,
       elevation: 2,}}>
          <TouchableOpacity onPress={()=> navigation.navigate("Donate")}>
              <Image
              source={DonateIcon}
              style={{alignSelf:"center",margin:15}}
              />
              <Text style={{textAlign:"center",fontWeight:'bold',fontSize:14,color:theme.color}}>
              Donate
              </Text>
          </TouchableOpacity>
      </View>
     </View>
   </>
    )
}

export default MasjidDetailsOptions
