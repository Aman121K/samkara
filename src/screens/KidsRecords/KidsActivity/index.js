import React ,{useState,useEffect}from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle';
import Modal from "react-native-modal";
// import BackgroundTheme from '../../../component/backgroundtheme';
import DocumentPicker from 'react-native-document-picker';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import { NavigationContainer } from '@react-navigation/native';
const KidsActivity = ({navigation}) => {
    const [singleFile, setSingleFile] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [approveModel,setApprovemodel]=useState(false);
    const [date,setDate]=useState([
        {id:1,day:'Sun',date:'17',borderColor:'green',value:100},
        {id:2,day:'Mon',date:'18',borderColor:'red',value:70},
        {id:3,day:'Tues',date:'19',borderColor:'black',value:60},
        {id:1,day:'Wed',date:'20',borderColor:'AF010A',value:40},
        {id:2,day:'Thru',date:'21',borderColor:'484C76',value:100},
        {id:3,day:'Fri',date:'22',borderColor:'green',value:30},
    ])
    const openModal=(item)=>{
        if(item.value==100){
            setApprovemodel(!approveModel)
        }else{
        setModalVisible(!isModalVisible)
        }
    }
    const renderItem=({item,index})=>{
        return(
        <View style={{borderWidth:1,borderColor:item.borderColor,padding:5,borderRadius:6,width:widthPercentageToDP('12%'),margin:'1%',alignItems:'center',height:heightPercentageToDP('7%')}}>
            <TouchableOpacity onPress={()=>openModal(item)}>
        <Text style={{color:'black'}}>{item.day}</Text>
        <Text style={{color:'black'}}>{item.date}</Text>
        </TouchableOpacity>
  
</View>
        )
    }
    const selectOneFile = async () => {
        //Opening Document Picker for selection of one file
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            //There can me more options as well
            // DocumentPicker.types.allFiles
            // DocumentPicker.types.images
            // DocumentPicker.types.plainText
            // DocumentPicker.types.audio
            // DocumentPicker.types.pdf
          });
          //Printing the log realted to the file
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res.uri);
          console.log('Type : ' + res.type);
          console.log('File Name : ' + res.name);
          console.log('File Size : ' + res.size);
          //Setting the state to show single file attributes
          setSingleFile(res);
        } catch (err) {
          //Handling any exception (If any)
          if (DocumentPicker.isCancel(err)) {
            //If user canceled the document selection
            alert('Canceled from single doc picker');
          } else {
            //For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
      
    return (
        <>
            <BackgroundTheme />
            <View style={{ marginTop: heightPercentageToDP('-120%') }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ margin: '5%' }}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source={Path.Backbutton} resizeMode="center"></Image>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                            <Image source={Path.Notification} style={{ height: 60, width: 60 }}></Image>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ margin: heightPercentageToDP('2%') }}>
                    <Text style={{ fontSize: 22, fontWeight: '700', color: '#484C76' }}>Yours Activity</Text>
                </View>
                <View style={{ margin: '4%', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ReportsAndActivity')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Image source={Path.Zaya} style={{ height: 30, width: 30 }}></Image>
                            </View>
                            <View style={{ marginRight: '30%' }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Zyan Smith</Text>
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
                                    <Text style={{ fontSize: 12, color: 'black' }}>100 %</Text>
                                </ProgressCircle>
                            </View>
                            <View>
                                <Image source={Path.ThreeOne}></Image>
                            </View>
                        </View>
                        <View >
                            <FlatList
                             data={date}
                             renderItem={renderItem}
                             keyExtractor={item => item.id}
                              numColumns={date.length}
                             contentContainerStyle={{ flexGrow: 1 }}
                             scrollEnabled={false}
                           
                            >

                            </FlatList>
                          

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Drinking Water</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View>
                                        <Image source={Path.pause}></Image>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}><Text style={{ fontSize: 10, fontWeight: '400', color: '#484C76' }}>Stop</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: '4%', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Image source={Path.Zaya} style={{ height: 30, width: 30 }}></Image>
                            </View>
                            <View style={{ marginRight: '30%' }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Zyan Smith</Text>
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
                                    <Text style={{ fontSize: 12, color: 'black' }}>100 %</Text>
                                </ProgressCircle>
                            </View>
                            <View>
                                <Image source={Path.ThreeOne}></Image>
                            </View>
                        </View>
                        <View >
                            <FlatList
                             data={date}
                             renderItem={renderItem}
                             keyExtractor={item => item.id}
                              numColumns={date.length}
                             contentContainerStyle={{ flexGrow: 1 }}
                             scrollEnabled={false}
                           
                            >

                            </FlatList>
                          

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Drinking Water</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View>
                                        <Image source={Path.pause}></Image>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}><Text style={{ fontSize: 10, fontWeight: '400', color: '#484C76' }}>Stop</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: '4%', backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <Image source={Path.Zaya} style={{ height: 30, width: 30 }}></Image>
                            </View>
                            <View style={{ marginRight: '30%' }}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: 'black' }}>Zyan Smith</Text>
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
                                    <Text style={{ fontSize: 12, color: 'black' }}>100 %</Text>
                                </ProgressCircle>
                            </View>
                            <View>
                                <Image source={Path.ThreeOne}></Image>
                            </View>
                        </View>
                        <View >
                            <FlatList
                             data={date}
                             renderItem={renderItem}
                             keyExtractor={item => item.id}
                              numColumns={date.length}
                             contentContainerStyle={{ flexGrow: 1 }}
                             scrollEnabled={false}
                            >
                            </FlatList>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>Drinking Water</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <View>
                                        <Image source={Path.pause}></Image>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}><Text style={{ fontSize: 10, fontWeight: '400', color: '#484C76' }}>Stop</Text></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
                            <View style={{ alignSelf: 'center', top: -10 }}>
                                <TouchableOpacity onPress={()=>selectOneFile()}>
                                <Image source={Path.Files}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 40,}}>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76'
                                }}>“Yeah” I Completed My </Text>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76',alignSelf:'center'
                                }}>Activity!</Text>
                            </View>
                                <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)} style={{width:widthPercentageToDP('40%'),alignSelf:'center',margin:'5%',backgroundColor: '#A7CECB',alignItems:'center',borderRadius:6}} >
                                            <View style={{alignSelf: 'center',padding:10}}>
                                                <Text style={{ color: 'white' }}>Accept</Text>
                                    </View>
                                </TouchableOpacity>
                        </View>
                    </Modal>
                    <Modal isVisible={approveModel}>
                        <View style={{ backgroundColor: 'white', width: '100%', borderRadius: 10 }}>
                            <View style={{ alignSelf: 'center', marginTop: -30, backgroundColor: 'white', borderRadius: 100, borderWidth: 1, borderColor: '#484C76' }}>
                                <Image source={Path.AlertChild} resizeMode="contain"></Image>
                            </View>
                            <View style={{ alignSelf: 'flex-end',top:-45, backgroundColor: 'white', padding: 10, borderRadius: 20 }}>
                                <TouchableOpacity onPress={() => setApprovemodel(false)}>
                                    <Image source={Path.Cross}></Image>
                                </TouchableOpacity>
                            </View>
                                <View style={{alignItems:'center',alignSelf:'center',top:-15}}>
                                    <Text style={{fontSize:20,fontWeight:'800',color:'#484C76'}}>Approve Your Activity</Text>
                                    </View>
                        </View>
                    </Modal>
        </>
    )
}
export default KidsActivity
