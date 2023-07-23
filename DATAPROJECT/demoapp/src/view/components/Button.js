import React from 'react';
import { TouchableOpacity,View,Text } from 'react-native';
const PrimaryButton = ({title,onPress =()=>{}})=>{
    return <TouchableOpacity onPress={onPress}>
        <View>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
};
export {PrimaryButton};