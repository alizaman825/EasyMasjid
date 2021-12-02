import React from 'react'
import { View } from 'react-native'
import Event from '../bians/hajjrituals'
const data =[
    {title:'Learn Hajj Rituals, Manajaat',date:'  15th March 2021  8:00pm', description:"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Quran Recitation & Memorization',date:'  15th March 2020  8:00pm', description:"grefdtgProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Duwa Tawwasul',date:'  15th March 2019  8:00pm', description:"fsdfvProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
    {title:'Salat al-Jumma',date:'  15th March 2019  8:00pm', description:"fsdfvProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum"},
]
function OldBian() {
    return (
        <View>
            { data.map((items)=>
            <Event title={items.title} date= {items.date} description={items.description}/>
            )}
    </View>
    )
}

export default OldBian;
