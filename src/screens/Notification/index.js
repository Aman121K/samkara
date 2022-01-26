import React,{useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../constants/imagePath'
import { View ,Text,Image,FlatList} from 'react-native'
import BackgroundTheme from '../../component/backgroundtheme'
import { heightPercentageToDP, widthPercentageToDP } from '../../utility'
const Notification = ({navigation}) => {

    const [selected,setSelected]=useState(false);
    const [childList, setChildList] = useState([
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83',status:false },
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' ,status:false},
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' ,status:false},
        { id: 1, name: 'Zyan Smith', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8',status:false },
    ])
    const deleteAction=(item)=>{
        item["status"]=!item["status"],
        setSelected(!selected)
    }
    useEffect(()=>{

    },[selected])
    const renderItem = ({ item, index }) => {
        return (
                <TouchableOpacity  style={{margin:'1%',marginBottom:'3%'}} onPress={()=>deleteAction(item)}>
                    <View style={{ width: '100%', flexDirection:'row',borderRadius:6,backgroundColor:'#EAEAEA'}}>
                       
                        <View>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View>
                        <View style={{alignSelf:'center'}}>
                            <Text style={{color:'#484C76'}}>{item.name}</Text>
                            <Text style={{color:'#484C76'}}>{item.title}</Text>
                        </View>
                        {item.status?
                        <View style={{alignSelf:'center',marginLeft:widthPercentageToDP('10%')}}>
                            <Image source={require('../../assets/rcheck.png')} style={{alignSelf:'center'}}></Image>
                            </View>:null}
                       
                      
                    </View>
                </TouchableOpacity>
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
<>
<BackgroundTheme/>
        <View  style={{marginTop:heightPercentageToDP('-120%')}}>
            <View style={{margin:heightPercentageToDP('3%')}}>
                <TouchableOpacity>
                <Image source={Path.Backbutton}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#484C76',marginLeft:'7%'}}>Notifications</Text>
            <View style={{backgroundColor:'white',padding:5,borderRadius:50,alignSelf:'flex-end',margin:'3%'}}>
            <TouchableOpacity>
            <Image source={Path.Delete}></Image>
            </TouchableOpacity>
            </View>
           
           
            
            </View>
            <View style={{backgroundColor:'white',margin:'4%',borderRadius:6,padding:10}}>
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
export default Notification
