import React from 'react'
import { View ,Text,Image, ScrollView, TouchableOpacity} from 'react-native';
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import {LocaleConfig} from 'react-native-calendars';
import BackgroundTheme from '../../../component/backgroundtheme';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { heightPercentageToDP, widthPercentageToDP  } from '../../../utility';
const ReportsAnalytics = ({navigation}) => {
   
    return (
        <>
        <BackgroundTheme/>
       <ScrollView style={{marginTop:heightPercentageToDP('-120%')}} showsHorizontalScrollIndicator={false}>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>navigation.goBack()}>
                <Image source={Path.Backbutton} resizeMode="center" style={{alignSelf:'center',margin:10}}></Image>
                </TouchableOpacity>
            </View>
           
            <View style={{flexDirection:'row',backgroundColor:'white',padding:10,justifyContent:'space-between',margin:'5%',borderRadius:6}}>
                <View>
                    <Image source={Path.Zaya} style={{height:40,width:40}}></Image>
                </View>
                <View style={{width:widthPercentageToDP('50%')}}>
                  
                    <Text style={{color:'#484C76',fontSize:16,fontWeight:'500'}}>Drinking Water </Text>
                    <Text style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                           
                </View>
                <View>
                <ProgressCircle
                       percent={70}
                       radius={25}
                       borderWidth={3}
                       color="red"
                       shadowColor="white"
                       bgColor="white"
                   >
                       <Text style={{ fontSize: 10,color:'#484C76',fontWeight:'600' }}>70%</Text>
                   </ProgressCircle>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'5%',borderRadius:6}}>
  
<Calendar style={{borderRadius:6}}
 
/>
            </View>
            <TouchableOpacity>
           <View style={{backgroundColor:'#A7CECB',width:widthPercentageToDP('90%'),alignSelf:'center',padding:10,borderRadius:10,alignItems:'center',marginTop:heightPercentageToDP('3%')}}>
               <Text style={{color:'white',fontSize:20,fontWeight:'800'}}>Remind Parents for Approval</Text>
           </View>
           </TouchableOpacity>
           <View style={{backgroundColor:'white',width:widthPercentageToDP('90%'),alignSelf:'center',borderRadius:10,padding:10,flexDirection:'row',justifyContent:'space-evenly',marginTop:heightPercentageToDP('5%')}}>
               <View style={{alignItems:'center'}}>
                    <Image source={Path.Gift} style={{alignSelf:'center'}}></Image>
               </View>
               <View>
                    <Text style={{fontSize:16,fontWeight:'500',lineHeight:22}}>Reward on completion</Text>
                    <Text style={{fontSize:12,fontWeight:'300',lineHeight:18}}>Some description of reward</Text>
                    <TouchableOpacity>
                    <View style={{backgroundColor:'#A7CECB',width:widthPercentageToDP('50%'),alignSelf:'center',padding:5,borderRadius:10,alignItems:'center',margin:'2%'}}>
               <Text style={{color:'white',fontSize:13,fontWeight:'400'}}>Remind Parents for Approval</Text>
           </View>
           </TouchableOpacity>
               </View>
           </View>
           
        </View>
        </ScrollView>
        </>
    )
}
export default ReportsAnalytics
