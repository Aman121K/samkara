

import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import Modal from "react-native-modal";
const KidsHabbitsNew = ({ navigation }) => {
    const [count,setCount]=useState(100);
    const [isModalVisible, setModalVisible] = useState(false);
    const [childList, setChildList] = useState([
        { id: 1, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 2, name: 'Healthy Eater', image: Path.Vegetable, title: 'Periodo determinado',},
        { id: 3, name: 'Hygiene Pro', image: Path.washHand, title: 'Periodo determinado',  },
        { id: 4, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 5, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 6, name: 'Healthy Eater', image: Path.Vegetable, title: 'Periodo determinado', },
    ])
    const countIncrease=()=>{
        setCount(count+1);
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ backgroundColor: 'white', width: widthPercentageToDP('46%'), padding: 5, borderRadius: 6, margin: heightPercentageToDP('1%') }}>
<View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={()=>setModalVisible(!isModalVisible)}>
                                <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Swimming</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('2%') }}>
                                <TouchableOpacity>
                                <Image source={Path.Homeuser}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>100</Text>
                                <TouchableOpacity  onPress={()=>countIncrease()}>
                                <Image source={Path.Homelike}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>{count}</Text>
                            </View>

                        </View>

            </View>
            

        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
          <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-122%')}}>
          
            {/* <View style={{ marginTop: heightPercentageToDP('4%') }}>
                <View style={{marginLeft:10}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image source={Path.Backbutton} ></Image>
                    </TouchableOpacity>
                </View>
                
            </View> */}
                <View style={{ margin: widthPercentageToDP('5%') }}>
                    <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '900' }}>Hello Zyan!</Text>
                </View>
            <View style={{marginBottom:heightPercentageToDP('10%')}}>
                <FlatList
                    data={childList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    // contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={true}
                />

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
                            <View style={{alignSelf:'center'}}>
                                <Text>Interesed in starting this activity  ?</Text>
                            </View>
                            <View style={{ marginLeft: 20,}}>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76',marginLeft:'10%'
                                }}>Ask your Parent to assign  </Text>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76',alignSelf:'center'
                                }}>you!</Text>
                            </View>
                          
                            <View style={{marginBottom:heightPercentageToDP('2%'),top:10 }}>
                                <TouchableOpacity>
                                    <View style={{backgroundColor:'#A7CECB',padding:10,borderRadius:10,width:widthPercentageToDP('20%'),alignSelf:'center'}}>
                                        <Text>Go back</Text>
                                    </View>
                                </TouchableOpacity>
                            
                            </View>
                        </View>
                    </Modal>

           
        </View>
        </ScrollView>
        </>
    )
}

export default KidsHabbitsNew
