import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../utility';

const HabbitsDetails = ({ navigation }) => {
    const [count,setCount]=useState(100);
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
            <View style={{ backgroundColor: 'white', width: '46%', padding: 6, borderRadius: 6, margin: '2%' }}>
              

<View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: '#484C76', fontWeight: '500', fontSize: 13 }}>$35</Text>
                            <TouchableOpacity>
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
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-122%')}}>
            <ScrollView nestedScrollEnabled={true}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '3%' }}>
                <View style={{marginLeft:10}}>
                    <TouchableOpacity >
                        <Image source={Path.Backbutton} ></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <Image source={Path.Notification}></Image>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: '5%' }}>
                    <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '900' }}>Healthy Eater</Text>
                </View>
            </View>

            <View >
                <FlatList
                    data={childList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    // contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={true}
                />

            </View>



            </ScrollView>
        </View>
        </>
    )
}

export default HabbitsDetails
