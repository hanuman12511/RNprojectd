import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreens from '../screens/Mainscreens';
const StackNav = createNativeStackNavigator();
export default Stack=()=>{

    return(
    
        <StackNav.Navigator>
            <StackNav.Screen name="home" component={MainScreens} />

        </StackNav.Navigator>
    
        );
}