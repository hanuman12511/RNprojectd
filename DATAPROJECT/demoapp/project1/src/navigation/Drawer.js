import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Stack from '../navigation/Stack';

const DrawerStack = createDrawerNavigator();
export default DrawerStack=()=>{
    return(
        <NavigationContainer>
            <DrawerStack.Navigator initialRouteName="stack">
                <DrawerStack.Screen name="stack" component={Stack} />  
                <DrawerStack.Screen name="Home" component={Home} />   
            </DrawerStack.Navigator>
        </NavigationContainer>
    );

}