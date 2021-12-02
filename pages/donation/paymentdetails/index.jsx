import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import CreditCard from './creditcard'

function PaymentDetails({navigation}) {
    return (
        <ScrollView>
    <CreditCard navigation={navigation}/>
    </ScrollView>
    )
}

export default PaymentDetails
