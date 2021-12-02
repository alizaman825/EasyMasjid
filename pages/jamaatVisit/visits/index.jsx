import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import UpcomingVisit from './upcomingVisit'
const data =[
    {title:'Tablegee Jamat from Malesia ',date:'  15 - 20 Fab 2021', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Tablegee Jamat from Kazakistan ',date:'  18 - 25 Fab 2021', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Tablegee Jamat from India',date:'  22 - 28 Fab 2021', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Tablegee Jamat from Turkey',date:'  08 - 15 Mar 2021', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
]
  
function Visits() {
    return (
        <View style={{flexDirection:"row"}}>
            <ScrollView>
            {data.map(item=>
            <UpcomingVisit title={item.title} date= {item.date} description={item.description}/>)
            }
            </ScrollView>
        </View>
    )
}

export default Visits
