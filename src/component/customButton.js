import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native';
// import {  } from 'react-native-gesture-handler';

const customButton = ({navigation,route,text}) => {
    console.log("routes",route);
    const routes=()=>{
        navigation.navigate('Signinverify')
    }
    return (
        <View>
          <TouchableOpacity activeOpacity={.8} onPress={()=>routes()}>
                    <View style={{margin:'5%',backgroundColor:'#A7CECB',padding:15,borderRadius:10}}>
                    <Text style={{alignSelf:'center',fontSize:15,fontWeight:'900',color:'white'}}>{text}</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default customButton
