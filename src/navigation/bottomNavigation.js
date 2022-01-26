// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Alert, Image, StyleSheet} from 'react-native';
// import {MainStackNavigator, ContactStackNavigator} from './StackNavigator';
// import Home from '../screens/Home';
// import Achievement from '../screens/Achievment';
// import Habits from '../screens/Habits';
// import SelfProfile from '../screens/Selfprofile';
// import Homekidsprofile from '../screens/HomeKidsProfile';
// import PATH from '../constants/imagePath';
// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown:false}} >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={({route}) => ({
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={PATH.HomeScreenTab}
//               style={focused ? styles.selectedTabImg : styles.tabImg}
//             />
//           ),
//           tabBarButton:({})
//         })}
//       />
//       <Tab.Screen
//         name=" Achievement"
//         component={Achievement}
//         options={({route}) => ({
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={PATH.Achievementtab}
//               style={focused ? styles.selectedTabImg2 : styles.tabImg2}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Habits"
//         component={Habits}
//         options={({route}) => ({
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={PATH.Habittab}
//               style={focused ? styles.selectedTabImg2 : styles.tabImg2}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="SelfProfile"
//         component={SelfProfile}
//         options={({route}) => ({
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={PATH.Selfprofiletab}
//               style={focused ? styles.selectedTabImg3 : styles.tabImg3}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Homekidsprofile"
//         component={Homekidsprofile}
//         options={({route}) => ({
//           tabBarIcon: ({focused}) => (
//             <Image
//               source={PATH.KidsProfiletab}
//               style={focused ? styles.selectedTabImg3 : styles.tabImg3}
//             />
//           ),
//         })}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabNavigator;

// const styles = StyleSheet.create({
//   tabImg: {
//     alignSelf: 'center',
//     // tintColor: 'grey',
//   },
//   selectedTabImg: {
//     alignSelf: 'center',
//     // tintColor: 'red',
//   },
//   tabImg2: {
//     alignSelf: 'center',
//     // tintColor: 'grey',
//     height: 25,
//     width: 30,
//   },
//   selectedTabImg2: {
//     alignSelf: 'center',
//     // tintColor: '#0097F1',
//     height: 25,
//     width: 30,
//   },
//   tabImg3: {
//     alignSelf: 'center',
//     // tintColor: 'grey',
//     height: 25,
//     width: 25,
//   },
//   selectedTabImg3: {
//     alignSelf: 'center',
//     // tintColor: '#0097F1',
//     height: 25,
//     width: 25,
//   },
// });

// // export default BottomTabNavigator




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import Icon, { Icons } from '../component/Icons';
import Colors from '../constants/Colors';
// import ColorScreen from '../screens/ColorScreen';
import * as Animatable from 'react-native-animatable';
import Home from '../screens/Home';
import Achievement from '../screens/Achievment';
import Habits from '../screens/Habits';
import SelfProfile from '../screens/Selfprofile';
import Homekidsprofile from '../screens/HomeKidsProfile';
import PATH from '../constants/imagePath';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: PATH.HomeScreenTab, component: Home },
  { route: 'Achievement', label: 'Achievement', type: Icons.Feather, icon: PATH.Achievementtab, component: Achievement },
  { route: 'Habits', label: 'Habits', type: Icons.Feather, icon: PATH.Habittab, component: Habits },
  { route: 'SelfProfile', label: 'SelfProfile', type: Icons.Feather, icon:PATH.Selfprofiletab, component: SelfProfile },
  { route: 'Homekidsprofile', label: 'kidProfile', type: Icons.FontAwesome, icon: PATH.KidsProfiletab, component: Homekidsprofile },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
            <Image source={item.icon}  style={{ colors:focused ? Colors.white : Colors.primary}} ></Image>
          {/* <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} /> */}
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    // bottom: 16,
    // right: ,
    // left: 5,
    // borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  }
})
