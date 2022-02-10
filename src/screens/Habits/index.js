import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView ,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import BackgroundTheme from '../../component/backgroundtheme';
import { heightPercentageToDP, widthPercentageToDP } from '../../utility';

const Habbitsone = ({ navigation }) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 2, name: 'Healthy Eater', image: Path.Vegetable, title: 'Periodo determinado',},
        { id: 3, name: 'Hygiene Pro', image: Path.washHand, title: 'Periodo determinado',  },
        { id: 4, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 5, name: 'Fit & Healthy', image: Path.Indoor, title: 'Periodo determinado',  },
        { id: 6, name: 'Healthy Eater', image: Path.Vegetable, title: 'Periodo determinado', },
        { id: 7, name: 'Hygiene Pro', image: Path.washHand, title: 'Periodo determinado', },
       
    ])
    const renderItem = ({ item, index }) => {
        return (
            
            <View style={{ backgroundColor: 'white', width: '45%', padding: 10, borderRadius: 10, margin: widthPercentageToDP('1.5%') }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Habitsdetails')}>
                    <View style={{height:heightPercentageToDP('8%')}}>
                    <Image source={item.image} style={{ alignSelf: 'center' }} resizeMode="contain"></Image>
                    </View>
               
                <View style={{justifyContent:'center', alignItems:'center', marginTop:'5%', padding: 6}}>
                <Text style={{ color: '#484C76', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ color: '#8C8C8C', fontSize: 14,  }}>{item.title}</Text>
                </View>
                </TouchableOpacity>

            </View>
            

        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-120%')}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '3%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginLeft: '5%' }}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <Image source={Path.Zaya} style={{ width: 50, height: 50 }}></Image>
                    </TouchableOpacity>
                    <Text style={{ color: '#365383', fontSize: 18, marginLeft: '4%' }}>$100</Text>
                </View>
                <View >
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <Image source={Path.Notification} style={{ top: '-10%' }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: '5%' }}>
                    <Text style={{ color: '#484C76', fontSize: 18, fontWeight: '900' }}>Habbits</Text>
                </View>
            </View>
            <View style={{alignSelf:'center',width:widthPercentageToDP('95%'),marginLeft:widthPercentageToDP('3%'),marginBottom:heightPercentageToDP('10%')}}>
                <FlatList
                    data={childList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                    contentContainerStyle={{ flexGrow: 1 }}
                />
            </View>
            {/* </ScrollView> */}
        </View>
        </ScrollView>
        </>
    )
}

export default Habbitsone
