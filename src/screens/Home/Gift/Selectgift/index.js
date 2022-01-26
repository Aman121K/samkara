// import { View,Text } from "react-native"
// import React from 'react';
// const SelectGift = ({navigation}) => {

//     return (
//         <View>
//             <Text>Select Gift</Text>
//         </View>
//     )
// }

// export default SelectGift


import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView,Button,TouchableOpacity, TextInput } from 'react-native'
// import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import Modal from "react-native-modal";
import BackgroundTheme from '../../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../../utility';

const Habbitsone = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Select a gift from online ECommerce', image: Path.Gift, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 2, name: 'Non Materials Things', image: Path.Gift, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 3, name: 'Message', image: Path.Edit, title: 'Periodo determinado', value: 35, color: '#467F9B' },
    ])
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      // navigation.naviate("Habbitsone");
      setModalVisible(!isModalVisible);
    };
    const openPages=(item)=>{
        console.log("item",item);
        // navigation.navigate('Giftlist')
        if(item.id==1){
        navigation.navigate('Giftlist')
        }else if(item.id==2){
            navigation.navigate('Nonmaterial')
        }
        else if(item.id==3){
            // navigation.navigate('Giftlist')
            // setModel
            toggleModal()
        }

    }
    const renderItem = ({ item, index }) => {
        return (
                    <TouchableOpacity onPress={()=>openPages(item)}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        <View style={{padding:20}}>
                            <Image source={item.image} style={{height:30,width:28,alignSelf:'center'}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'600',color:'#2D2D2D'}}>{item.name}</Text>
                           
                        </View>
                       {item.id==2?
                       <View style={{alignSelf:'center',marginLeft:70}}>
                                <Image source={require('../../../../assets/Vector.png')}></Image>
                           </View>:null}
                    </View>
                    </TouchableOpacity>
            
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                <View style={{alignSelf:'center',marginLeft:10}}>
                    <TouchableOpacity>
                    <Image source={Path.Backbutton} ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <Image source={Path.Notification} ></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginLeft:'5%'}}><Text style={{fontSize:22,fontWeight:'700',color:'#484C76'}}>Select Gift</Text></View>
            <View>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
            <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:'white',alignSelf:'center',padding:20,width:'100%',borderRadius:10 }}>
            <View style={{alignSelf:'center',marginTop:-50,backgroundColor:'white',borderRadius:90,borderWidth:1,borderColor:'#484C76'}}>
                <Image source={Path.AlertChild} resizeMode="contain" ></Image>
                </View>
                <View style={{alignSelf:'flex-end',top:-50,backgroundColor:'white',padding:10,borderRadius:20}}>
                    <TouchableOpacity onPress={()=>setModalVisible(false)}>
                    <Image source={Path.Cross}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center',top:-10}}>
                    <Text style={{color:'#484C76',fontSize:22,fontWeight:'bold'}}>Write A Message</Text>
                    </View>
                    <View style={{padding:10,margin:'2%',backgroundColor:'#E5E5E5',borderRadius:6}}>
              <View>
                  {/* <Text style={{color:'black',fontSize:11}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A id vitae adipiscing pharetra mi pretium. Lectus mi, consectetur aenean nisi. Adipiscing tristique  |</Text> */}
                  <TextInput placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A id vitae adipiscing pharetra mi pretium. Lectus mi, consectetur aenean nisi. Adipiscing tristique"
                  placeholderTextColor="#484C76"
                  style={{width:'90%',color:'black'}}
                  >
                  </TextInput>
                  </View>
              </View>
              <TouchableOpacity onPress={()=>setModalVisible(false)}>
              <View style={{backgroundColor:'#A7CECB',marginLeft:'15%',marginRight:'15%',padding:10,borderRadius:6,marginTop:'2%'}}>
                  <Text style={{alignSelf:'center',fontWeight:'900',fontSize:18}}>Confirm</Text>
                  </View>
                  </TouchableOpacity>
           

        </View>
      </Modal>

        </View>
        </>
    )
}

export default Habbitsone

