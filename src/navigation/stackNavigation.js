
import React from 'react';
import Onboarding from '../onboarding/index';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../screens/AuthScreen/Signin';
import SigninVerify from '../screens/AuthScreen/SigninVerify';
import ParentsProfile  from '../screens/Profiles/ParentsProfile';
import kidsProfile from '../screens/Profiles/KidsProfile';
import AllKidsprofile from '../screens/Profiles/AllKidsProfile';
import WelcomeScreen from '../screens/Profiles/ProfileComplete';
import HomeScreen from '../screens/Home';
import BottomTabNavigator from './bottomNavigation';
import Habbits from '../screens/Home/Habbits';
import SelectGift from '../screens/Home/Gift/Selectgift';
import GiftList from '../screens/Home/Gift/GiftListing';
import GIftListing from '../screens/Home/Gift/GiftListing';
import Nonmaterialgift from '../screens/Home/Gift/Nonmaterail';
import Activityassign from '../screens/Home/ActivityAssign';
import Notification from '../screens/Notification';
import AchievementDetails from '../screens/Achievment/Achievmentdetailspage';
import KidsProfileedits from '../screens/HomeKidsProfile/KidsProfileedits';
import KidsProfileShow from '../screens/HomeKidsProfile/KidsProfileShow';
import EditProfile from '../screens/Selfprofile/EditselfProfile';
import drawer from './drawer';
// import Albumn from '../screen/Draw/Albums';
import Drawerbg from './drawerbg';
import KidsActivity from '../screens/KidsRecords/KidsActivity';
import KidsHomeScreen from '../screens/KidsRecords/KidsHomescree';
import KidsRewards from '../screens/KidsRecords/KidsRewards';
import ReportsAndActivity from '../screens/KidsRecords/ReportsAnalytics';
import Habitsdetails from '../screens/Habits/HabitsDetails/index';

const Stack = createStackNavigator();
const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown:false}}/>   
            <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/> 
            <Stack.Screen name="Siginverify" component={SigninVerify} options={{headerShown:false}}/>
            <Stack.Screen name="ParentsProfile" component={ParentsProfile} options={{headerShown:false}}/>
            <Stack.Screen name="KidsProfile" component={kidsProfile} options={{headerShown:false}}/>
            <Stack.Screen name="AllKidsprofile" component={AllKidsprofile} options={{headerShown:false}}/>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
               <Stack.Screen name="Drawerbg" component={Drawerbg} options={{headerShown:false}}/>
        <Stack.Screen name ="drawer" component ={drawer} options={{headerShown:false}}/>

            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{headerShown: false}}/>
        <Stack.Screen name ="Habbitsone" component={Habbits} options={{headerShown:false}}/>
        <Stack.Screen name="Habitsdetails" component={Habitsdetails} options={{headerShown:false}}/>
        <Stack.Screen name ="Giftselect" component={SelectGift} options={{headerShown:false}}/>
        <Stack.Screen name ="Giftlist" component={GIftListing} options={{headerShown:false}}/>
        <Stack.Screen name ="Nonmaterial" component={Nonmaterialgift} options={{headerShown:false}}/>
        <Stack.Screen name ="Activityassign" component={Activityassign} options={{headerShown:false}}/>
        <Stack.Screen name ="Notification" component={Notification} options={{headerShown:false}}/>
        <Stack.Screen name ="AchievementDetails" component={AchievementDetails} options={{headerShown:false}}/>
        <Stack.Screen name ="KidsProfileedits" component={KidsProfileedits} options={{headerShown:false}}/>
        <Stack.Screen name ="KidsProfileShow" component={KidsProfileShow} options={{headerShown:false}}/>
        <Stack.Screen name ="EditProfile" component={EditProfile} options={{headerShown:false}}/>
        <Stack.Screen name ="KidsActivity" component={KidsActivity} options={{headerShown:false}}/>
        <Stack.Screen name ="KidsHomeScreen" component={KidsHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name ="KidsRewards" component={KidsRewards} options={{headerShown:false}}/>
        <Stack.Screen name ="ReportsAndActivity" component={ReportsAndActivity} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default Stacks;