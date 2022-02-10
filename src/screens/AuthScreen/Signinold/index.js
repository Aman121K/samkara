import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TextInput ,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './style'
import testSvg from '../../../assets/loginbackground.svg';
import path from '../../../constants/imagePath';
import Custombutton from '../../../component/customButton';
import BackgroundTheme from '../../../component/backgroundtheme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from '../../../utility';

const Signin = ({ navigation }) => {
    const [mobile,setMobile]=useState();
    const[buttonColor,setButtonColor]=useState(false);
    const [selectedTab,setSelecetedTab]=useState("parent");

    const Addmobile=(e)=>{
        setMobile(e);
        if(e.length==10){
            setButtonColor(true);
        }
    }
    return (
       
        <View >
            <BackgroundTheme/>
            <KeyboardAvoidingView>
<View style={{top:heightPercentageToDP('-120%')}}>
            <Image source={path.familyIcon} resizeMode='contain' style={{alignSelf:'center'}} ></Image>
           
            <View style={{ backgroundColor: 'white', height: '70%', width: '100%', top: widthPercentageToDP('-70%'), borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View>
                        <TouchableOpacity onPress={()=>setSelecetedTab("parent")}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Parents</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>setSelecetedTab("child")}>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Kids</Text>
                    </View>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', margin: '5%' }}>
                   {selectedTab=="parent"?
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 5,
                            width: '50%'
                        }}
                    />:
                    // {selectedTab=="child"?
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 5,
                            width: '50%',
                            marginLeft:'50%'
                        }}
                    />}
                </View>
                <View style={{ marginLeft: '4%' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#484C76' }}>Welcome Back to Samskara</Text>
                </View>
                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={{ fontSize: 12,color:'black',marginRight:'2%', }}>Step closer to good Habit</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: '5%', backgroundColor: 'white', borderRadius: 10 ,opacity:5,borderWidth:.1}}>
                    <Image source={path.Homeuser} style={{ marginLeft: 10 }}></Image>
                    <TextInput placeholder="Mobile Number" placeholderTextColor="black"
                    keyboardType="number-pad"
                    maxLength={11}
                    value={mobile} onChangeText={(e)=>Addmobile(e)} style={{ marginLeft: 10,color:'black' }} />
                </View>
                <View style={buttonColor?{ margin: '5%', backgroundColor: '#2D928D', padding: 13, alignItems: 'center', borderRadius: 6 }:{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Siginverify')}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Get Code</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1, width: '45%'
                        }}
                    />
                    <View style={{ marginLeft: '2%', marginRight: '3%' }}>
                        <Text style={{color:'black'}}>or</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: '45%'
                        }}
                    />
                </View>
                <View style={{ margin: '7%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View>
                            <Image source={path.facebookIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>
                            <Image source={path.googleIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>
                            <Image source={path.twitterIcon} style={{ height: 20, width: 20 }}></Image>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </View>
            </View>
            </KeyboardAvoidingView>
        </View>
  
    )
}

export default Signin
