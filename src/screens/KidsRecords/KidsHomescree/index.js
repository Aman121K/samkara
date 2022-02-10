

import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView, ImageBackground,TouchableOpacity } from 'react-native'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import CalendarStrip from 'react-native-slideable-calendar-strip';
const KidsHomeScreen = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Task 1', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Task 2', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Task 3', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
    ])
    const [date,setDate]=useState([
        {id:1,day:'Sun',date:'17',borderColor:'green',value:100},
        {id:2,day:'Mon',date:'18',borderColor:'red',value:70},
        {id:3,day:'Tue',date:'19',borderColor:'black',value:60},
        {id:4,day:'Wed',date:'20',borderColor:'AF010A',value:40},
        {id:5,day:'Thr',date:'21',borderColor:'484C76',value:100},
        {id:6,day:'Fri',date:'22',borderColor:'green',value:30},
        {id:7,day:'Sat',date:'22',borderColor:'green',value:90},
    ])
    const renderItem1=({item,index})=>{
        return(
            <View style={{borderWidth:1,borderColor:item.borderColor,padding:5,borderRadius:6,width:widthPercentageToDP('12%'),margin:'1%',alignItems:'center',height:heightPercentageToDP('7%')}}>
            <TouchableOpacity >
        <Text style={{color:'black'}}>{item.day}</Text>
        <Text style={{color:'black'}}>{item.date}</Text>
        </TouchableOpacity>
        </View>
        )
    }
    const renderItem = ({ item, index }) => {
        return (
                <TouchableOpacity onPress={()=>navigation.navigate('KidsActivity')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        
                        <View style={{alignItems:'center',marginLeft:'5%',padding:10}}>
                            <Text style={{color:'black',fontSize:16,fontWeight:'500'}}>{item.name}</Text>
                            <Text style={{color:'black',fontWeight:'400',fontSize:11}} >{item.title}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:90}}>
                           <ImageBackground source={Path.RIng} style={{height:40,width:40}}>
                      <Image source={Path.Homelike} style={{margin:10}}></Image>
                      </ImageBackground>
                           </View>
                    </View>
                </TouchableOpacity>
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <View>
            <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            {/* <ScrollView> */}
            <View style={{ flexDirection: 'row', justifyContent:'space-between',alignItems:'center' }}>
                <View>
                    <TouchableOpacity>
                    <Image source={Path.JohnDoe} style={{ height: 70, width: 70 }}></Image>
                    </TouchableOpacity>
                </View>
               
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <Image source={Path.Notification} style={{ height: 70, width: 70 }}></Image>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <View style={{marginLeft:'5%'}}>
                    <Text style={{fontSize:16,fontWeight:'800',color:'#484C76'}}>Today Task</Text>
                </View>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
            <View style={{marginLeft:'5%', top:10}}>
                <Text style={{fontWeight:'700',fontSize:18,color:'#484C76'}}>Assign Habbits</Text>
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
            percent={100}
            radius={25}
            borderWidth={3}
            color={'#D26F83'}
            shadowColor="white"
            bgColor="white"
        >
            <Text style={{ fontSize: 12,color:'black' }}>100 %</Text>
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
            </View>
            <View style={{margin:'4%',backgroundColor:'white',padding:10,borderRadius:10}}>
                <TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View>
                        <Image source={Path.Zaya} style={{height:30,width:30}}></Image>
                    </View>
                    <View style={{marginRight:'30%'}}>
                        <Text style={{fontSize:16,fontWeight:'500',color:'black'}}>Harry Smith</Text>
                        </View>
                        <View>
                        <ProgressCircle
            percent={70}
            radius={25}
            borderWidth={3}
            color={'#D26F83'}
            shadowColor="white"
            bgColor="white"
        >
            <Text style={{ fontSize: 12,color:'black' }}>70 %</Text>
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
            </View>
         



{/* </ScrollView> */}
</View>
        </View>
    )
}

export default KidsHomeScreen
