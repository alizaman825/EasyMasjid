import React from 'react'
import { View } from 'react-native'
import PropertiesComponent from './propertiesData'

const data = [
    {title:"Imam Sab" ,description:"Hafiz Ali live in Masjid Madrisa",},
    {title:"Moazan" ,description:"This mosque has 2 Moazan  Aslam and Hafiz Arashad",},
    {title:"Air-Conditions" ,description:"This mosque has 4 Air-conditions",status:"4 Active"},
    {title:"Heaters" ,description:"This mosque has 6 Air-conditions",status:"6 Active"},
    {title:"Wazoo Khana" ,description:"This mosque has 2 Wazoo Khana",status:"2 Active"},
    {title:"Toilats" ,description:"This mosque has 6 Toilats",status:"6 Active"},
    {title:"Support Tableghi Jamaat Stays" ,description:"This mosque has 2 Moazan  Aslam and Hafiz Arashad",}
]

function Properties() {
    return (
        <View>
            {
                data.map(items =>
                    (
                        <PropertiesComponent title={items.title} description={items.description} status={items.status}/>
                    ))
            }
           

        </View>
    )
}

export default Properties
