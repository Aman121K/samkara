// import React from 'react'
// import { View ,Text} from 'react-native'
// const KidsProfileedits = () => {
//     return (
//         <View style={{backgroundColor:'#A7CECB',height:'100%',width:'100%'}}>
//             <Text>Self Profile</Text>
//         </View>
//     )
// }
// export default KidsProfileedits

import React,{useState} from 'react';
import {View, Text, Image, ScrollView,FlatList, TouchableOpacity,TextInput} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
const KidsProfileedits = ({navigation}) => {
    const [habbits, setHabbits] = useState([
        {
            id: 1,
            name: 'Eating Healthy'
        },
        {
            id: 2,
            name: 'Physical Fitness'
        },
        {
            id: 3,
            name: 'Singing'
        },
        {
            id: 4,
            name: 'Money Savings Skills'
        },
        {
            id: 5,
            name: 'Helping with Chores'
        },
    ])
    const [interset, setInterest] = useState([
        {
            id: 1,
            name: 'Cycling'
        },
        {
            id: 2,
            name: 'Reading'
        },
        {
            id: 3,
            name: 'Dancing'
        },
        {
            id: 4,
            name: 'Wake up early'
        },
        {
            id: 5,
            name: 'Tennis'
        },
        {
            id: 6,
            name: 'Badminton'
        },
        {
            id: 7,
            name: 'Piano'
        },
    ])

   
     
    const renderItem = ({ item,index }) => {
        return (
            <TouchableOpacity  >
            <View style={{ backgroundColor: '#EAEAEA', borderRadius: 6, justifyContent: 'space-around', alignItems: 'center', marginLeft: '5%',  margin: '1.5%',padding:2,flexDirection:'row' }}>
                {item.status?
                <Image source={require('../../../assets/rcheck.png')} style={{height:10,width:10}}></Image>:null}
                <Text style={{ color: "#9E9E9E", padding: 6 }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        );
        }

        const updateProfileAPi=()=>{
            
        }
  return (
      <>
      <BackgroundTheme/>
    <View style={{marginTop:'-230%'}}>
      <ScrollView>
         
        <View style={{alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity>
            <Image source={Path.Backbutton} style={{marginLeft:10}}></Image>
            </TouchableOpacity>
          <Text style={{fontSize:22,fontWeight:'bold',color:'black',marginLeft:widthPercentageToDP('30%')}}>Kids Profile</Text>
        </View>
        <View style={{alignItems:'center',margin:'2%'}}>
          <Image
            source={Path.Zaya}
            style={{height: 100, width: 100, borderRadius: 50}}></Image>
          <View style={{top:-20}}>
             <TouchableOpacity  onPress={() => chooseFile('photo')}>
              
           <Image source={Path.Camera} style={{tintColor:'white',height:20,width:20,marginLeft:40}}></Image>
           </TouchableOpacity>
           </View>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                    <TextInput
                        style={{ marginLeft: 10 ,color:'black'}}
                        placeholder="Name or Nick Name *"
                        value="Harry smith"
                        placeholderTextColor="black"
                        autoCapitalize="none"
                        value="Harry Smith"
                    />
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                    <TextInput
                        style={{ marginLeft: 10,color:'black' }}
                        placeholder="Name or Nick Name *"
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize="none"
                        value="Zoo"
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
                        <TextInput
                            style={{ marginLeft: 10,color:'black' }}
                            placeholder="Age*"
                            value="5"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={{ marginLeft: widthPercentageToDP('20%%')}}>
                            <Image source={require('../../../assets/CalendarVector.png')}  ></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
                        <TextInput
                            style={{ marginLeft: 10 ,color:'black'}}
                            placeholder="Gender*"
                            value="Male"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={{ marginLeft: widthPercentageToDP('15%%') }}>
                            <Image source={require('../../../assets/Vector.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginLeft:'5%'}}>
                    <Text style={{color:'black',fontWeight:'500',fontSize:17}}>Interest Habit</Text>
                    <FlatList
                    data={interset}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={false}
                />
                </View>
                <View style={{ marginTop: heightPercentageToDP('15%'), backgroundColor: '#A7CECB', padding: 13, alignSelf: 'center', borderRadius: 6,width:widthPercentageToDP('90%'),alignItems:'center' }}>
            <TouchableOpacity  onPress={()=>updateProfileAPi()}>
                    <Text  style={{color:'white',fontSize:20,fontWeight:'900'}}>Update Profile</Text>
            </TouchableOpacity>
            </View>
      </ScrollView>
    </View>
    </>
  );
};
export default KidsProfileedits;
