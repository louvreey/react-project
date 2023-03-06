import React from 'react';
import {View, Text, TextInput} from 'react-native';

export const InputComponents = (props) => {
    const { title, height } = props;
    return(
        <View>
            <Text style={{ marginTop: 12, marginBottom: 12}}>
                {title}
            </Text>
            <TextInput 
            style={{
                padding: 10, 
                borderWidth: 1,
                height: height,
                font: 16
            }}
            {...props}
            />
        </View>
    )
};