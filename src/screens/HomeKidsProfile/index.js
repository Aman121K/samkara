

import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView } from 'react-native'
import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../component/backgroundtheme';
import { heightPercentageToDP } from '../../utility';

const Homekidsprofile = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Zyan Smith', image: Path.Zyan, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 2, name: 'Harry Smith', image: Path.Harry, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 3, name: 'Kia Sam', image: Path.Kia, title: 'Periodo determinado', value: 35, color: '#467F9B' },
        { id: 4, name: 'John Den', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
    ])
    const renderItem = ({ item, index }) => {
        return (
                // <TouchableOpacity activeOpacity={.9} onPress={()=>navigation.navigate('KidsProfileShow')}>
                <TouchableOpacity onPress={()=>navigation.navigate('KidsProfileShow')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        <View>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{color:'#484C76',fontSize:16,fontWeight:'900'}}>{item.name}</Text>
                            <Text style={{color:'#484C76'}}>{item.title}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:'15%'}}>
                       <ProgressCircle
                       
            percent={item.value}
            radius={25}
            borderWidth={3}
            color={item.color}
            shadowColor="white"
            bgColor="white"
        >
            <Text style={{ fontSize: 12 ,color:'#484C76'}}>{item.value}</Text>
        </ProgressCircle>
                           </View>
                    </View>
                </TouchableOpacity>
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%') }}>
            {/* <ScrollView> */}
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{marginLeft:'85%'}}>
                <View>
                    <Image source={Path.Notification} style={{ height: 70, width: 70 }}></Image>
                </View>
                </TouchableOpacity>
            <View style={{alignSelf:'center', marginTop:'5%'}}>
                <Text style={{fontSize:22,fontWeight:'bold',color:'#484C76'}}>
                    Kids profile
                </Text>
            </View>
            <View style={{marginTop:'5%'}}>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
            


{/* </ScrollView> */}
        </View>
        </>
    )
}

export default Homekidsprofile

