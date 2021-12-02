import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import AttendJamaat from './attendedJamat'
const data =[
    {title:'Namaz Fajjar',date:'  15 Faburary 2021  5:20am', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.",masjidTitle:"Asgar Masjid"},
    {title:'Namaz Zohar',date:'  15 Faburary 2021  5:20am', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.",masjidTitle:"Bilal Masjid"},
    {title:'Namaz Assar',date:'  15 Faburary 2021  5:20am', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.",masjidTitle:"Bilal Masjid"},
    {title:'Namaz Magreb',date:'  15 Faburary 2021  5:20am', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.",masjidTitle:"Asgar Masjid"},
    {title:'Namaz Esha',date:'  15 Faburary 2021  5:20am', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.",masjidTitle:"Asgar Masjid"},
]
  
function Activities() {
    return (
        <View style={{flexDirection:"row"}}>
            <ScrollView>
            {data.map(item=>
            <AttendJamaat title={item.title} date= {item.date} description={item.description}
            masjidName={item.masjidTitle}
            />)
            }
            </ScrollView>
        </View>
    )
}

export default Activities
