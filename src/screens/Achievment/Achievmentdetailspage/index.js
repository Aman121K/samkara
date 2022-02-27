import React from 'react'
import { View ,Text,Image, ScrollView,TouchableOpacity} from 'react-native';
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import {LocaleConfig} from 'react-native-calendars';
import BackgroundTheme from '../../../component/backgroundtheme';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
// import {  } from 'react-native-gesture-handler';
const AchievementDetails = ({navigation}) => {

    return (
        <>
        <BackgroundTheme/>
       <ScrollView style={{marginTop:heightPercentageToDP('-120%')}} showsVerticalScrollIndicator={false}>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{margin:heightPercentageToDP('2%')}} onPress={()=>navigation.goBack()}>
                <Image source={Path.Backbutton} resizeMode="center" style={{alignSelf:'center'}}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                <Image source={Path.Notification} style={{alignSelf:'center'}}></Image>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:'5%'}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#484C76'}}>Drinking Water</Text>
            </View>
            <View style={{flexDirection:'row',backgroundColor:'white',padding:10,justifyContent:'space-between',margin:'5%',borderRadius:6}}>
                <View>
                    <Image source={Path.Zaya} ></Image>
                </View>
                <View style={{alignSelf:'center'}}>
                    {/* <Image> */}
                    <Text style={{color:'#484C76',alignSelf:'center',fontSize:16,fontWeight:'500'}}>Zaya SMith </Text>
                    <View style={{flexDirection:'row'}}>
                        <Image source={Path.Notification} style={{height:30,width:30}}></Image>
                    <Text style={{color:'#484C76',fontSize:12,fontWeight:'400',alignSelf:'center'}}>Repeat everyday</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={Path.Notification} style={{height:30,width:30}}></Image>
                    <Text style={{color:'#484C76',fontSize:12,fontWeight:'400',alignSelf:'center'}}>Reminder  8.50 pm</Text>
                    </View>
                </View>
                <View>
                <ProgressCircle
                       
                       percent={60}
                       radius={25}
                       borderWidth={3}
                       color="red"
                       shadowColor="white"
                       bgColor="white"
                   >
                       <Text style={{ fontSize: 10,color:'#484C76',fontWeight:'600' }}>60%</Text>
                   </ProgressCircle>
                </View>
            </View>
            <View style={{backgroundColor:'white',margin:'5%',borderRadius:6}}>
        
<Calendar style={{borderRadius:6}}
/>
            </View>
            <View style={{backgroundColor:'white',margin:'5%',padding:10,borderRadius:6}}>
                <View>
                <Text style={{fontWeight:'400',fontSize:22,color:'#484C76',alignSelf:'center'}}>Analytics</Text>
                </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightPercentageToDP('2%')}}>
                   
                        <View style={{backgroundColor:'#f7f7f7',borderRadius:6,alignItems:'center',height:heightPercentageToDP('15%'),width:widthPercentageToDP('40%')}}>
                        <Image source={Path.A1} style={{top:-15}}></Image>
                        <View>
                            <Text style={{color:'#484C76',fontSize:20,fontWeight:'500'}}>20 Days</Text>
                            <Text style={{color:'#7B7B7B',fontSize:12,fontWeight:'500'}}>Longest Streak</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f7f7f7',borderRadius:6,alignItems:'center',height:heightPercentageToDP('15%'),width:widthPercentageToDP('40%')}}>
                        <Image source={Path.A2} style={{alignSelf:'center',top:-15}}></Image>
                        <View style={{padding:10,borderRadius:6,alignItems:'center'}}>
                        <Text style={{color:'#484C76',fontSize:20,fontWeight:'500'}}>25 Days</Text>
                            <Text style={{color:'#7B7B7B',fontSize:12,fontWeight:'500'}}>Current Streak</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:heightPercentageToDP('3%')}}>
                        <View style={{backgroundColor:'#f7f7f7',borderRadius:6,alignItems:'center',height:heightPercentageToDP('15%'),width:widthPercentageToDP('40%')}}>
                        <Image source={Path.A4} style={{alignSelf:'center',top:-15}}></Image>
                        <View style={{alignItems:'center'}}>
                            <Text style={{color:'#484C76',fontSize:20,fontWeight:'500'}}>98 % </Text>
                            <Text style={{color:'#7B7B7B',fontSize:12,fontWeight:'500'}}>Completion Rate</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#f7f7f7',borderRadius:6,alignItems:'center',height:heightPercentageToDP('15%'),width:widthPercentageToDP('40%')}} >
                            <Image source={Path.A4} style={{alignSelf:'center',top:-15}}></Image>
                            <View style={{alignItems:'center'}}>
                        <Text style={{color:'#484C76',fontSize:20,fontWeight:'500'}}>21 Days</Text>
                            <Text style={{color:'#7B7B7B',fontSize:12,fontWeight:'500'}}>Average Easiness Score</Text>
                            </View>
                        </View>
                    </View>
                   
            </View>
        </View>
        </ScrollView>
        </>
    )
}
export default AchievementDetails
