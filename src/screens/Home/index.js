import React, { useState } from 'react'
import { View, Text, ScrollView, Image, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Path from '../../constants/imagePath';
import Modal from "react-native-modal";
import { DrawerActions } from '@react-navigation/drawer'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BackgroundTheme from '../../component/backgroundtheme';
import { heightPercentageToDP } from '../../utility';
const Home = ({ navigation ,route}) => {
    // const { itemId} = route.params;
    // console.log("navigation data",itemId);
    const [like,setLike]=useState(104);
    // const navigation = useNavigation();
    const [homeHabbit, setHomeHabbit] = useState([
        { id: 'Swimming', image: Path.Swimming, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Healthy Eating', image: Path.Eating, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        { id: 'Reading', image: Path.Reading, title: 'Malesuada eros ipsum integer nisi suspen....', display: true },
        {
            id: 'Wake up early', image: Path.Wakeup, title: 'Malesuada eros ipsum integer nisi suspen....', display: true
        }
    ])
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {

        setModalVisible(false)
        navigation.navigate("Habbitsone")
    };
    const counFunction=()=>{
        setLike(like+1);
    }
    return (
        <View>
            <ScrollView style={{ backgroundColor: '#CDE5E4' }}>
                <BackgroundTheme />
                <View style={{ marginTop: heightPercentageToDP('-120%'), width: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ margin: '5%', flexDirection: 'row' }}>
                            <View>
                                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                                    <Image source={Path.Zaya} style={{ width: 40, height: 40 }}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: '10%' }}><Text style={{ color: 'black' }}>$100</Text></View>
                        </View>

                        <View style={{ alignItems: 'center', top: -15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Image source={Path.Notification} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                        </View>
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
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '700' }}>Now Pick Habits For Your Kids</Text>
                    </View>
                    {/* {homeHabbit.map((item, index) => ( */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                        {/* <TouchableOpacity onPress={()=>toggleModal()}> */}
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Swimming</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('2%') }}>
                                <TouchableOpacity>
                                <Image source={Path.Homeuser}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>100</Text>
                                <TouchableOpacity onPress={()=>counFunction()}>
                                <Image source={Path.Homelike}></Image>
                                </TouchableOpacity>
                                <Text style={{ color: 'black' }}>{like}</Text>
                            </View>

                        </View>
                        {/* </TouchableOpacity> */}
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Healthy Eating</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('2%') }}>
                                <Image source={Path.Homeuser} ></Image>
                                <Text style={{ color: 'black' }}>105</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', margin: '2%' }}>
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <Image source={Path.Swimming} style={{ alignSelf: 'center' }}></Image>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}> Swimming</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('2%') }}>
                                <Image source={Path.Homeuser}></Image>
                                <Text style={{ color: 'black' }}>104</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <Image source={Path.Eating} style={{ alignSelf: 'center' }}></Image>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '700' }}>Healthy Eating</Text>
                            <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Malesuada eros ipsum integer nisi suspen....</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: heightPercentageToDP('2%') }}>
                                <Image source={Path.Homeuser}></Image>
                                <Text style={{ color: 'black' }}>104</Text>
                                <Image source={Path.Homelike}></Image>
                                <Text style={{ color: 'black' }}>103</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: 'black', marginLeft: '5%', fontSize: 18, fontWeight: '700', }}>Trending Habits</Text>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, margin: '5%', borderRadius: 10 }}>
                        <View style={{ backgroundColor: '#FFBF7F' }}>
                            <Text>.</Text>
                        </View>
                        <View>
                            <Image source={Path.wakeupOne}></Image>
                        </View>
                        <View>
                            <Text style={{ color: 'black' }}>Groupo 72- Equipo 1</Text>
                            <Text style={{ color: 'black' }}>Arquitectura de software IDGS7-1</Text>
                            <Text style={{ color: 'black' }}>Periodo determinado</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={Path.ThreeOne}></Image>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10, margin: '5%', borderRadius: 10, marginBottom: '25%' }}>
                        <View style={{ backgroundColor: '#FFBF7F' }}>
                            <Text>.</Text>
                        </View>
                        <View>
                            <Image source={Path.wakeupOne}></Image>
                        </View>
                        <View>
                            <Text style={{ color: 'black' }}>Groupo 72- Equipo 1</Text>
                            <Text style={{ color: 'black' }}>Arquitectura de software IDGS7-1</Text>
                            <Text style={{ color: 'black' }}>Periodo determinado</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={Path.ThreeOne}></Image>
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
                            <View style={{ alignSelf: 'center', top: -30 }}>
                                <Image source={Path.Alertgirl}  style={{height:150,width:150}}></Image>
                            </View>
                            <View style={{ marginLeft: 20, top: -40 }}>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76'
                                }}>Habit will cost 30 Samskara </Text>
                                <Text style={{
                                    fontSize:
                                        22, fontWeight: '700', color: '#484C76',alignSelf:'center'
                                }}>Points!</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: -20 }}>
                                <TouchableOpacity onPress={() => toggleModal()} >
                                    <View style={{ padding: 5, borderColor: 'green', borderWidth: 1, borderRadius: 6,width:'120%' }}>
                                        <View style={{ flexDirection: 'row', padding: 5 }}>
                                            <View>
                                                <Image source={Path.Alertok} style={{ alignSelf: 'center',height:15,width:15,top:3 }}></Image>
                                            </View>
                                            <View style={{marginLeft:10,alignSelf: 'center'}}>
                                                <Text style={{ color: 'green' }}>Accept</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <View style={{ padding: 5, borderColor: 'red', borderWidth: 1, flexDirection: 'row', borderRadius: 6,width:"120%" }}>
                                        <View style={{ alignSelf: 'center', padding: 5 }}>
                                            <Image source={Path.AlertCancel}></Image>
                                        </View>
                                        <View style={{ alignSelf: 'center' }}>
                                            <Text style={{ color: 'red' }}>Later</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>


                </View>
            </ScrollView>
        </View>
    )
}

export default Home
