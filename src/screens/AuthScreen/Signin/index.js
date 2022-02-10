import React, { useState,useEffect ,useRef} from 'react';
import { View, Text, ImageBackground, Image, TextInput, KeyboardAvoidingView,TouchableOpacity,StyleSheet } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import styles from './style'
import testSvg from '../../../assets/loginbackground.svg';
import path from '../../../constants/imagePath';
import Custombutton from '../../../component/customButton';
import BackgroundTheme from '../../../component/backgroundtheme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import {  } from 'react-native-gesture-handler';
const CELL_COUNT = 5;
const Signin = ({ navigation }) => {
    const [mobile, setMobile] = useState();
    const [buttonColor, setButtonColor] = useState(false);
    const [selectedTab, setSelecetedTab] = useState("parent");
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], 
      webClientId:
        '1093501519299-1pca1d19m9pddp1rmllhb902lkvvk3uq.apps.googleusercontent.com', 
      offlineAccess: true, 
    });
  }, []);

    const Addmobile = (e) => {
        setMobile(e);
        if (e.length == 10) {
            setButtonColor(true);
        }
    }
    const loginwithgoogle=async()=>{
        // _signIn = async () => {
            try {
              await GoogleSignin.hasPlayServices();
              const {accessToken, idToken} = await GoogleSignin.signIn();
              setloggedIn(true);
              console.log("login condition is",loggedIn);
              const credential = auth.GoogleAuthProvider.credential(
                idToken,
                accessToken,
              );
              await auth().signInWithCredential(credential);
            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Cancel');
              } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
                // play services not available or outdated
              } else {
                  console.log("other issues");
                // some other error happened
              }
          };
    }
    const PhoneVerify=async()=>{
            console.log("mobile number is",mobile);
            // try {
            //     const confirmation = await auth().signInWithPhoneNumber(+91+mobile);
            //     console.log("new confirmation is",confirmation);
            //     setConfirm(confirmation);
            //   } catch (error) {
            //     alert(error);
            //   }
            navigation.navigate('Siginverify')
        // navigation.navigate('KidsHomeScreen')
    }
    return (
        <KeyboardAvoidingView  behavior="padding" scrollEnabled={false}>
            <BackgroundTheme />
            {/* <ScrollView> */}
                <View style={{ marginTop: heightPercentageToDP('-120%') }}>
                    <Image source={path.familyIcon} resizeMode='contain' style={{ justifyContent: 'center', alignSelf: 'center',}} ></Image>
                    <ImageBackground source={require('../../../assets/abcddesign.png')} style={{ height: "75%", width: '100%', marginTop: '-55%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View>
                                <TouchableOpacity onPress={() => setSelecetedTab("parent")}>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Parents</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => setSelecetedTab("child")}>
                                <View >
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#484C76' }}>Kids</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: '4%' }}>
                            {selectedTab == "parent" ?
                                <View
                                    style={{
                                        borderBottomColor: '#A7CECB',
                                        borderBottomWidth: 5,
                                        width: '50%'
                                    }}
                                /> :
                                // {selectedTab=="child"?
                                <View
                                    style={{
                                        borderBottomColor: '#A7CECB',
                                        borderBottomWidth: 5,
                                        width: '50%',
                                        marginLeft: '50%'
                                    }}
                                />}
                        </View>
                        <View style={{ marginLeft: '4%',marginTop:5 }}>
                            <Text style={{ fontSize: 30, fontWeight: '700', color: '#484C76' }}>Welcome Back to Samskara</Text>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text style={{ fontSize: 16, color: 'black', marginRight: '3%', fontWeight: '500' }}>Step closer to good Habit</Text>
                        </View>

                        {selectedTab == "parent" ?
                        <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: '5%', backgroundColor: 'white', opacity: 5, elevation: 3, borderRadius: 10}}>
                            <Image source={path.Homeuser} style={{ marginLeft: 10 }}></Image>
                            <TextInput placeholder="Mobile Number" placeholderTextColor="black"
                                keyboardType="number-pad"
                                maxLength={11}
                                value={mobile} onChangeText={(e) => Addmobile(e)} style={{ marginLeft: 10, color: 'black' }} />
                        </View>
                        <View style={buttonColor ? { margin: '5%', backgroundColor: '#2D928D', padding: 13, alignItems: 'center', borderRadius: 6 } : { margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                            <TouchableOpacity onPress={() => PhoneVerify()}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Get Code</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1, width: '45%'
                        }}
                    />
                    <View style={{ marginLeft: '2%', marginRight: '3%' }}>
                        <Text style={{color:'gray', fontSize: 20}}>or</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            width: '45%'
                        }}
                    />
                </View>
                <View style={{ margin: '7%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity>
                            <Image source={path.facebookIcon} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>loginwithgoogle()}>
                            <Image source={path.googleIcon} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                            <Image source={path.twitterIcon} style={{ height: 20, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                
                </View>:
                <View>
                        <View style={{marginLeft:wp('7%'),marginRight:wp('7%'),margin:'3%'}}>
                            <Text style={{fontWeight:'500',fontSize:16,color:'#484C76'}}>Please complete Parents profile
 and generate pin for your Kid if
you are login first time  </Text>
                        </View>
                        <View style={{width:wp('80%'),alignSelf:'center'}}>
                        <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View style={{margin:widthPercentageToDP('2%'),alignSelf:'center'}} key={index}>
                            <Text
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                </View>

                        <View style={buttonColor ? { margin: '5%', backgroundColor: '#2D928D', padding: 13, alignItems: 'center', borderRadius: 6 } : { margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                            <TouchableOpacity onPress={() =>navigation.navigate('KidsHomeScreen')}>
                                <View>
                                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>
                
                }
                    </ImageBackground>
                </View>
                {/* </ScrollView> */}
            </KeyboardAvoidingView>
     

    )
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 10 },
    title: { textAlign: 'center', fontSize: 18, fontWeight: '500', color: '#484C76' },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 6,
        color: '#484C76'

    },
    focusCell: {
        borderColor: '#000',
        borderRadius: 6,
        color: '#484C76'
    },
});

export default Signin
