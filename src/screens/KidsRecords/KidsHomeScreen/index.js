import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity,Share } from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import Modal from "react-native-modal";
import DocumentPicker from 'react-native-document-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const KidsHomeScreen = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Task 1', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Task 2', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Task 3', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
    ])
    const [isModalVisible, setModalVisible] = useState(false);
    const [isProfile,setIsProfile]=useState(false);
    const [singleFile, setSingleFile] = useState();
    const renderItem = ({ item, index }) => {
        return (
            // <TouchableOpacity onPress={()=>navigation.navigate('KidsActivity')}>
            <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center', flexDirection: 'row', borderRadius: 10 }}>
                <View style={{ backgroundColor: item.color, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                    <Text style={{ color: item.color }}>..</Text>
                </View>

                <View style={{ alignItems: 'center', marginLeft: '5%', padding: 10 }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                    <Text style={{ color: 'black', fontWeight: '400', fontSize: 11 }} >{item.title}</Text>
                </View>

                <View style={{ alignSelf: 'center', marginLeft: 90 }}>
                    <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
                        <ImageBackground source={Path.RIng} style={{ height: 40, width: 40 }}>
                            <Image source={Path.Homelike} style={{ margin: 10 }}></Image>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
            // </TouchableOpacity>

        );
    };
    const keyExtractor = (item, index) => item + index;
    const selectOneFile = async () => {
        //Opening Document Picker for selection of one file
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],

            });
            console.log('res : ' + JSON.stringify(res));
            setSingleFile(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled from single doc picker');
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
    const ApprovalApi=()=>{

        // approval code api logic here 

            setModalVisible(false);
    }
    const goBackApi=()=>{
        // goBack api logic here 
            setModalVisible(false);
    }
    const logout=()=>{
        navigation.navigate('Signin');
    }
    const shareApp= async()=>
    {
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
            <BackgroundTheme />
            <View style={{ marginTop: hp('-120%') }}>
                <View>
                    <TouchableOpacity onPress={()=>setIsProfile(!isProfile)}>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: wp('5%'), marginBottom: hp('2%') }}>
                    <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '700' }}>Hello Zyan!</Text>
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
                <View style={{ marginLeft: wp('5%'), marginBottom: hp('2%') }}>
                    <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '700', }}>Today Task</Text>
                </View>
                <View style={{ alignSelf: 'center', width: wp('70%') }}>
                    <Text style={{ color: '#3A7BB1' ,alignSelf:'center',fontSize:18,fontWeight:'700',lineHeight:23}}>Here are your tasks for today
                    </Text>
                    <Text style={{ color: '#3A7BB1' ,alignSelf:'center',fontSize:18,fontWeight:'700',lineHeight:23}}>Hit the thumb when done</Text>
                </View>
                <View>
                    <FlatList
                        data={childList}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                    />
                </View>

                <Modal isVisible={isModalVisible} 
        >
                    <View style={{ backgroundColor: 'white', width: '100%', borderRadius: 10 }}>
                        <View style={{ alignSelf: 'center', marginTop: -30, backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: '#484C76' }}>
                            <Image source={Path.AlertChild} resizeMode="contain"></Image>
                        </View>
                        <View style={{ alignSelf: 'flex-end', top: -45, backgroundColor: 'white', padding: 10, borderRadius: 20 }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Image source={Path.Cross}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ top: -20, alignSelf: 'center', marginLeft: '3%' }}>
                            <View>
                                <TouchableOpacity onPress={() => selectOneFile()}>
                                    <Image source={Path.Files} resizeMode="center" style={{ height: 50, width: 50 }}></Image>
                                </TouchableOpacity>
                            </View>
                            <Text>Upload File</Text>
                        </View>
                        <View style={{ marginLeft: 20, top: -20 }}>
                            <Text style={{
                                fontSize:
                                    22, fontWeight: '700', color: '#484C76', marginLeft: '10%'
                            }}>“Yeah” I Completed My  </Text>
                            <Text style={{
                                fontSize:
                                    22, fontWeight: '700', color: '#484C76', alignSelf: 'center'
                            }}>Activity!</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: -10 }}>
                            <TouchableOpacity onPress={() => ApprovalApi()}>
                                <View style={{ backgroundColor: '#A7CECB', padding: 10, borderRadius: 10 }}>
                                    <Text style={{fontSize:16,fontWeight:'800'}}>Request for approval</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => goBackApi()}>
                                <View style={{ backgroundColor: '#A7CECB', padding: 10, borderRadius: 10 }}>
                                    <Text style={{fontSize:16,fontWeight:'800'}}>Go back</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

            </View>
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
                    <Text style={{fontSize:16,fontWeight:'700',lineHeight:22}}>John Doe</Text>
                    </View>
                    <View style={{marginLeft:wp('1%')}}>
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
    )
}
export default KidsHomeScreen;
