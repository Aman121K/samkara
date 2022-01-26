import React from 'react'
import { View,Text } from 'react-native-animatable'
import BackgroundTheme from '../../../component/backgroundtheme'
import { heightPercentageToDP } from '../../../utility'

const KidsRewards = () => {
    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            <Text style={{color:'black'}}>Kids Rewards</Text>
        </View>
        </>
    )
}

export default KidsRewards
