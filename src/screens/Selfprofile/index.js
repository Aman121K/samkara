// import React from 'react'
// import { View ,Text} from 'react-native'
// const SelfProfile = () => {
//     return (
//         <View style={{backgroundColor:'#A7CECB',height:'100%',width:'100%'}}>
//             <Text>Self Profile</Text>
//         </View>
//     )
// }
// export default SelfProfile

import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundTheme from '../../component/backgroundtheme';
import Path from '../../constants/imagePath';
import { heightPercentageToDP } from '../../utility';
const SelfProfile = ({ navigation }) => {
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
    {
      id: 6,
      name: 'Badminton'
    },
    {
      id: 7,
      name: 'Piano'
    },
  ])

  const Item = ({ title }) => {
    return (
      <View style={{ margin: '1%', backgroundColor: 'white', padding: 5, borderRadius: 10, width: '35%' }}>
        <Text style={{ fontSize: 10, borderWidth: .5, padding: 5, borderRadius: 6 }} >{title.name}</Text>
      </View>
    );
  }
  const Items = ({ title }) => {
    return (
      <View style={{ margin: '1%', backgroundColor: 'white', padding: 5, borderRadius: 10, width: '35%' }}>
        <Text style={{ fontSize: 10, borderWidth: .5, padding: 5, borderRadius: 6 }} >{title.name}</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => (
    <Item title={item} />
  )
  const renderItems = ({ item }) => (
    <Items title={item} />
  )
  return (
    <>
    <BackgroundTheme/>
    <ScrollView style={{ marginTop:heightPercentageToDP('-120%') }}>
    <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '5%', alignItems: 'center' }}>

          <View style={{ marginLeft: '40%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76' }}>My Profile</Text>
          </View>
          <View style={{ width: '10%', backgroundColor: 'white', borderRadius: 50, padding: 10 }}>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('KidsProfileedits')}> */}
            <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
              <Image source={Path.Edit} style={{ height: 15, width: 15 }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image source={Path.ParentProfile} style={{ height: 100, width: 100 }}></Image>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#484C76' }}>Bella Smith</Text>
        </View>
        <View style={{ margin: '3%', backgroundColor: 'white', padding: 10, borderRadius: 6, marginBottom: '30%' }}>
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
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>Female</Text>
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
              <Image source={Path.Country}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Country</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>India</Text>
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
              <Image source={Path.State}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>State</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>Gujarat</Text>
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
              <Image source={Path.City}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>City</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>Surat</Text>
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
              <Image source={Path.Occuption}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Occupation</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>House Wife</Text>
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
              <Image source={Path.Phone}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Mobile Number</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>+91 5558574787</Text>
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


          <View style={{ flexDirection: 'row', marginTop:'5%',  }}>
            <View style={{marginLeft:'2%', marginTop:'1%'}}>
              <Image source={Path.Email}></Image>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ color: '#666666', marginLeft: 10, fontWeight:'bold' }}>Email Id</Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#484C76', marginLeft: 10 }}>bella@gmail.com</Text>
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
        </View>
     
    </View>
    </ScrollView>
    </>
  );
};

export default SelfProfile;
