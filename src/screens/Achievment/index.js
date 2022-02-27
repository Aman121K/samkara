// import React from 'react'
// import { View,Text } from 'react-native'
// const Achievment = ({navigation}) => {
//     return (
//         <View style={{backgroundColor:'#A7CECB',height:'100%',width:'100%'}}>
//             <Text>Achievement screen</Text>
//         </View>
//     )
// }
// export default Achievment

import React,{useState} from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../constants/imagePath'
import { View ,Text,Image,FlatList,TouchableOpacity} from 'react-native'
import BackgroundTheme from '../../component/backgroundtheme'
import { heightPercentageToDP } from '../../utility'
const Achievment = ({navigation}) => {
    const [childList, setChildList] = useState([
        { id: 1, name: 'Wake up early', image: Path.JohnDoe, title: 'Malesuada eros ipsum integer nisi suspen....', value: 65, color: '#D26F83',date:'24 Jan' },
        { id: 1, name: 'Gym', image: Path.JohnDoe, title: 'Malesuada eros ipsum integer nisi suspen....', value: 75, color: '#FFBF7F',date:'24 Jan' },
        { id: 1, name: 'Wake up early', image: Path.JohnDoe, title: 'Malesuada eros ipsum integer nisi suspen....', value: 35, color: '#467F9B',date:'24 Jan' },
        { id: 1, name: 'Healthy Eating', image: Path.JohnDoe, title: 'Malesuada eros ipsum integer nisi suspen....', value: 95, color: '#91C6E8',date:'24 Jan' },
    ])
    const renderItem = ({ item, index }) => {
        return (
                <TouchableOpacity activeOpacity={.9} style={{margin:'2%'}} onPress={()=>navigation.navigate('AchievementDetails')}>
                    <View style={{ width: '100%',flexDirection:'row',backgroundColor:'#EAEAEA',borderRadius:6}}>
                        <View style={{backgroundColor:''}}>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View>
                        <View style={{alignSelf:'center',width:'60%'}}>
                            <Text style={{fontSize:15,fontWeight:'500',color:'black'}}>{item.name}</Text>
                            <Text style={{color:'black',fontSize:10,fontWeight:'500'}}>{item.title}</Text>
                        </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{color:'black',fontSize:10,fontWeight:'500'}}>{item.date}</Text>
                            </View>
                    </View>
                </TouchableOpacity>
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            <TouchableOpacity style={{margin:heightPercentageToDP('2%')}} onPress={()=>navigation.goBack()} >
            <View>
                <Image source={Path.Backbutton} resizeMode="center"></Image>
            </View>
            </TouchableOpacity>
            <View style={{marginLeft:'4%'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#484C76'}}>Achivements</Text>
            
            
            </View>
            <View style={{backgroundColor:'white',margin:'4%',borderRadius:6,padding:10,height:'55%'}}>
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>
        </View>
        </>
    )
}
export default Achievment
