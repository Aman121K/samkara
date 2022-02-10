import React,{useState} from 'react';
import {View, Text, Image, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import BackgroundTheme from '../../../component/backgroundtheme';
import Path from '../../../constants/imagePath';
import { heightPercentageToDP } from '../../../utility';
const KidsProfileShow = ({navigation}) => {
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
       
    ])

    const Item = ({title}) => {
        return( 
            <View style={{ margin: '1%', backgroundColor: 'white', padding: 5, borderRadius: 10, width: '35%' }}>
            <Text style={{fontSize:10,borderWidth:.5,padding:5,borderRadius:6}} >{title.name}</Text>
        </View>
        );
      }
      const Items = ({title}) => {
        return( 
            <View style={{ margin: '1%', backgroundColor: 'white', padding:5, borderRadius: 10, width: '35%' }}>
            <Text style={{fontSize:10,borderWidth:.5,padding:5,borderRadius:6}} >{title.name}</Text>
        </View>
        );
      }
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
  return (
    <>
    <BackgroundTheme/>
    <View style={{marginTop:heightPercentageToDP('-120%')}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
<TouchableOpacity style={{margin:'3%'}} onPress={()=>navigation.goBack()}>
  <View>
    <Image source={Path.Backbutton}></Image>
  </View>
</TouchableOpacity>
          <TouchableOpacity style={{margin:'3%'}} onPress={()=>navigation.navigate('KidsProfileedits')}>
      <View style={{backgroundColor:'white',padding:10,borderRadius:50}}>
            <Image source={Path.Edit} style={{height:15,width:15}}></Image>
        </View>
        </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'black'}}>Kids Profile</Text>
        </View>
        <View style={{alignItems:'center',margin:'2%'}}>
          <Image
            source={Path.Zaya}
            style={{height: 100, width: 100, borderRadius: 50}}></Image>
          <Text style={{fontSize:16,fontWeight:'bold',margin:'2%',color:'black'}}>Zaya Smith</Text>
        </View>
        <View style={{ margin: '3%', backgroundColor: 'white', padding: 10, borderRadius: 6, marginBottom: '30%' }}>
          <View style={{ flexDirection: 'row', marginTop:'5%' }}>
            <View style={{marginLeft:'2%', marginTop:'1%'}}>
              <Image source={Path.Homeuser}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Nick Name</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>Zoo</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 5,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop:'5%' }}>
            <View style={{marginLeft:'2%', marginTop:'1%'}}>
              <Image source={Path.Homeuser}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Age</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>5</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 5,
            }}
          />
          <View style={{ flexDirection: 'row', marginTop:'5%' }}>
            <View style={{marginLeft:'2%', marginTop:'1%'}}>
              <Image source={Path.Group}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Gender</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>Male</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: 5,
            }}
          />
         <View >
           <Text style={{fontSize:17,fontWeight:"500",color:'black'}}>Interested Habits</Text>
         </View>
         <FlatList
                    data={interset}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={false}
                />
         <View style={{marginTop:heightPercentageToDP('2%')}}>
           <Text style={{fontSize:17,fontWeight:"500",color:'black'}}>Interested Habits</Text>
         </View>
         <FlatList
                    data={interset}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={false}
                />
        </View>
        
    </View>
    </>
  );
};
export default KidsProfileShow;
