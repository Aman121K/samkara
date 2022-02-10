
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mainstcak from './src/navigation/stackNavigation';
// import { EventRegister } from 'react-native-event-listeners'
const App= ()=>{
  return(
    <NavigationContainer >
      <Mainstcak/>
    </NavigationContainer>
  )
}
export default App;