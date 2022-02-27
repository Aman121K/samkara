
import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import {  } from 'react-native-gesture-handler';
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
import { List } from 'react-native-paper';
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../utility';
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';

const EditProfile = ({ navigation }) => {
  const [gender, setGender] = useState();
  const [showDropDown, setShowDropDown] = useState(false);
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
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [newdate, setNewDate] = useState('');
  const [filePath, setFilePath] = useState();
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const openGallary=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setFilePath(image.path);
      console.log(image);
    });
  }
  const updateProfileAPi = () => {
  }
  return (
    <Provider>
      <ScrollView style={{ backgroundColor: '#CDE5E4' }} showsVerticalScrollIndicator={false}>
        <BackgroundTheme />
        <View style={{ marginTop: heightPercentageToDP('-118%') }}>
          <View style={{marginLeft:'5%'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={path.Backbutton} resizeMode="center"></Image>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>My Profile</Text>
          </View>
          <View style={{ alignSelf: 'center', margin: '2%' }}>
            {filePath ? <Image source={{uri:filePath}} style={{height:100,width:100,borderRadius:50}}></Image> :
              <Image source={path.ParentProfile} style={{ height: 100, width: 100 }}></Image>}
            <View style={{ top: -20 }}>
              <TouchableOpacity onPress={() => openGallary()}>
                <Image source={path.Camera} style={{ tintColor: 'white', height: 20, width: 20, alignSelf: 'flex-end', }}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Full Name*"
              value="Bella Smith"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>
          <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
              <TextInput
                style={{ marginLeft: 10, color: 'black' }}
                placeholder="Age*"
                value="30"
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
            <View style={{ width: wp('45%'), top: '2%' }}>
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
          <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
              <TextInput
                style={{ marginLeft: 10, color: 'black' }}
                placeholder="Country*"
                value="India"
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
              />
              <TouchableOpacity style={{ marginLeft: wp('17%') }} >
                <Image source={require('../../../assets/Vector.png')}  ></Image>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 5, width: wp('45%'), alignItems: 'center', margin: hp('.7%'), flexDirection: 'row', }}>
              <TextInput
                style={{ marginLeft: 10, color: 'black' }}
                placeholder="State*"
                value="Gujrat"
                placeholderTextColor="#9E9E9E"
                autoCapitalize="none"
              />
              <TouchableOpacity style={{ marginLeft: wp('20%') }}>
                <Image source={require('../../../assets/Vector.png')}  ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignItems: 'center', margin: '2%', flexDirection: 'row', marginLeft: '5%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="City"
              value="Surat"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
            <TouchableOpacity style={{ marginLeft: wp('68%') }}>
              <Image source={require('../../../assets/Vector.png')}  ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Occupation*"
              value="House wife"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />

          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Mobile Number"
              value="+919090909090"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
            <TextInput
              style={{ marginLeft: 10, color: 'black' }}
              placeholder="Email ID"
              value="bellasmith@gmail.com"
              placeholderTextColor="#9E9E9E"
              autoCapitalize="none"
            />
          </View>
          <View style={{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
            <TouchableOpacity onPress={() => updateProfileAPi()}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Update Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </Provider>
  )
}
export default EditProfile;
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
    backgroundColor: 'white'
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

