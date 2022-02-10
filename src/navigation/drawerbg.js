import React from 'react';
import {View,Text, Image,ScrollView, TouchableOpacity,Share} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '../utility/index';
import Path from '../constants/imagePath';
const Drawerbg=({navigation})=>{
    const logout=()=>{
        navigation.navigate('Signin');
    }
    const shareApp= async()=>
    {
            try {
              const result = await Share.share({
                message:
                  'React Native | A framework for building native apps using React',
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              alert(error.message);
            }
        }
            

    return(
        <View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'700',lineHeight:22}}>John Doe</Text>
                    </View>
                    <View style={{marginLeft:wp('1%')}}>
                    <Text style={{fontSize:16,fontWeight:'bold',lineHeight:22}}>$100</Text>
                    </View>
          </View>
          <TouchableOpacity onPress={()=>shareApp()}>
          <View style={{flexDirection:'row',margin:wp('5%')}}>
              <View>
                    <Image source={Path.Share}></Image>
              </View>
              <View style={{marginLeft:wp('3%')}}>
                    <Text style={{fontSize:14,fontWeight:'700'}}>Invite friends</Text>
              </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logout()}>
          <View style={{flexDirection:'row',margin:wp('5%')}}>
              <View>
              <Image source={Path.Logout}></Image>
              </View>
              <View style={{marginLeft:wp('3%')}}>
                <Text style={{fontSize:14,fontWeight:'700'}}>Logout</Text>
              </View>
          </View>
          </TouchableOpacity>
        </View>
    )
}
export default Drawerbg;