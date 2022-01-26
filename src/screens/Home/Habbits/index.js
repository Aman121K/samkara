import React, { useState } from 'react'
import { View, Text, Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
// import {  TouchableOpacity } from 'react-native-gesture-handler'
import Path from '../../../constants/imagePath';
import ProgressCircle from 'react-native-progress-circle'
import { heightPercentageToDP, widthPercentageToDP } from '../../../utility';
import Modal from "react-native-modal";
import BackgroundTheme from '../../../component/backgroundtheme';
const Habbitsone = ({navigation}) => {
    const [values,setValues]=useState(21);
    const [childList, setChildList] = useState([
        { id: 1, name: 'Week 1 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 65, color: '#D26F83' },
        { id: 2, name: 'Week 2 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 75, color: '#FFBF7F' },
        { id: 3, name: 'Week 3 Task', image: Path.JohnDoe, title: 'Periodo determinado', value: 35, color: '#467F9B' },
        { id: 4, name: 'Select Your Kids Name', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
        { id: 5, name: 'Setup Reminder Time', image: Path.JohnDoe, title: 'Periodo determinado', value: 95, color: '#91C6E8' },
    ])
    const [isModalVisible, setModalVisible] = useState(false);
    const [size,setSize]=useState(false);
    const toggleModal = () => {
  
        setModalVisible(false)
        // navigation.navigate("Habbitsone")
    };
    const minus=()=>{
        setValues(values-1);
    }
    const Plus=()=>{
        setValues(values+1);
    }
    const renderItem = ({ item, index }) => {
        return (
           
                    <View style={{ width: '90%', backgroundColor: 'white', margin: '2%', alignSelf: 'center',flexDirection:'row',borderRadius:10}}>
                        {/* <TouchableOpacity> */}
                        <View style={{backgroundColor:item.color,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                            <Text style={{color:item.color}}>..</Text>
                        </View>
                        {/* <View>
                            <Image source={item.image} style={{height:70,width:70}}></Image>
                            </View> */}
                             <TouchableOpacity onPress={()=>setModalVisible(true)}>
                        <View style={{alignSelf:'center',padding:10,width:widthPercentageToDP('60%')}}>
                            <Text style={{fontSize:16,fontWeight:'500',color:'#2D2D2D'}}>{item.name}</Text>
                            <Text style={{fontSize:11,fontWeight:'400',color:'#2D2D2D'}}>{item.title}</Text>
                        </View>
                        </TouchableOpacity> 

                       
                       
                       <View style={{alignSelf:'center',marginLeft:widthPercentageToDP('5%')}}>
                           {item.id==4?
                           <TouchableOpacity onPress={()=>setSize(!size)}>
                           <Image source={require('../../../assets/Vector.png')}></Image>
                           </TouchableOpacity>
                           :
                           <Image source={Path.Edit}></Image>}

{item.id==5?
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>minus()}>
                            <View style={{borderWidth:.5,padding:2,borderColor:'blue'}}>
                                <Text style={{color:'black'}}>-</Text>
                                </View>
                                </TouchableOpacity>
                                <View style={{borderWidth:.5,padding:3,borderColor:'blue'}}>
                                    <Text style={{color:'black'}}>{values}</Text>
                                    </View>
                                    <TouchableOpacity onPress={()=>Plus()}>
                                    <View style={{borderWidth:.5,padding:2,borderColor:'blue'}}>
                                        <Text style={{color:'black'}}>+</Text>
                                        </View>
                                        </TouchableOpacity>
                        </View>:null
                        }

                       
                           </View>
                          
                    </View>
                    
            
          
        );
    };
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{marginTop:heightPercentageToDP('-120%')}}>
            {/* <ScrollView> */}         
            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                <View style={{alignSelf:'center',marginLeft:10}}>
                    <TouchableOpacity>
                    <Image source={Path.Backbutton} ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                    <Image source={Path.Notification}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginLeft:'5%',margin:2}}><Text style={{fontSize:22,fontWeight:'700',color:'#484C76'}}>Habits for better change</Text></View>
            <View style={{backgroundColor:"white",width:'90%',marginLeft:'5%',borderRadius:10}}>
            <View style={{backgroundColor:'#F2F2F2',padding:5,borderRadius:10}}>
                <Text style={{color:'#2D2D2D',marginLeft:20,fontSize:16,fontWeight:'500'}}>Reading</Text>
            </View>
            <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                <View>
                    <Image source={Path.Reading}></Image>
                </View>
                <View style={{width:'82%'}}>
                    <Text style={{color:'#2D2D2D',alignSelf:'center',fontSize:14,fontWeight:'400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor molestie integer sodales amet.</Text></View>
            </View>
            </View>
            <View>
        
            <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
            </View>

           
         <TouchableOpacity onPress={()=>navigation.navigate("Giftselect")}>
            <View style={{flexDirection:'row',alignSelf:'center',width:'50%',backgroundColor:'white',margin:'5%',padding:10,borderRadius:6,alignItems:'center'}}>
                    <Image source={Path.Gift} style={{height:20,width:20,alignSelf:'center',marginLeft:10}}>
                    </Image>
                    <Text style={{marginLeft:'5%',fontWeight:'600',fontSize:17,color:'#5A5A5A'}}>Select Gift</Text>
            </View>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor:'white',alignSelf:'center',padding:20,width:'100%',borderRadius:10 }}>
            <View style={{alignSelf:'center',backgroundColor:'white',borderRadius:50,marginTop:-50}}>
            <Image source={Path.AlertChild} ></Image>
            </View>
            <View style={{alignSelf:'flex-end',top:-50,backgroundColor:'white',padding:10,borderRadius:20}}>
            <TouchableOpacity onPress={()=>setModalVisible(false)}>
            <Image source={Path.Cross}></Image>
            </TouchableOpacity>
            </View>
          <View style={{alignSelf:'center'}}>
              <Text style={{color:'#484C76',fontSize:22,fontWeight:'bold'}}>Week 1 Task</Text>
          </View>
          <View style={{padding:10,margin:'2%',backgroundColor:'#E5E5E5',borderRadius:6}}>
              <View>
                  <Text style={{color:'black',fontSize:11}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A id vitae adipiscing pharetra mi pretium. Lectus mi, consectetur aenean nisi. Adipiscing tristique  |</Text>
                  </View>
              </View>
              <TouchableOpacity onPress={()=>setModalVisible(false)}>
              <View style={{backgroundColor:'#A7CECB',marginLeft:'15%',marginRight:'15%',padding:10,borderRadius:6,marginTop:'2%'}}>
                  <Text style={{alignSelf:'center',fontWeight:'900',fontSize:18}}>Confirm</Text>
                  </View>
                  </TouchableOpacity>
        </View>
      </Modal>
{/* </ScrollView> */}
        </View>
        </>
    )

}

export default Habbitsone