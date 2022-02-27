import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, ImageBackground, Button, TouchableOpacity ,FlatList,Share} from 'react-native';
import Path from '../../constants/imagePath';
import Modal from "react-native-modal";
import  openDrawer  from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import BackgroundTheme from '../../component/backgroundtheme';
import ProgressCircle from 'react-native-progress-circle'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../utility';
import * as Utility from '../../utility/index';
const Home = ({ navigation ,route}) => {
    const [like,setLike]=useState(104);
    const [userTask,setUserTask]=useState();
    const [isProfile,setIsProfile]=useState(false);
    const [homeHabbit, setHomeHabbit] = useState([
        { id: 'Swimming', image: Path.Swimming, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Healthy Eating', image: Path.Eating, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Reading', image: Path.Reading, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        {
            id: 'Wake up early', image: Path.Wakeup, title: 'Malesuada eros ipsum integer nisi suspen....', display: true
        }
    ])
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {

        setModalVisible(false)
        navigation.navigate("Habbitsone")
    };
    const counFunction=()=>{
        setLike(like+1);
    }
    const [date,setDate]=useState([
        {id:1,day:'Sun',date:'17',borderColor:'green',value:100},
        {id:2,day:'Mon',date:'18',borderColor:'red',value:70},
        {id:3,day:'Tue',date:'19',borderColor:'black',value:60},
        {id:4,day:'Wed',date:'20',borderColor:'AF010A',value:40},
        {id:5,day:'Thr',date:'21',borderColor:'484C76',value:100},
        {id:6,day:'Fri',date:'22',borderColor:'green',value:30},
        {id:7,day:'Sat',date:'22',borderColor:'green',value:90},
    ])
    useEffect(()=>{
        getData();
    
    },[])
    const getData= async()=>{
        var task=await Utility.getFromLocalStorge('taskAssign');
        setUserTask(task);
    }
    const renderItem1=({item,index})=>{
        return(
            <View style={{borderWidth:1,borderColor:item.borderColor,padding:5,borderRadius:6,width:wp('12%'),margin:'1%',alignItems:'center',height:hp('7%')}}>
            <TouchableOpacity >
        <Text style={{color:'black'}}>{item.day}</Text>
        <Text style={{color:'black'}}>{item.date}</Text>
        </TouchableOpacity>
        </View>
        )
    }
    const logout=()=>{
        setIsProfile(false);
        navigation.navigate('Signin');
    }
    const shareApp= async()=>
    {
        setIsProfile(false);
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
    return (
        <View>
            <ScrollView style={{ backgroundColor: '#CDE5E4' }} showsVerticalScrollIndicator={false}>
                <BackgroundTheme />
                <View style={{ marginTop: hp('-120%'), width: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ margin: '5%', flexDirection: 'row' }}>
                            <View>
                                {/* <TouchableOpacity onPress={()=> navigation.openDrawer()}> */}
                                <TouchableOpacity onPress={()=>setIsProfile(true)}>
                                    <Image source={Path.Zaya} style={{ width: 40, height: 40 }}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: '10%' }}><Text style={{ color: 'black' }}>$100</Text></View>
                        </View>

                        <View style={{ alignItems: 'center', top: -15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Image source={Path.Notification}  style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ padding: 5, backgroundColor: 'white', marginLeft: '4%', marginRight: '4%', marginBottom: '4%', borderRadius: 10 }}>
                        <ImageBackground source={Path.HomeGirl} resizeMode="contain" >
                            <View style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 10, borderRadius: 20 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>WE FIRST MAKE OUR HABITS</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>THEN OUR HABITS</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>MAKES US</Text>
                            </View>
                        </ImageBackground>
                    </View>
                 {!userTask?
                 <>
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '700' }}>Now Pick Habits For Your Kids</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                        
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Swimming</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('2%') }}>
                                <TouchableOpacity>
                                <Image source={Path.Homeuser}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>100</Text>
                                <TouchableOpacity onPress={()=>counFunction()}>
                                <Image source={Path.Homelike}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>{like}</Text>
                            </View>

                        </View>
                        
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Healthy Eating</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('2%') }}>
                                <Image source={Path.Homeuser} ></Image>
                                <Text style={{ color: 'black' }}>105</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}> Swimming</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('2%') }}>
                                <Image source={Path.Homeuser}></Image>
                                <Text style={{ color: 'black' }}>104</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Healthy Eating</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('2%') }}>
                                <Image source={Path.Homeuser}></Image>
                                <Text style={{ color: 'black' }}>104</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                    </View>
                    </>:
                   <>
                   <View style={{marginLeft:'5%'}}>
                       <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '700' }}>Current Activity</Text>
                   </View>
                      <View style={{margin:'4%',backgroundColor:'white',padding:10,borderRadius:10}}>
                <TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View>
                        <Image source={Path.Zaya} style={{height:30,width:30}}></Image>
                    </View>
                    <View style={{marginRight:'30%'}}>
                        <Text style={{fontSize:16,fontWeight:'500',color:'black'}}>Zyan Smith</Text>
                        </View>
                        <View>
                        <ProgressCircle
            percent={10}
            radius={25}
            borderWidth={3}
            color={'#D26F83'}
            shadowColor="white"
            bgColor="white"
        >
            <Text style={{ fontSize: 12,color:'black' }}>10 %</Text>
        </ProgressCircle>
                        </View>
                        <View>
                        <Image source={Path.ThreeOne}></Image>
                        </View>
                </View>
                <View style={{margin:'2%'}}>
                <FlatList
                             data={date}
                             renderItem={renderItem1}
                             keyExtractor={item => item.id}
                              numColumns={date.length}
                             contentContainerStyle={{ flexGrow: 1 }}
                             scrollEnabled={false}
                           
                            >

                            </FlatList>
     
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize:14,fontWeight:'500',color:'black'}}>Drinking Water</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity>
                        <View>
                            <Image source={Path.pause}></Image>
                        </View>
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}><Text style={{fontSize:10,fontWeight:'400',color:'#484C76'}}>Stop</Text></View>
                    </View>
                </View>
                </TouchableOpacity>
            </View></>
                    }
                    <View>
                        <Text style={{ color: '#484C76', marginLeft: '5%', fontSize: 18, fontWeight: '700',top:5 }}>Trending Habits</Text>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("Habbitsone")}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, marginTop: hp('2%'), borderRadius: 10,width:wp('90%'),alignSelf:'center' }}>
                        <View style={{ backgroundColor: '#FFBF7F' }}>
                            <Text>.</Text>
                        </View>
                        <View>
                            <Image source={Path.wakeupOne}></Image>
                        </View>
                        <View>
                            <Text style={{ color: 'black' }}>Groupo 72- Equipo 1</Text>
                            <Text style={{ color: 'black' }}>Arquitectura de software IDGS7-1</Text>
                            <Text style={{ color: 'black' }}>Periodo determinado</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={Path.ThreeOne}></Image>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate("Habbitsone")}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, margin: '5%', marginTop: hp('2%'), borderRadius: 10,width:wp('90%'),alignSelf:'center' ,marginBottom:hp('12%')}}>
                        <View style={{ backgroundColor: '#FFBF7F' }}>
                            <Text>.</Text>
                        </View>
                        <View>
                            <Image source={Path.wakeupOne}></Image>
                        </View>
                        <View>
                            <Text style={{ color: 'black' }}>Groupo 72- Equipo 1</Text>
                            <Text style={{ color: 'black' }}>Arquitectura de software IDGS7-1</Text>
                            <Text style={{ color: 'black' }}>Periodo determinado</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={Path.ThreeOne}></Image>
                        </View>
                    </View>
                    </TouchableOpacity>

                    <Modal isVisible={isModalVisible}>
                        <View style={{ backgroundColor: 'white', width: '100%', borderRadius: 10 }}>
                            <View style={{ alignSelf: 'center', marginTop: -30, backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: '#484C76' }}>
                                <Image source={Path.AlertChild} resizeMode="contain"></Image>
                            </View>
                            <View style={{ alignSelf: 'flex-end',top:-45, backgroundColor: 'white', padding: 10, borderRadius: 20 }}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Image source={Path.Cross}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignSelf: 'center', top: -30 }}>
                                <Image source={Path.Alertgirl}  style={{height:150,width:150}}></Image>
                            </View>
                            <View style={{ marginLeft: 20, top: -40 }}>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76'
                                }}>Habit will cost 30 Samskara </Text>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76',alignSelf:'center'
                                }}>Points!</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: -20 }}>
                                <TouchableOpacity onPress={() => toggleModal()} >
                                    <View style={{ padding: 5, borderColor: 'green', borderWidth: 1, borderRadius: 6 }}>
                                        <View style={{ flexDirection: 'row', padding: 5 }}>
                                            <View>
                                                <Image source={Path.Alertok} style={{ alignSelf: 'center',height:15,width:15,top:3 }}></Image>
                                            </View>
                                            <View style={{marginLeft:10,alignSelf: 'center'}}>
                                                <Text style={{ color: 'green' }}>Accept</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <View style={{ padding: 5, borderColor: 'red', borderWidth: 1,  borderRadius: 6 }}>
                                        <View style={{ flexDirection: 'row', padding: 5 }}>
                                        <View>
                                            <Image source={Path.AlertCancel} style={{ alignSelf: 'center',height:15,width:15,top:3 }}></Image>
                                        </View>
                                        <View style={{ alignSelf: 'center' ,alignSelf:'center',marginLeft:10}}>
                                            <Text style={{ color: 'red' }}>Later</Text>
                                        </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Modal isVisible={isProfile} onRequestClose={() => {setIsProfile(false)}}>
                            <View style={{backgroundColor:'white',padding:10,borderRadius:10}}>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>setIsProfile(false)}>
                               <Image source={Path.Cross}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginLeft:wp('20%')}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Samskara</Text>
                                </TouchableOpacity>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'700',lineHeight:22,color:'black'}}>John Doe</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',lineHeight:22}}>$100</Text>
                    </View>
          </View>
          <TouchableOpacity onPress={()=>shareApp()}>
          <View style={{flexDirection:'row',margin:wp('3%')}}>
              <View>
                    <Image source={Path.Share}></Image>
              </View>
              <View style={{marginLeft:wp('3%')}}>
                    <Text style={{fontSize:14,fontWeight:'700'}}>Invite friends</Text>
              </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logout()}>
          <View style={{flexDirection:'row',margin:wp('3%')}}>
              <View>
              <Image source={Path.Logout}></Image>
              </View>
              <View style={{marginLeft:wp('3%')}}>
                <Text style={{fontSize:14,fontWeight:'700'}}>Logout</Text>
              </View>
          </View>
          </TouchableOpacity>
                            </View>
                </Modal>


                </View>
            </ScrollView>
        </View>
    )
}

export default Home
