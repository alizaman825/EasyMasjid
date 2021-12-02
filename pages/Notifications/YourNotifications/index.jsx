import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import RecentNotifications from './recentNotifications'
const data =[
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
    {title:'Nick Underwood',description:'dragging and dropping them.', masjidTitle:"Abuhurera Masjid",date:"03:05"},
]
  
function Notifications() {
    return (
        <View style={{flexDirection:"row"}}>
            <ScrollView>
            {data.map(item=>
            <RecentNotifications 
            masjidName={item.masjidTitle}
            title={item.title}
            description={item.description}
            date={item.date}
            />)
            }
            </ScrollView>
        </View>
    )
}

export default Notifications
