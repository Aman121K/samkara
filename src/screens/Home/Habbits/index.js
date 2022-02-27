import React, { useState } from 'react'
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity ,StyleSheet} from 'react-native'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import Modal from "react-native-modal";
import BackgroundTheme from '../../../component/backgroundtheme';
import { Dropdown } from 'react-native-element-dropdown';
const Habbitsone = ({ navigation }) => {
    const [values, setValues] = useState(21);
    const [gender, setGender] = useState();
    const [childList, setChildList] = useState([
        { id: 1, name: 'Week 1 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 2, name: 'Week 2 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 3, name: 'Week 3 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
    ])
    const [isModalVisible, setModalVisible] = useState(false);
    const [size, setSize] = useState(false);
    const toggleModal = () => {

        setModalVisible(false)
    };
    const minus = () => {
        setValues(values - 1);
    }
    const Plus = () => {
        setValues(values + 1);
    }
    const genderList = [
        {
            label: "Aman",
            value: "male",
        },
        {
            label: "Rahul",
            value: "female",
        },
        {
            label: "Vikas",
            value: "others",
        },
    ];
    const renderItem = ({ item, index }) => {
        return (

            <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center', flexDirection: 'row', borderRadius: 10 }}>

                <View style={{ backgroundColor: item.color, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                    <Text style={{ color: item.color }}>..</Text>
                </View>


                <View style={{ alignSelf: 'center', padding: 10, width: widthPercentageToDP('60%') }}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#2D2D2D' }}>{item.name}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400', color: '#2D2D2D' }}>{item.title}</Text>
                </View>



                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignSelf: 'center', marginLeft: widthPercentageToDP('10%') }}>
                    <View style={{ alignSelf: 'center', }}>
                        {item.id == 4 ?
                            <TouchableOpacity onPress={() => setSize(!size)}>
                                <Image source={require('../../../assets/Vector.png')}></Image>
                            </TouchableOpacity>
                            :
                            <Image source={Path.Edit}></Image>}
                    </View>
                </TouchableOpacity>

            </View>



        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
            <ScrollView style={{ backgroundColor: '#CDE5E4' }}>
                <BackgroundTheme />
                <View style={{ marginTop: heightPercentageToDP('-120%') }}>
                    {/* <ScrollView> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ alignSelf: 'center', marginLeft: 10 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={Path.Backbutton} resizeMode="center"></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <Image source={Path.Notification}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginLeft: '5%', margin: 2 }}><Text style={{ fontSize: 22, fontWeight: '700', color: '#484C76' }}>Habits for better change</Text></View>
                    <View style={{ backgroundColor: "white", width: '90%', marginLeft: '5%', borderRadius: 10, marginTop: '2%' }}>
                        <View style={{ backgroundColor: '#F2F2F2', padding: 5, borderRadius: 10 }}>
                            <Text style={{ color: '#2D2D2D', marginLeft: 20, fontSize: 16, fontWeight: '500' }}>Reading</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                            <View>
                                <Image source={Path.Reading}></Image>
                            </View>
                            <View style={{ width: '82%' }}>
                                <Text style={{ color: '#2D2D2D', alignSelf: 'center', fontSize: 14, fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor molestie integer sodales amet.</Text></View>
                        </View>
                    </View>
                    <View style={{ marginTop: heightPercentageToDP('1.5%') }}>

                        <FlatList
                            data={childList}
                            renderItem={renderItem}
                            keyExtractor={keyExtractor}
                        />
                    </View>

                    <View style={{width:widthPercentageToDP('90%'),alignSelf:'center'}}>
                    <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={genderList}
        // search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder="Select Your Kids Name"
        searchPlaceholder="Search..."
        value={gender}
        onChange={item => {
          setGender(item.value);
        }}
      />
                    </View>


                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center', flexDirection: 'row', borderRadius: 10, padding: 10, justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: '700', color: 'black' }}>Setup Reminder Time</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: widthPercentageToDP('18%'), marginRight: '5%' }}>
                            <TouchableOpacity onPress={() => minus()}>
                                <View style={{ borderWidth: .5, padding: 2, borderColor: '#CDE5E4' }}>
                                    <Text style={{ color: 'black' }}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ borderWidth: .5, padding: 3, borderColor: '#CDE5E4' }}>
                                    <Text style={{ color: 'black' }}>{values}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Plus()}>
                                <View style={{ borderWidth: .5, padding: 2, borderColor: '#CDE5E4' }}>
                                    <Text style={{ color: 'black' }}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate("Giftselect")}>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', width: '50%', backgroundColor: 'white', margin: '5%', padding: 10, borderRadius: 6, alignItems: 'center' }}>
                            <Image source={Path.Gift} style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 10 }}>
                            </Image>
                            <Text style={{ marginLeft: '5%', fontWeight: '600', fontSize: 17, color: '#5A5A5A' }}>Select Gift</Text>
                        </View>
                    </TouchableOpacity>
                    <Modal isVisible={isModalVisible}>
                        <View style={{ backgroundColor: 'white', alignSelf: 'center', padding: 20, width: '100%', borderRadius: 10 }}>
                            <View style={{ alignSelf: 'center', backgroundColor: 'white', borderRadius: 50, marginTop: -50 }}>
                                <Image source={Path.AlertChild} ></Image>
                            </View>
                            <View style={{ alignSelf: 'flex-end', top: -50, backgroundColor: 'white', padding: 10, borderRadius: 20 }}>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <Image source={Path.Cross}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#484C76', fontSize: 22, fontWeight: 'bold' }}>Week 1 Task</Text>
                            </View>
                            <View style={{ padding: 10, margin: '2%', backgroundColor: '#E5E5E5', borderRadius: 6 }}>
                                <View>
                                    <Text style={{ color: 'black', fontSize: 11 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A id vitae adipiscing pharetra mi pretium. Lectus mi, consectetur aenean nisi. Adipiscing tristique  |</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <View style={{ backgroundColor: '#A7CECB', marginLeft: '15%', marginRight: '15%', padding: 10, borderRadius: 6, marginTop: '2%' }}>
                                    <Text style={{ alignSelf: 'center', fontWeight: '900', fontSize: 18 }}>Confirm</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    {/* </ScrollView> */}
                </View>
            </ScrollView>
        </>
    )

}

export default Habbitsone
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
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
