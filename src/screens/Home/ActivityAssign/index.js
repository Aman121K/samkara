import React, { useState } from 'react'
import { View ,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import DatePicker from 'react-native-date-picker'
import * as Utility from '../../../utility/index';
const Activityassign = ({navigation}) => {
    const [endDate,setEndDate]=useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [open1,setOpen1]=useState(false);
    const confirmApiHit= async()=>{
        await Utility.setInLocalStorge('taskAssign',1);
        navigation.navigate({ name: 'BottomTab'})
    }
    return (
        <>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-120%') }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                <View>
                    <Image source={Path.Backbutton} resizeMode="center" style={{margin:heightPercentageToDP('2%')}} ></Image>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
               
                <View>
                    <Image source={Path.Notification} style={{ height: 70, width: 70 }}></Image>
                </View>
                </TouchableOpacity>

            </View>
            <View style={{margin:'5%'}}>
                <Text style={{color:'black',fontSize:20,fontWeight:'600'}}>Activity Assigned Successfully</Text>
            </View>
            
            <View style={{backgroundColor:"white",width:'90%',marginLeft:'5%',borderRadius:10}}>
            <View style={{padding:10,backgroundColor:'#F2F2F2',borderRadius:10}}>
                <Text style={{color:'black',marginLeft:10}}>Reading</Text>
            </View>
            <View style={{flexDirection:'row',padding:10,borderRadius:10}}>
                <View>
                    <Image source={Path.Reading} style={{height:60,width:50}}></Image>
                </View>
                <View style={{width:'85%',padding:5}}>
                    <Text style={{color:'black',fontSize:12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor molestie integer sodales amet.</Text></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',padding:10}}>
                <View style={{flexDirection:'row',width:'45%',borderWidth:.5,borderRadius:6,justifyContent:'space-evenly'}}>
                    <TouchableOpacity  onPress={() => setOpen(true)}>
                    <Text style={{color:'black',marginTop:heightPercentageToDP('1.5%')}}>Start Date</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOpen(true)} >
                    <Image source={Path.Calender} style={{marginTop:heightPercentageToDP('1.5%')}} ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',padding:10,width:'45%',borderWidth:.5,borderRadius:6,justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={()=>setOpen1(true)}>
                <Text style={{color:'black',alignSelf:'center'}}>End Date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setOpen1(true)} >
                    <Image source={Path.Calender} ></Image>
                    </TouchableOpacity>
                </View>

            </View>
            </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{height:heightPercentageToDP('10%'),width:widthPercentageToDP('20%')}}>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                    </View>
                    <View style={{height:heightPercentageToDP('10%'),width:widthPercentageToDP('35%'),top:heightPercentageToDP('4%')}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Zyan Smith</Text>
                    </View>
                </View>
         
            <View style={{backgroundColor:'white',width:widthPercentageToDP('35%'),marginLeft:widthPercentageToDP('5%'),borderRadius:6,paddingBottom:20,marginTop:'2%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Giftlist')}>
                <Image source={Path.Edit} resizeMode="center" style={{alignSelf:'flex-end'}}></Image>
                </TouchableOpacity>
                <View style={{backgroundColor:"#F2F2F2",alignSelf:'center'}}>
                <Image source={Path.Bookgift}  resizeMode="center"></Image>
                </View>
            </View>           
         <TouchableOpacity onPress={()=>confirmApiHit()}>
         <View style={{width:widthPercentageToDP('90%'),backgroundColor:'#A7CECB',padding:10,borderRadius:6,margin:widthPercentageToDP('5%')}}>
                    <Text style={{fontWeight:'bold',fontSize:16,color:'white',alignSelf:'center'}}>Confirmed</Text>
            </View>
            </TouchableOpacity>
            <DatePicker
         mode="date"
         modal={true}
        open={open}
        date={date}
        onConfirm={(date) => {
          console.log("VIkas",date);
          setOpen(false)
          setDate(date)
          setNewDate(date);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
       <DatePicker
         mode="date"
         modal={true}
        open={open1}
        date={date}
        onConfirm={(date) => {
          console.log("VIkas",date);
          setOpen1(false)
          setDate(date)
        //   setNewDate(date);
        }}
        onCancel={() => {
          setOpen1(false)
        }}
      />
        </View>
    </>
    )
}

export default Activityassign
