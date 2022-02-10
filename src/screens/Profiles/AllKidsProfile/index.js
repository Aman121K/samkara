import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
// import {   } from 'react-native-gesture-handler'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../utility';

const AllKidsprofile = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
    ])
    const renderItem = ({ item, index }) => {
        return (
                <TouchableOpacity activeOpacity={.9} onPress={()=>navigation.navigate('WelcomeScreen')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        <View>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{color:'black',fontSize:16,fontWeight:'500'}}>{item.name}</Text>
                            <Text style={{color:'black',fontWeight:'400',fontSize:11}} >{item.title}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:50}}>
                       <ProgressCircle
                       
            percent={item.value}
            radius={25}
            borderWidth={3}
            color={item.color}
            shadowColor="white"
            bgColor="white"
        >
            <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 12,color:'black' }}>{item.value}</Text>
            <Text style={{color:'black',marginLeft:2}}>%</Text>
            </View>
        </ProgressCircle>
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

            <View style={{alignSelf:'center',margin:'2%'}}>
                <Text style={{fontSize:22,fontWeight:'bold',color:'black'}}>
                    Kids Profile
                </Text>
            </View>
            <View style={{marginTop:heightPercentageToDP('5%')}}>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('KidsProfile')} activeOpacity={.9}>
            <View style={{flexDirection:'row',alignItems:'center',width:'50%',backgroundColor:'white',margin:'5%',padding:10,borderRadius:6}}>
                    <Image source={Path.plusIcon} style={{height:20,width:20}}>
                    </Image>
                    <Text style={{marginLeft:'5%',fontWeight:'bold',fontSize:16,color:'black'}}>Add More Kids</Text>
            </View>
            </TouchableOpacity>



{/* </ScrollView> */}
</View>
        </View>
    )
}

export default AllKidsprofile
