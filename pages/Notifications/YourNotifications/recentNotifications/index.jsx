import React, { useContext } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from '../../../../assets/avatar.jpeg'
import themeContext from '../../../config/themeContext'

const styles = StyleSheet.create({
    detailtextback:{
        

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

function RecentNotifications({title,description,masjidName,date}) {
  const theme = useContext(themeContext)

    return (
      <View>
          <View style={{backgroundColor:theme.background,
        width:'90%',
        height:100,
        borderRadius:8,
        alignSelf:'center',
        shadowColor:theme.background,
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 1,
   shadowRadius: 8,
   elevation: 2,
   flexDirection:"row",
   justifyContent:'space-evenly',
   marginTop:20,}}>
          <View>
            <Avatar
            rounded
            source={Icon}
            size={70}
            containerStyle={{marginTop:20}}

            />
          </View>
          <View >
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
              <Text style={{paddingTop:10,fontSize:18,color:theme.color}}>
              {title}
              </Text>
              <Text style={{fontSize:14,fontWeight:'400',paddingTop:10,color:theme.color}}>
              {date}
              </Text>
              </View>
              <Text style={{fontSize:15,marginTop:10,fontWeight:'200',color:theme.color}}>
              {description}
              </Text>
                <TouchableOpacity>
              <Text style={{color:"#05B678",fontSize:15,marginTop:10}}>
              {masjidName}
              </Text>
              </TouchableOpacity>
              </View>
              
          </View>
          </View>
      
    )
}

export default RecentNotifications
