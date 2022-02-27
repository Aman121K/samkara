
import React,{useState} from 'react';
import {View, Text, Image, ScrollView,FlatList, TouchableOpacity,TextInput,StyleSheet} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import {
    Appbar,
    DarkTheme,
    DefaultTheme,
    Provider,
    Surface,
    ThemeProvider,
  } from "react-native-paper";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
const KidsProfileedits = ({navigation}) => {
    const [gender, setGender] = useState();
    const [showDropDown, setShowDropDown] = useState(false);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [filePath, setFilePath] = useState();
    const [newdate,setNewDate]=useState('');
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
    const [habbits, setHabbits] = useState([
        {
            id: 1,
            name: 'Eating Healthy'
        },
        {
            id: 2,
            name: 'Physical Fitness'
        },
        {
            id: 3,
            name: 'Singing'
        },
        {
            id: 4,
            name: 'Money Savings Skills'
        },
        {
            id: 5,
            name: 'Helping with Chores'
        },
    ])
    const [interset, setInterest] = useState([
        {
            id: 1,
            name: 'Cycling'
        },
        {
            id: 2,
            name: 'Reading'
        },
        {
            id: 3,
            name: 'Dancing'
        },
        {
            id: 4,
            name: 'Wake up early'
        },
        {
            id: 5,
            name: 'Tennis'
        },
        {
            id: 6,
            name: 'Badminton'
        },
        {
            id: 7,
            name: 'Piano'
        },
    ])  
    const renderItem = ({ item,index }) => {
        return (
            <TouchableOpacity  >
            <View style={{ backgroundColor: '#EAEAEA', borderRadius: 6, justifyContent: 'space-around', alignItems: 'center', marginLeft: '5%',  margin: '1.5%',padding:2,flexDirection:'row' }}>
                {item.status?
                <Image source={require('../../../assets/rcheck.png')} style={{height:10,width:10}}></Image>:null}
                <Text style={{ color: "#9E9E9E", padding: 6 }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        );
        }

        const updateProfileAPi=()=>{
            
        }
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
  return (
      <Provider>
    <ScrollView>
      <BackgroundTheme/>
    <View style={{marginTop:hp('-118%')}}>
        <View style={{alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={Path.Backbutton} resizeMode="center" style={{marginLeft:10}}></Image>
            </TouchableOpacity>
          <Text style={{fontSize:22,fontWeight:'bold',color:'black',marginLeft:widthPercentageToDP('30%')}}>Kids Profile</Text>
        </View>
        <View style={{alignItems:'center',margin:'2%'}}>
            {filePath?<Image source={{uri:filePath}} style={{height: 100, width: 100, borderRadius: 50}}></Image>:
          <Image
            source={Path.Zaya}
            style={{height: 100, width: 100, borderRadius: 50}}></Image>}
          <View style={{top:-20}}>
             <TouchableOpacity  onPress={() => openGallary()}>
           <Image source={Path.Camera} style={{tintColor:'white',height:20,width:20,marginLeft:40}}></Image>
           </TouchableOpacity>
           </View>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                    <TextInput
                        style={{ marginLeft: 10 ,color:'black'}}
                        placeholder="Name or Nick Name *"
                        value="Harry smith"
                        placeholderTextColor="black"
                        autoCapitalize="none"
                        value="Harry Smith"
                    />
                </View>
                <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', alignSelf: 'center', margin: '2%' }}>
                    <TextInput
                        style={{ marginLeft: 10,color:'black' }}
                        placeholder="Name or Nick Name *"
                        placeholderTextColor="#9E9E9E"
                        autoCapitalize="none"
                        value="Zoo"
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '95%', alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 5, width: '45%', alignItems: 'center', margin: '2%', flexDirection: 'row', }}>
                        <TextInput
                            style={{ marginLeft: 10,color:'black' }}
                            placeholder="Age*"
                            value="5"
                            placeholderTextColor="#9E9E9E"
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={{ marginLeft: widthPercentageToDP('20%%')}}  onPress={() => setOpen(true)}>
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
                <View style={{width:wp('45%'),top:'2%'}}>
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
                <View style={{marginLeft:'5%'}}>
                    <Text style={{color:'black',fontWeight:'500',fontSize:17}}>Interest Habit</Text>
                    <FlatList
                    data={interset}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={false}
                />
                </View>
                <View style={{ marginTop: heightPercentageToDP('15%'), backgroundColor: '#A7CECB', padding: 13, alignSelf: 'center', borderRadius: 6,width:widthPercentageToDP('90%'),alignItems:'center' }}>
            <TouchableOpacity  onPress={()=>updateProfileAPi()}>
                    <Text  style={{color:'white',fontSize:20,fontWeight:'900'}}>Update Profile</Text>
            </TouchableOpacity>
            </View>
     
    </View>
    </ScrollView>
    </Provider>
  );
};
export default KidsProfileedits;

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
