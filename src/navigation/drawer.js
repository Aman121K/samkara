import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './bottomNavigation';
import Drawrerbg from './drawerbg';
import Drawerbg from './drawerbg';
const Drawer = createDrawerNavigator();
const  DrawerNavigator=()=>{
    return(
        <Drawer.Navigator drawerContent={Drawerbg} 
        >
            <Drawer.Screen  name="vvv" component={BottomTab} options={{headerShown:false}}/>
    
        </Drawer.Navigator>
    //     <Drawer.Navigator
    //     drawerContentOptions={{
    //         activeTintColor: 'black',
    //     }}>
    //     <Drawer.Screen
    //         name="BottomTab"
    //         component={BottomTab}
    //         options={{ drawerLabel: 'open drawer' }}
    //     />
    // </Drawer.Navigator>
    )
}
export default DrawerNavigator