import React,{useState,useEffect} from 'react';
import {ImageBackground, View,Image,Text} from 'react-native'
import { heightPercentageToDP } from '../../../utility';
import * as Utility from '../../../utility';
// import GifImage from '@lowkey/react-native-gif';
const Splash = ({navigation}) => {
    useEffect(() => {
        timeoutHandle = setTimeout(() => {
          retrieveData();
          
        }, 1000);
      }, []);
      const retrieveData = async () => {
        await Utility.setInLocalStorge('taskAssign','')
        navigation.navigate('Onboarding')
      };
  return <View>
      <View style={{marginTop:heightPercentageToDP('30%'),alignSelf:'center'}}>
        {/* <Image source={require('../../../assets/splash.png')}></Image> */}
          <Text style={{fontSize:30,fontWeight:'900'}}>Samkara Mindful</Text>
      </View>
      {/* <GifImage
  source={require('../../../assets/splash.gif')}
  style={{
    width: 100,
    height: 100,
  }}
  resizeMode={'cover'}
/>; */}
  </View>;
};

export default Splash;
