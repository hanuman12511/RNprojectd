import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Surface, Title} from 'react-native-paper';
import { color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  colors  from  '../../consts/colors';
import { PrimaryButton } from '../components/Button';

export default OnBoardScreen = () =>{

   
return(
    <Surface style={{height:50,flexDirection:'row'}}>
        <View style={{flex:1,margin:10,backgroundColor:"yellow"}}>
            
            {<TouchableOpacity>
                <Icon name="menu" size={30} color="red" />
            </TouchableOpacity>}
            
            { <TouchableOpacity>
                <Icon name="arrow-left" size={30} color="red" />
            </TouchableOpacity>}

        </View>
        <View style={{flex:1,margin:10,backgroundColor:"yellow"}}>
            <Title>Home</Title>
        </View>
   
        <View style={{flex:1,margin:10,backgroundColor:"yellow"}}></View>
   
    </Surface>
);

}
/*

drawer install and after
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/  */


