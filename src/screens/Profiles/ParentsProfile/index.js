import React ,{useState} from 'react';
import { View,Text,TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import path from '../../../constants/imagePath';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import { List } from 'react-native-paper';
import BackgroundTheme from '../../../component/backgroundtheme';
import { heightPercentageToDP } from '../../../utility';
import DatePicker from 'react-native-date-picker'
// import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
// import { file } from '@babel/types';
const ParentsProfile = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [newdate,setNewDate]=useState('');
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
      <View>
         <ScrollView style={{backgroundColor:'#CDE5E4'}}>
         <BackgroundTheme />
        <View style={ {marginTop: heightPercentageToDP('-115%')}}>
           
              <View style={{alignSelf:'center'}}>
                <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>My Profile</Text>
                </View>
            <View style={{alignSelf:'center',margin:'2%'}}>
            {filePath?<Image source={filePath}></Image>:
           <Image source={path.ProfileLogo} style={{height:100,width:100}}></Image>}
             <View style={{top:-20}}>
             <TouchableOpacity  onPress={() => chooseFile('photo')}>
              
           <Image source={path.Camera} style={{tintColor:'white',height:20,width:20,alignSelf:'flex-end',}}></Image>
           </TouchableOpacity>
           </View>
          
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10,color:'black'}}
               placeholder = "Full Name*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%',  alignItems: 'center', margin: '2%', flexDirection:'row', }}>
                        <TextInput
                            style={{ marginLeft: 10,color:'black' }}
                            placeholder="Age*"
                            value={newdate}
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                         <TouchableOpacity style={{marginLeft:'69%'}} onPress={() => setOpen(true)}>
                         <Image source={require('../../../assets/CalendarVector.png')}  ></Image>
                         </TouchableOpacity>
                    </View>
                     <DatePicker
         mode="date"
         modal={true}
        open={open}
        date={date}
        onConfirm={(date) => {
          console.log("VIkas",date);
          setOpen(false)
          setDate(date)
          setNewDate(date);
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection:'row', }}>
                    <TextInput
                           style={{marginLeft:10,color:'black'}}
                            placeholder="Gender*"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                    {/* <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}
                        <TouchableOpacity style={{marginLeft:'60%'}}>
                        <Image source={require('../../../assets/Vector.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection:'row', }}>
                        <TextInput
                            style={{marginLeft:10,color:'black'}}
                            placeholder="Country*"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={{marginLeft:'60%'}} >
                         <Image source={require('../../../assets/Vector.png')}  ></Image>
                         </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%',  flexDirection:'row', }}>
                        <TextInput
                           style={{marginLeft:10,color:'black'}}
                            placeholder="State*"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={{marginLeft:'67%'}}>
                         <Image source={require('../../../assets/Vector.png')}  ></Image>
                         </TouchableOpacity>
                    </View>
                </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignItems:'center',margin:'2%', flexDirection:'row',marginLeft:'5%'}}>
            <TextInput 
            style={{marginLeft:10,color:'black'}}
               placeholder = "City"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
              <TouchableOpacity style={{marginLeft:'87%'}}>
              <Image source={require('../../../assets/Vector.png')}  ></Image>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10,color:'black'}}
               placeholder = "Occupation*"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
              
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10,color:'black'}}
               placeholder = "Mobile Number"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{backgroundColor:'white',borderRadius:5,width:'90%',alignSelf:'center',margin:'2%'}}>
            <TextInput 
            style={{marginLeft:10,color:'black'}}
               placeholder = "Email ID"
               placeholderTextColor = "#9E9E9E"
               autoCapitalize = "none"
              />
            </View>
            <View style={{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('KidsProfile')}>
                    <Text  style={{color:'white',fontSize:20,fontWeight:'700'}}>Create Profile</Text>
            </TouchableOpacity>
            </View>
        </View>
       
        </ScrollView>
        </View>
    )
}
export default ParentsProfile;