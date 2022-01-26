import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './bottomNavigation';
// import Drawrerbg from './drawerbg';
import Drawerbg from './drawerbg';
const Drawer = createDrawerNavigator();
const  DrawerNavigator=({navigation})=>{
    return(
        <Drawer.Navigator drawerContent={Drawerbg} >
            <Drawer.Screen name='v' component={BottomTab} options={{headerShown:false}}/>
        
            
        </Drawer.Navigator>
    )
}
export default DrawerNavigator