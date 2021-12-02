import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import MasjidDetailsOptions from './masjidProperties'
import MasjidTitle from './masjidTitle'

const data = [
    {title:"Badshahi Mosque",description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
]


function MasjidDetails({navigation}) {
    return (
        <View>
            <ScrollView>
            <View>
                {
                    data.map(items=>
                    <MasjidTitle navigation={navigation} title={items.title} description={items.description}/>
                    )
                }
               
                </View>
                <View>
                    <MasjidDetailsOptions navigation={navigation}/>
                </View>
                </ScrollView>

        </View>
    )
}

export default MasjidDetails
