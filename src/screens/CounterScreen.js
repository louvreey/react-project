import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CounterScreen = () => {
  const [number, setNumber] = useState(3);

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  const increaseNumber = () => {
    setNumber(number + 5);
  };

  useEffect(() => {
    alert('Hello');
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          margin: 8,
          padding: 8,
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => decreaseNumber()}>
          <Text style={{fontSize: 50}}> - </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          margin: 8,
          padding: 8,
        }}>
        <Text style={{fontSize: 50}}>{number}</Text>
      </View>
      <View
        style={{
          margin: 8,
          padding: 8,
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => increaseNumber()}>
          <Text style={{fontSize: 50}}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;
