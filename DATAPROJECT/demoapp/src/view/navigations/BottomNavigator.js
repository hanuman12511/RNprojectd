import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../consts/colors';
import{View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const BottomNavigator = () =>{

    return <Tab.Navigator>
        <Tab.Screen name='HomeScreen'
         component={HomeScreen} 
         options={{headerShown: false,
                       tabBarLabel: 'Home',
             tabBarIcon: ({ color}) => (
               <View style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}>
              <Icon name="home" size={30} color="#900" />
                 </View>
             ),
          }}  />
         <Tab.Screen name='DetailsScreen'
         component={DetailsScreen} 
         options={{headerShown: false,
            tabBarLabel: 'Setting',
             tabBarIcon: ({ color }) => (
                <View>
                <Icon
                    name="hotel"
                    color={color}
                    size={30}
                  />
                  </View>
             ),
          }} />

<Tab.Screen name='BankScreen'
         component={BankScreen} 
         options={{headerShown: false,
            tabBarLabel: 'chart',
             tabBarIcon: ({ color }) => (
                <View>
                <Icon
                    name="call"
                    color={color}
                    size={30}
                  />
                  </View>
             ),
          }} />
    </Tab.Navigator>;
};
export default BottomNavigator;

 
