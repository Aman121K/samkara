// import React from 'react'
// import { View,Text } from 'react-native'

// const GIftListing = () => {
//     return (
//         <View>
//             <
//         </View>
//     )
// }

// export default GIftListing

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


import React, { useEffect, useState } from 'react'
import { View, Text, Image,FlatList,ScrollView,TextInput,TouchableOpacity } from 'react-native'
// import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../../../component/backgroundtheme';
import { heightPercentageToDP, widthPercentageToDP } from '../../../../utility';
import Modal from "react-native-modal";
const SelectGift = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65,status:false},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75,status:false},
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65,status:false},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75,status:false},
        { id: 1, name: 'Cycle', image: Path.Cyclegift,  value: 65,status:false},
        { id: 1, name: 'Book', image: Path.Bookgift,  value: 75,status:false},
    ])
    const [selected,setSelected]=useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    useEffect(()=>{
        toggleModal()
    },[])
    useEffect(()=>{

    },[selected])

    const Choosegift=()=>{
        navigation.navigate('Activityassign')
    }
    const giftSelected=(item)=>{
        item["status"]=!item["status"];
        setSelected(!selected);

    }
    const renderItem = ({ item, index }) => {
        const { names, name } = item;
        const isSelected = childList.filter((i) => i === name).length > 0;
        return (
            <TouchableOpacity style={{backgroundColor: 'white',borderRadius:6,padding:10,width:'40%',margin:'5%'}} onPress={()=>giftSelected(item)}>
                    <View >
                        {item.status?<Image source={require('../../../../assets/rcheck.png')} style={{alignSelf:'flex-end'}}></Image>:null}
                        <View style={{backgroundColor:'#F2F2F2'}}>
                            <Image source={item.image} resizeMode="center" style={{alignSelf:'center'}}></Image>
                            </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',margin:'1%'}}>
                            <Text style={{color:'black'}}>{item.name}</Text>
                            <Text style={{color:'black'}}> $ {item.value}.00</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
            
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-122%')}}>         
            <View style={{ flexDirection: 'row',  justifyContent:'space-between'}}>
                <TouchableOpacity style={{alignSelf:'center',marginLeft:10}}>
                <View >
                    <Image source={Path.Backbutton} ></Image>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                <View>
                    <Image source={Path.Notification} ></Image>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:'8%'}}>
                <Text style={{color:'#484C76',fontSize:20,fontWeight:'700'}}>Select Gift</Text>
            </View>
            <View>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                numColumns={2}
            />
            </View>
            <TouchableOpacity style={{width:'85%',backgroundColor:'#A7CECB',padding:15,borderRadius:6,margin:'7.5%'}} onPress={()=>Choosegift()}>
            <View >
                    <Text style={{fontWeight:'bold',fontSize:16,color:'white',alignSelf:'center'}}>Confirmed</Text>
            </View>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:'white',alignSelf:'center',padding:10,width:'100%',borderRadius:10 }}>
           
                <View style={{alignSelf:'flex-end',top:-20,backgroundColor:'white',padding:10,borderRadius:20}}>
                    <TouchableOpacity onPress={()=>setModalVisible(false)}>
                    <Image source={Path.Cross}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{top:-20,alignSelf:'center'}}>
                <Image source={Path.ModelRule}></Image>
               
              </View>
              <View style={{top:-20}}>
              <Text style={{fontSize:19,fontWeight:'700',color:'#484C76',marginLeft:10}}>Rules Guide For Gift Selection</Text>
                  </View>
                  <View style={{marginLeft:widthPercentageToDP('5%'),top:-20}}>
                      <Text style={{color:'#484C76'}}>1. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>2. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>3. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>4. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>5. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>6. lorem lorem lorem lorem</Text>
                      <Text style={{color:'#484C76'}}>7. lorem lorem lorem lorem</Text>
                      </View>
        </View>
      </Modal>
        </View>
        </>
    )
}

export default SelectGift


