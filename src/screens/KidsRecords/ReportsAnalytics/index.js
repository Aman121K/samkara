import React from 'react'
import { View ,Text,Image, ScrollView, TouchableOpacity} from 'react-native';
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import {LocaleConfig} from 'react-native-calendars';
import BackgroundTheme from '../../../component/backgroundtheme';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
const ReportsAnalytics = ({navigation}) => {
   
    return (
        <>
        <BackgroundTheme/>
       <ScrollView style={{marginTop:heightPercentageToDP('-120%')}}>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{alignSelf:'center'}}>
                <Image source={Path.Backbutton} style={{alignSelf:'center',marginLeft:10}}></Image>
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
            {/* <Calendar
  // Initially visible month. Default = now
  current={'2022-01-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow/>)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
//   showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={false}
  // Replace default month and year title with custom one. the function receive a date as parameter
  renderHeader={(date) => {/*Return JSX*/}
  {/* // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/> */} 
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
export default ReportsAnalytics
