import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '../../../../assets/avatar.jpeg'

const styles = StyleSheet.create({
    detailtextback:{
        backgroundColor:'white',
        width:'90%',
        height:125,
        borderRadius:8,
        alignSelf:'center',
        shadowColor: 'lightgrey',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   flexDirection:"row",
   justifyContent:'space-evenly',
   marginTop:20,

    },
    donatebtn:{
        backgroundColor:"white",
        borderColor:"#05B678",
        borderWidth:1,
        borderRadius:30,
        height:27,
        width:98,
        marginTop:10,
        marginLeft:10
    }
})

function YourMasjids({personName,description,masjidTitle}) {
    return (
      <View>
          <View style={styles.detailtextback}>
          <View>
            <Avatar
            rounded
            source={Icon}
            size={70}
            containerStyle={{marginTop:20}}

            />
          </View>
          <View >
              <Text style={{paddingTop:10,fontSize:18,}}>
                  {personName}
              </Text>
              <Text style={{fontSize:14,fontWeight:'200',paddingTop:4}}>
                  {description}
              </Text>
              <TouchableOpacity>
              <Text style={{color:"#05B678",fontSize:15,marginTop:5}}>
                  {masjidTitle}
              </Text>
              </TouchableOpacity>
              <View style={{flexDirection:"row" ,justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.donatebtn}>
                  <Text style={{color:'#05B678',alignSelf:"center", paddingTop:5,fontSize:10}}>
                      Donate
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.donatebtn}>
                  <Text style={{color:'#05B678',alignSelf:"center",paddingTop:5,fontSize:10}}>
                     Unsubscribe
                  </Text>
              </TouchableOpacity>
              </View>
              
          </View>
          </View>
      </View>

    )
}

export default YourMasjids
