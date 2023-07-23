/* 
 import React from 'react';
import 'react-native-gesture-handler';

import{StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './OnBoardScreen';
import DetailsScreen from './DetailsScreen';
import BottomNavigator from '../navigations/BottomNavigator';
import colors from '../../consts/colors';
import BankScreen from './BankScreen';
const Stack = createStackNavigator();

const MainScreen = () =>{
  return(
    <NavigationContainer>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='BoardScreen' component={OnBoardScreen} />
          <Stack.Screen name='Home' component={BottomNavigator}   />
          <Stack.Screen name='Bank' component={BankScreen}   />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainScreen;  */


import React from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import { Colors } from 'react-native-paper';
import { PrimaryButton } from '../components/Button';
import OnBoardScreen from './OnBoardScreen';

export default OnBoardScreen = ({navigation}) =>{

   
return (
<View>
<OnBoardScreen 
  title={"home"} 
  headerBg={Colors.green} 
  menu 
  right="more-vertical"
  rightFuction={()=> console.log("log")}
  OptionalIcon="bell" optionalFunc={()=> console.log("o")}
/>
</View>

);
}
 
/*

drawer install and after
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/  */


