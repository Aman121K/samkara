import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, TextInputComponent, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Path from '../../../constants/imagePath';
import path from '../../../constants/imagePath';
import ImagePicker from 'react-native-image-crop-picker';
import {
    Appbar,
    DarkTheme,
    DefaultTheme,
    Provider,
    Surface,
    ThemeProvider,
} from "react-native-paper";
import Constants from '../../../constants/Colors';
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../../utility';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'

const KidsProfile = ({ navigation }) => {
    const [gender, setGender] = useState();
    const [showDropDown, setShowDropDown] = useState(false);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [newdate, setNewDate] = useState('');
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];
    const [filePath, setFilePath] = useState();

    const [habbits, setHabbits] = useState([
        {
            id: 1,
            name: 'Eating Healthy',
            status: false,
        },
        {
            id: 2,
            name: 'Physical Fitness',
            status: false,
        },
        {
            id: 3,
            name: 'Singing',
            status: false,
        },
        {
            id: 4,
            name: 'Money Savings Skills',
            status: false,
        },
        {
            id: 5,
            name: 'Helping with Chores',
            status: false,
        },
    ])


    const [interset, setInterest] = useState([
        {
            id: 1,
            name: 'Cycling',
            status: false,
        },
        {
            id: 2,
            name: 'Reading',
            status: false,
        },
        {
            id: 3,
            name: 'Dancing',
            status: false,
        },
        {
            id: 4,
            name: 'Wake up early',
            status: false,
        },
        {
            id: 5,
            name: 'Tennis',
            status: false,
        },
        ,
        {
            id: 6,
            name: 'Cricket',
            status: false,
        },
        {
            id: 7,
            name: 'Badminton',
            status: false,
        },
        {
            id: 8,
            name: 'Piano',
            status: false,
        },
    ])
    const [interestSelect, setInterestSelect] = useState(false);
    const [selectedhabits, setSelectHabits] = useState(false);
    const [random, setRandrom] = useState('Dummy Text');
    const randomFunction = () => {
        let abc = randomString();
        setRandrom(abc);
    }
    const randomString = () => {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    const selectInterest = (item) => {
        item["status"] = !item["status"];
        setInterestSelect(!selectInterest);

    }
    const selectHabits = (item) => {
        item["status"] = !item["status"];
        setSelectHabits(!selectedhabits);

    }
    useEffect(() => {

    }, [selectedhabits])
    useEffect(() => {

    }, [interestSelect])

    const Item = ({ title }) => {
        const { name, slug } = item;
        const isSelected = selectedBrands.filter((i) => i === slug).length > 0;
        return (
            <TouchableOpacity>
                <View style={{ backgroundColor: 'white', borderRadius: 6, justifyContent: 'space-around', alignItems: 'center', marginLeft: '5%', margin: '1.5%', padding: 2 }}>
                    <Text style={{ color: "#9E9E9E", padding: 6 }}>{title.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => selectHabits(item)} style={{margin:wp('1%')}}>
                <View style={{ backgroundColor: 'white', borderRadius: 6, justifyContent: 'space-around', alignItems: 'center', padding: 2, flexDirection: 'row' }}>
                    {item.status ?
                        <Image source={require('../../../assets/rcheck.png')} style={{ height: 10, width: 10 ,}}></Image> : null}
                    <Text style={{ color: "#9E9E9E", padding: 6 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    const renderItem1 = ({ item, index }) => {

        return (
            <TouchableOpacity onPress={() => selectInterest(item)} style={{margin:wp('1%')}}>
                <View style={{ backgroundColor: 'white', borderRadius: 6, justifyContent: 'space-around', alignItems: 'center',  padding: 2, flexDirection: 'row' }}>
                    {item.status ?
                        <Image source={require('../../../assets/rcheck.png')} style={{ height: 10, width: 10 }}></Image> : null}
                    <Text style={{ color: "#9E9E9E", padding: 6 }}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const chooseFile = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setFilePath(image.path);
            console.log(image);
          });
    };

    return (
        <Provider>
            <ScrollView style={{ backgroundColor: '#CDE5E4' }} nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
                <BackgroundTheme />

                <View style={{ marginTop: hp('-120%') }}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '900', color: '#484C76' }}>Kids Profile</Text>
                    </View>
                    <View style={{ alignSelf: 'center', margin: '2%' }}>
                        {filePath?<Image source={{uri:filePath}} style={{height: 100, width: 100,borderRadius:50}}></Image>:
                        <Image source={Path.ProfileLogo} style={{ height: 100, width: 100 }}></Image>}
                        <View style={{ top: -20 }}>
                            <TouchableOpacity onPress={() => chooseFile()}>
                                <Image source={Path.Camera} style={{ tintColor: 'white', height: 20, width: 20, alignSelf: 'flex-end', }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                        <TextInput
                            style={{ marginLeft: 5 }}
                            placeholder="Name or Nick Name *"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
                            <TextInput
                                style={{ marginLeft: 10 }}
                                placeholder="Age*"
                                placeholderTextColor="#9E9E9E"
                                autoCapitalize="none"
                            />
                            <TouchableOpacity style={{ marginLeft: wp('19%') }} onPress={() => setOpen(true)}>
                                <Image source={require('../../../assets/CalendarVector.png')}  ></Image>
                            </TouchableOpacity>
                        </View>
                        <DatePicker
                            mode="date"
                            modal={true}
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                console.log("VIkas", date);
                                setOpen(false)
                                setDate(date)
                                setNewDate(date);
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        <View style={{ width: wp('45%'),top:5 }}>
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
        placeholder="Gender*"
        searchPlaceholder="Search..."
        value={gender}
        onChange={item => {
          setGender(item.value);
        }}
      />
                        
                        </View>
                    </View>
                    <View style={{ margin: '5%' }}>
                        <Text style={{ fontWeight: '500', fontSize: 17, color: 'black' }}>Select one or more areas where you want your kids to be better*</Text>
                    </View>
                  
                <View style={{width:wp('95%'),marginLeft:wp('5%')}}>
                    <FlatList
                        data={habbits}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        scrollEnabled={false}
                    />
                    </View>
                    <View style={{ margin: '5%' }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>Select one or more interest areas for your kids *</Text>
                    </View>
                    <View style={{width:wp('95%'),marginLeft:wp('5%')}}>
                    <FlatList
                        data={interset}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        contentContainerStyle={{ flexGrow: 1 }}
                        scrollEnabled={false}
                    />
                    </View>
                    <View style={{ margin: '5%', }}>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>Generate Code for your Kids Login</Text>
                    </View>
                    <View style={{ width: wp('90%'), flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ width: wp('40%') }} onPress={() => randomFunction()}>
                            <View style={{ backgroundColor: '#A7CECB', padding: 10, borderRadius: 6, alignItems: 'center' }}>
                                <Text style={{ fontSize: 17, fontWeight: '500', color: "#5A5A5A" }}>Generate Code</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ width: wp('45%'), backgroundColor: 'white', borderRadius: 10, padding: 10, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#9E9E9E" }}>{random}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', width: wp('45%'), padding: 10, alignSelf: 'center', margin: hp('3%'), borderRadius: 6 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6 }}>
                            <View>
                                <Image source={Path.plusIcon} style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ alignSelf: 'center', marginLeft: wp('2%') }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#9E9E9E" }}>Add another Kid?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: hp('1%'), backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('AllKidsprofile')}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Next</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </Provider>
    )
}

export default KidsProfile;

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
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
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