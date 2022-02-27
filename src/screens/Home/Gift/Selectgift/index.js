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
import { View, Text, Image,FlatList,ScrollView,Button,TouchableOpacity, TextInput ,StyleSheet} from 'react-native'
// import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import Modal from "react-native-modal";
import BackgroundTheme from '../../../../component/backgroundtheme';
import { heightPercentageToDP, widthPercentageToDP } from '../../../../utility';
import { Dropdown } from 'react-native-element-dropdown';
const Habbitsone = ({navigation}) => {
    const [gender, setGender] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {

      setModalVisible(!isModalVisible);
    };
    const openPages=(item)=>{
            toggleModal()

    }
    const genderList = [
        {
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            value: "male",
        },
        {
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            value: "female",
        },
        {
            label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            value: "others",
        },
    ];
    const placeholderData=()=>{
     
     
      
    }

    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                <View style={{alignSelf:'center',marginLeft:10}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={Path.Backbutton} resizeMode="center"></Image>
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
              <TouchableOpacity onPress={()=>navigation.navigate('Giftlist')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:'#D26F83',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:'#D26F83'}}>..</Text>
                        </View>
                        <View style={{padding:20}}>
                            <Image source={Path.Gift} style={{height:30,width:28,alignSelf:'center'}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'600',color:'#2D2D2D'}}>Select a gift from online ECommerce</Text>
                           
                        </View>
                    </View>
                    </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Nonmaterial')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:'#D26F83',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:'#D26F83'}}>..</Text>
                        </View>
                        <View style={{padding:20}}>
                            <Image source={Path.Gift} style={{height:30,width:28,alignSelf:'center'}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'600',color:'#2D2D2D'}}>Non Meterial Gifting</Text>
                           
                        </View>
                    </View>
                    </TouchableOpacity>
            </View>
            {/* <View style={{width:widthPercentageToDP('90%'),alignSelf:'center'}}>
            <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={genderList}
        search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={ <View style={{flexDirection:'row',marginLeft:}}>
            <Image source={Path.Gift}></Image>
            <Text style={{fontSize:14,fontWeight:'600',color:'#2D2D2D'}}>Non Meterial Gifting</Text>
    </View>}
        searchPlaceholder="Search..."
        value={gender}
        onChange={item => {
          setGender(item.value);
        }}
      />
            </View> */}
            <View>
              <TouchableOpacity onPress={()=>setModalVisible(!isModalVisible)}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:'#D26F83',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:'#D26F83'}}>..</Text>
                        </View>
                        <View style={{padding:20}}>
                            <Image source={Path.Edit} style={{height:30,width:28,alignSelf:'center'}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'600',color:'#2D2D2D'}}>Message</Text>
                           
                        </View>
                    </View>
                    </TouchableOpacity>
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

export default Habbitsone;
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      height:heightPercentageToDP('10%')
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      // borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      backgroundColor:'white'
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 18,
      fontWeight:'bold',
    },
    selectedTextStyle: {
      fontSize: 16,
      fontWeight:'bold',
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });


