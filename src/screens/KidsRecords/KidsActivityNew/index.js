
import React from 'react';
import {View,Text,Image} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const KidsActivityNew=({navigation})=>{
    return(
        <View>
             <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
            <BackgroundTheme/>
            
            <View style={{marginTop:hp('-120%')}}>
                <View style={{flexDirection:'row'}}>
            <View>
                <Image source={Path.Zaya} resizeMode="center"></Image>
            </View>
            <View style={{alignSelf:'center'}}>
            <Text style={{color:'#365383',fontSize:15,fontWeight:'800'}}>$ 100</Text>
            </View>
            </View>
            <View style={{marginLeft:wp('4%')}}>
                <Text style={{color:'#484C76',fontSize:22,fontWeight:'700',lineHeight:30}}>In Process</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('ReportsAndActivity')}>
            <View style={{backgroundColor:'white',padding:10,width:wp('95%'),alignSelf:'center',borderRadius:10,marginTop:hp('2%')}}>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={Path.Harry} style={{height:60,width:60}}></Image>
                </View>
                <View style={{width:wp('52%')}}>
                    <Text style={{fontSize:14,fontWeight:'800',lineHeight:24}}>Drinking Water</Text>
                    <Text style={{fontSize:12,fontWeight:'400',color:'#7B7B7B'}}>random text for drining water</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <ProgressCircle
                       percent={80}
                       radius={25}
                       borderWidth={3}
                       color="green"
                       shadowColor="white"
                       bgColor="white"
                   >
                        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 12,color:'black' }}>80</Text>
            <Text style={{color:'black',marginLeft:2}}>%</Text>
            </View>
        </ProgressCircle>
        <Image source={Path.ThreeOne} style={{marginLeft:wp('4%'),top:5}}></Image>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('70%'),marginTop:'2%'}}>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,width:wp('20%')}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}>Tasks</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                        </View>
                    </View>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}> Reward</Text>
                        </View>
                        <View style={{alignSelf:'center',marginTop:hp('1.5%')}}>
                            <Image source={Path.Gift}></Image>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
            </TouchableOpacity>
            <View style={{backgroundColor:'white',padding:10,width:wp('95%'),alignSelf:'center',borderRadius:10,marginTop:hp('2%')}}>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={Path.Harry} style={{height:60,width:60}}></Image>
                </View>
                <View style={{width:wp('52%')}}>
                    <Text style={{fontSize:14,fontWeight:'800',lineHeight:24}}>Drinking Water</Text>
                    <Text style={{fontSize:12,fontWeight:'400',color:'#7B7B7B'}}>random text for drining water</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <ProgressCircle
                       percent={80}
                       radius={25}
                       borderWidth={3}
                       color="green"
                       shadowColor="white"
                       bgColor="white"
                   >
                        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 12,color:'black' }}>80</Text>
            <Text style={{color:'black',marginLeft:2}}>%</Text>
            </View>
        </ProgressCircle>
        <Image source={Path.ThreeOne} style={{marginLeft:wp('4%'),top:5}}></Image>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('70%'),marginTop:'2%'}}>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,width:wp('20%')}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}>Tasks</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                        </View>
                    </View>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}> Reward</Text>
                        </View>
                        <View style={{alignSelf:'center',marginTop:hp('1.5%')}}>
                            <Image source={Path.Gift}></Image>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
            <View style={{marginLeft:wp('4%'),marginTop:hp('2%')}}>
                <Text style={{color:'#484C76',fontSize:22,fontWeight:'700',lineHeight:30}}>Completed</Text>
            </View>
            <View style={{backgroundColor:'white',padding:10,width:wp('95%'),alignSelf:'center',borderRadius:10,marginTop:hp('2%'),marginBottom:hp('10%')}}>
                <View style={{flexDirection:'row'}}>
                <View>
                    <Image source={Path.Harry} style={{height:60,width:60}}></Image>
                </View>
                <View style={{width:wp('52%')}}>
                    <Text style={{fontSize:14,fontWeight:'800',lineHeight:24}}>Drinking Water</Text>
                    <Text style={{fontSize:12,fontWeight:'400',color:'#7B7B7B'}}>random text for drining water</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <ProgressCircle
                       percent={80}
                       radius={25}
                       borderWidth={3}
                       color="green"
                       shadowColor="white"
                       bgColor="white"
                   >
                        <View style={{flexDirection:'row'}}>
            <Text style={{ fontSize: 12,color:'black' }}>80</Text>
            <Text style={{color:'black',marginLeft:2}}>%</Text>
            </View>
        </ProgressCircle>
        <Image source={Path.ThreeOne} style={{marginLeft:wp('4%'),top:5}}></Image>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:wp('70%'),marginTop:'2%'}}>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,width:wp('20%')}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}>Tasks</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                            <Text  style={{fontSize:10,lineHeight:18,fontWeight:'400'}}>. Day 1 to Day 7 : Drink 2 glasses of water every day </Text>
                        </View>
                    </View>
                    <View style={{margin:hp('1%')}}>
                        <View style={{backgroundColor:'#A7CECB',padding:5,borderRadius:10,}}>
                        <Text style={{alignSelf:'center',fontSize:12,fontWeight:'700'}}> Reward</Text>
                        </View>
                        <View style={{alignSelf:'center',marginTop:hp('1.5%')}}>
                            <Image source={Path.Gift}></Image>
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
           
            </View>
            </ScrollView>
        </View>
    )
    }
export default KidsActivityNew;

