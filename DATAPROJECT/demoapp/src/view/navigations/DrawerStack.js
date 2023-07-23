
 import React from 'react';
 import 'react-native-gesture-handler';

 import colors from '../../consts/colors';
 import{StatusBar,View,Text} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import OnBoardScreen from '../screens/OnBoardScreen';
 import DetailsScreen from '../screens/DetailsScreen';
 import BottomNavigator from './BottomNavigator';
 import BankScreen from '../screens/BankScreen';
 import Notifications from '../screens/Menubar/Notifications';
 import About from '../screens/Menubar/About';
 
 import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
 
 import MainScreen from '../screens/MainScreen';
 const Stack = createStackNavigator();
 
  
 const Drawer = createDrawerNavigator();
   
 const StackApp = () =>{
   return(
    /* 
         <StatusBar backgroundColor={colors.white} barStyle="dark-content" /> */
         <Stack.Navigator /*  screenOptions={{headerShown:false}} */ >
           <Stack.Screen name='BoardScreen' component={OnBoardScreen} options={{ headerShown: false }} />
           <Stack.Screen name='Home' component={BottomNavigator}   />
           <Stack.Screen name='Bank' component={BankScreen}   />
           <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
         
         </Stack.Navigator>
    
   );
 };

 const CustDrawer=(props)=>{
    return(
      <DrawerContentScrollView>
      
        <View style={{flex:1,height:300,backgroundColor:"red"}}>
     <Text>Email:-</Text>
        </View>
        <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
 };
  function DrawerStack() {
   return (
     <NavigationContainer >
           <StatusBar backgroundColor={colors.white} barStyle="dark-content" /> 
       <Drawer.Navigator
            drawerContent={(props)=><CustDrawer {...props}/>}
            /* initialRouteName="Home" */>
         <Drawer.Screen name="MainScreen" component={StackApp}  options={{ headerShown: false }}  />
         <Drawer.Screen name="Notifications" component={Notifications} />
         <Drawer.Screen name="About" component={About} />
       </Drawer.Navigator>
     </NavigationContainer>
   );
 };
 
 
 
 export default DrawerStack; 
 
 