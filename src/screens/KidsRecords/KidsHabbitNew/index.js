import React from 'react';
import {View,Text,Image} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const KidsHabbitNew=()=>{
    return(
        <View>
            <BackgroundTheme/>
            <View style={{marginBottom:hp('-120%')}}>
            <View>
                <Image source={Path.Zaya} resizeMode="center"></Image>
            </View>
            <View>
            <Text></Text>
            </View>
            </View>
        </View>
    )
    }
export default KidsHabbitNew;
