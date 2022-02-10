import React, { useState } from 'react'
import { View ,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { heightPercentageToDP } from '../../../utility';
import DatePicker from 'react-native-date-picker'
const Activityassign = ({navigation}) => {
    // const [startDate,setStartDate]=useState();
    const [endDate,setEndDate]=useState();
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [open1,setOpen1]=useState(false);
    return (
        <>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-120%') }}>
            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                <View>
                    <Image source={Path.Backbutton} style={{margin:heightPercentageToDP('2%')}} ></Image>
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
                    <Text style={{color:'black',alignSelf:'center'}}>Start Date</Text>
                    <TouchableOpacity onPress={() => setOpen(true)} >
                    <Image source={Path.Calender} style={{marginTop:heightPercentageToDP('1.5%')}} ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',padding:10,width:'45%',borderWidth:.5,borderRadius:6,justifyContent:'space-evenly'}}>
                <Text style={{color:'black',alignSelf:'center'}}>End Date</Text>
                <TouchableOpacity onPress={()=>setOpen1(!open1)} >
                    <Image source={Path.Calender} ></Image>
                    </TouchableOpacity>
                </View>

            </View>
            </View>
                <View style={{flexDirection:'row'}}>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black',alignSelf:'center'}}>Zyan Smith</Text>
                </View>
         
            <View style={{padding:5,backgroundColor:'white',width:'45%',alignItems:'center',margin:'3%',borderRadius:6}}>
                
                <View style={{backgroundColor:'#F2F2F2',padding:5}}>
                <Image source={Path.Edit} style={{height:5,width:5}} style={{alignSelf:'flex-end'}}></Image>
                <Image source={Path.Bookgift} ></Image>
               
                </View>
            </View>           
         <TouchableOpacity onPress={()=>navigation.navigate({ name: 'BottomTab',params: {itemID:true}})}>
         <View style={{width:'80%',backgroundColor:'#A7CECB',padding:10,borderRadius:6,margin:'10%'}}>
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
