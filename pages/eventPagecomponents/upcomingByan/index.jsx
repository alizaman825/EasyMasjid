import React from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import EventItem from './bians/hajjrituals'
const data =[
    {title:'Learn Hajj Rituals, Manajaat',date:'  15th March 2021  8:00pm', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Quran Recitation & Memorization',date:'  15th March 2020  8:00pm', description:"grefdtgProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Duwa Tawwasul',date:'  15th March 2019  8:00pm', description:"fsdfvProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Salat al-Jumma',date:'  15th March 2019  8:00pm', description:"fsdfvProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
]
  
function UpcomingBian() {
    return (
        <View style={{flexDirection:"row"}}>
            <ScrollView>
            {data.map(item=>
            <EventItem title={item.title} date= {item.date} description={item.description}/>)
            }
            </ScrollView>
        </View>
    )
}

export default UpcomingBian
