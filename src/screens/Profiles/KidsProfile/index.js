import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Image, TextInputComponent, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Path from '../../../constants/imagePath';
import path from '../../../constants/imagePath';
import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';
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
import DropDown from "react-native-paper-dropdown";
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
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.assets.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response.assets.uri);
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
                        <Image source={Path.ProfileLogo} style={{ height: 100, width: 100 }}></Image>
                        <View style={{ top: -20 }}>
                            <TouchableOpacity onPress={() => chooseFile('photo')}>
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
                        <View style={{ width: wp('45%') }}>
                            <DropDown

                                // dropDownStyle={{backgroundColor:'red'}}
                                label={"Gender"}
                                mode={"flat"}
                                visible={showDropDown}
                                showDropDown={() => setShowDropDown(true)}
                                onDismiss={() => setShowDropDown(false)}
                                value={gender}
                                setValue={setGender}
                                list={genderList}
                            />
                            {/* <TouchableOpacity style={{ marginLeft: '63%' }}>
                            <Image source={require('../../../assets/Vector.png')} ></Image>
                        </TouchableOpacity> */}
                        </View>
                    </View>
                    <View style={{ margin: '5%' }}>
                        <Text style={{ fontWeight: '500', fontSize: 17, color: 'black' }}>Select one or more areas where you want your kids to be better*</Text>
                    </View>
                    {/* {habbits.map((item, index) => (

                    <View key={index} style={{ margin: '3%', backgroundColor: 'white', padding: 10, borderRadius: 10, width: '30%' }}>
                        <Text style={{flexWrap:'wrap'}}>{item.name}</Text>
                    </View>

                ))
                } */}
                <View style={{width:wp('95%'),marginLeft:wp('5%')}}>
                    <FlatList
                        data={habbits}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        scrollEnabled={false}
                    // contentContainerStyle={{ flexGrow: 1 }}
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

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', width: wp('45%'), padding: 10, alignSelf: 'center', margin: hp('4%'), borderRadius: 6 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 6 }}>
                            <View>
                                <Image source={Path.plusIcon} style={{ height: 20, width: 20, alignSelf: 'center', marginLeft: 5 }}></Image>
                            </View>
                            <View style={{ alignSelf: 'center', marginLeft: wp('2%') }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#9E9E9E" }}>Add another Kid?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: hp('3%'), backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
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

    RegisterButton: {
        width: wp('80%'),
        height: hp('8%'),
        backgroundColor: "pink",
        borderColor: Constants.red,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: Constants.transparent,
    },
    text:
        { fontSize: 18, alignSelf: "center", color: Constants.red },

    progress:
    {
        width: "85%",
        alignSelf: "center",
        marginTop: hp("5%"),
        bottom: 0,
        position: "absolute",
        marginBottom: "5%"

    },
    item: {
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: .5,
        borderColor: "#CDE5E4",
        margin: 2,
        borderRadius: 5,
        // width: wp("25%"),
        // height: 45,
    },
    head:
        { width: "90%", alignSelf: "center", marginTop: 30, },
    topin:
        { marginTop: 40, alignSelf: "center" },
    welcomeTxt: {
        fontSize: 20,
        fontWeight: '600',
        width: wp('90%'),
        textAlign: "center",
        color: Constants.black,
        marginTop: 30,
    },
});