import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity,StyleSheet } from 'react-native';
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
import { List } from 'react-native-paper';
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../utility';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'
import CountryPicker from 'react-native-country-picker-modal'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const ParentsProfile = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDownstate, setShowDropDownstate] = useState(false);
  const [country, setCountry] = useState();
  const [state, setState] = useState(null);
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
  const stateList = [
    {
      label: "Punjab",
      value: "Punjab",
    },
    {
      label: "Uttar Pardesh",
      value: "Uttar Pardesh",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [newdate, setNewDate] = useState('');
  const [filePath, setFilePath] = useState();
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
  const openCiuntry = () => {
  }
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: '#CDE5E4' }} showsVerticalScrollIndicator={false}>
        <BackgroundTheme />
        <View style={{ marginTop: heightPercentageToDP('-115%') }}>
          <View style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>My Profile</Text>
          </View>
          <View style={{ alignSelf: 'center', margin: '2%' }}>
            {filePath ? <Image source={{uri:filePath}} style={{ height: 100, width: 100,borderRadius:50 }}></Image> :
              <Image source={path.ProfileLogo} style={{ height: 100, width: 100 }}></Image>}
            <View style={{ top: -20 }}>
              <TouchableOpacity onPress={() => chooseFile()}>

                <Image source={path.Camera} style={{ tintColor: 'white', height: 20, width: 20, alignSelf: 'flex-end', }}></Image>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Full Name*"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
              returnKeyType="done"
            />
          </View>
          <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
              <TextInput
                style={{ marginLeft: 10, color: 'black' }}
                placeholder="Age*"
                value={newdate}
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
              />
              <TouchableOpacity style={{ marginLeft: wp('20%') }} onPress={() => setOpen(true)}>
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
        search
        maxHeight={200}
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
          <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
              <TextInput
                style={{ marginLeft: 10, color: 'black' }}
                placeholder="Country*"
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
                value={country}
              />
              <TouchableOpacity style={{ marginLeft: wp('15%') }} onPress={() => openCiuntry()}>
                <Image source={require('../../../assets/Vector.png')}  ></Image>
                <CountryPicker onSelect={(e) => setCountry(e.name)}></CountryPicker>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp('45%'), marginTop: hp('1%') }}>
            <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={stateList}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="State*"
        searchPlaceholder="Search..."
        value={state}
        onChange={item => {
          setState(item.value);
        }}
      />
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignItems: 'center', margin: '2%', flexDirection: 'row', marginLeft: '5%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="City"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
            
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Occupation*"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />

          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Mobile Number"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Email ID"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>
          <View style={{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
            <TouchableOpacity onPress={() => navigation.navigate('KidsProfile')}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Create Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

    </Provider>
  )
}
export default ParentsProfile;

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