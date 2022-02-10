import React, { useEffect,useState } from 'react'
import { View ,Text,TouchableOpacity,ScrollView,Image, FlatList} from 'react-native';
import BackgroundTheme from '../../../../component/backgroundtheme';
import Path from '../../../../constants/imagePath';
import { heightPercentageToDP } from '../../../../utility';

const Nonmaterialgift = ({navigation}) => {
    const [change,setChange]=useState(false);
    useEffect(()=>{

    },[change])
    const [data,setData]=useState([
        {id:1,name:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',status:false},
        {id:2,name:'Fringilla eleifend fames est, eleifend enim consequat..',status:false},
        {id:3,name:'Nam vestibulum lacus, a pharetra pellentesque..',status:false},
        {id:4,name:'Enim diam, volutpat, erat vitae tortor consectetur vitae..',status:false}
    ])
   const valueSelected=(item)=>{
       item["status"]=!item["status"];
       setChange(!change);
       console.log(item);

   }
    const renderItem=({item,index})=>{
        return(
            <View style={{padding:10,backgroundColor:'white',width:'90%',margin:'3%',borderRadius:10}}>
                <TouchableOpacity onPress={()=>valueSelected(item)} style={{flexDirection:'row'}}>
                    {item.status==true?
                    <Image source={require('../../../../assets/rcheck.png')} style={{alignSelf:'center',marginRight:10}}></Image>:null}
            <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </TouchableOpacity>
        </View>
        )
    }
    const keyExtractor = (item, index) => item + index;
    return (
        <>
        <BackgroundTheme/>
        <View style={{ marginTop:heightPercentageToDP('-120%') }}>

            <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                <TouchableOpacity style={{marginLeft:'5%',alignSelf:'center'}} onPress={()=>navigation.goBack()}>
                <View >
                    <Image source={Path.Backbutton} ></Image>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                <View>
                    <Image source={Path.Notification} style={{ height: 70, width: 70 }}></Image>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"white",width:'90%',marginLeft:'5%',borderRadius:10}}>
            
            <View style={{flexDirection:'row',padding:10,borderRadius:10}}>
                <View>
                    <Image source={Path.Gift}></Image>
                </View>
                <View style={{width:'90%',alignSelf:'center',marginLeft:10}}>
                    <Text style={{color:'black',fontWeight:'600',fontSize:14}}>Non Meterial Gifting</Text></View>
            </View>
            </View>
            <View>
                <View style={{margin:'3%'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Suggested Non Meterial Gift</Text>
                </View>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
                {/* <View style={{padding:10,backgroundColor:'white',width:'90%',margin:'3%',borderRadius:10}}>
                    <Text style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View> */}
                {/* <View style={{padding:10,backgroundColor:'white',width:'90%',margin:'3%',borderRadius:10}}>
                    <Text style={{color:'black'}}>Fringilla eleifend fames est, eleifend enim consequat..</Text>
                </View>
                <View style={{padding:10,backgroundColor:'white',width:'90%',margin:'3%',borderRadius:10}}>
                    <Text style={{color:'black'}}>Nam vestibulum lacus, a pharetra pellentesque..</Text>
                </View>
                <View style={{padding:10,backgroundColor:'white',width:'90%',margin:'3%',borderRadius:10}}>
                    <Text style={{color:'black'}}>Enim diam, volutpat, erat vitae tortor consectetur vitae..</Text>
                </View> */}
                <View style={{alignSelf:'flex-end' ,marginRight:10}}>
                    <Text style={{color:'black',fontWeight:'600',fontSize:15}}>Not able to find, custmise the gift here</Text>
                </View>
        
            {/* <FlatList
                data={childList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            /> */}
            </View>

           
         <TouchableOpacity onPress={()=>navigation.navigate('Activityassign')}>
         <View style={{width:'80%',backgroundColor:'#A7CECB',padding:10,borderRadius:6,margin:'10%'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,color:'white',alignSelf:'center'}}>Confirmed</Text>
            </View>
            </TouchableOpacity>
           



{/* </ScrollView> */}
        </View>
        </>
    
    )
}

export default Nonmaterialgift
