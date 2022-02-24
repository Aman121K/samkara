import React from 'react';
import {View,Text} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const KidsActivityNew=()=>{
    return(
        <View>
            <BackgroundTheme/>
            <View style={{marginBottom:hp('-120%')}}>
            <Text>Vikas</Text>
            </View>
        </View>
    )
    }
export default KidsActivityNew;
