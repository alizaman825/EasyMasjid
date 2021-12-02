import React from 'react'
import { ScrollView, View } from 'react-native'
import YourMasjids from './allMasjids'

const data =[
    {name:"Nick Underwood",description:"dragging and dropping them.	",masjidTitle:"Abuhurera Masjid"},
    {name:"Nick Underwood",description:"dragging and dropping them.	",masjidTitle:"Abuhurera Masjid"},
    {name:"Nick Underwood",description:"dragging and dropping them.	",masjidTitle:"Abuhurera Masjid"},
    {name:"Nick Underwood",description:"dragging and dropping them.	",masjidTitle:"Abuhurera Masjid"},
    {name:"Nick Underwood",description:"dragging and dropping them.	",masjidTitle:"Abuhurera Masjid"},
]

function Masjids() {
    return (
       <View>
           <ScrollView>
               {
                   data.map(items => (
                       <YourMasjids personName={items.name} description={items.description} masjidTitle={items.masjidTitle}/>
                   ))
               }
           </ScrollView>
    

       </View>
    )
}

export default Masjids
