import React,{useState} from 'react';
import {View,Text,Image,ImageBackground,FlatList,TouchableOpacity} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../../utility';
const KidsHomeScreen=()=>{
    const [childList, setChildList] = useState([
        { id: 1, name: 'Task 1', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 1, name: 'Task 2', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 1, name: 'Task 3', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
    ])
    const renderItem = ({ item, index }) => {
        return (
                // <TouchableOpacity onPress={()=>navigation.navigate('KidsActivity')}>
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        
                        <View style={{alignItems:'center',marginLeft:'5%',padding:10}}>
                            <Text style={{color:'black',fontSize:16,fontWeight:'500'}}>{item.name}</Text>
                            <Text style={{color:'black',fontWeight:'400',fontSize:11}} >{item.title}</Text>
                        </View>
                       
                       <View style={{alignSelf:'center',marginLeft:90}}>
                           <TouchableOpacity>
                           <ImageBackground source={Path.RIng} style={{height:40,width:40}}>
                      <Image source={Path.Homelike} style={{margin:10}}></Image>
                      </ImageBackground>
                      </TouchableOpacity>
                           </View>
                    </View>
                // </TouchableOpacity>
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return(
        <View>
            <BackgroundTheme />
            <View style={{marginTop:hp('-120%')}}>
                <View>
                    <Image source={Path.Zaya} resizeMode="center"></Image>
                </View>
                <View style={{marginLeft:wp('5%'),marginBottom:hp('2%')}}>
                <Text style={{color:'#484C76',fontSize:16,fontWeight:'500'}}>Hello Zyan!</Text>
                </View>
                <View style={{ padding: 5, backgroundColor: 'white', marginLeft: '4%', marginRight: '4%', marginBottom: '4%', borderRadius: 10 }}>
                        <ImageBackground source={Path.HomeGirl} resizeMode="contain" >
                            <View style={{ paddingTop: 50, paddingBottom: 50, paddingLeft: 10, borderRadius: 20 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>WE FIRST MAKE OUR HABITS</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>THEN OUR HABITS</Text>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>MAKES US</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{marginLeft:wp('5%'),marginBottom:hp('2%')}}>
                        <Text style={{color:'#484C76',fontSize:16,fontWeight:'500'}}>Today Task</Text>
                    </View>
                    <View style={{alignSelf:'center',width:wp('70%')}}>
                        <Text style={{color:'#3A7BB1'}}>Here are your tasks for today
</Text>
<Text style={{marginLeft:wp('5%'),color:'#3A7BB1'}}>Hit the thumb when done</Text>
                    </View>
                    <View>
                    <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
                    </View>

            </View>
        </View>
    )
    }
export default KidsHomeScreen;
