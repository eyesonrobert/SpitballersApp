/** @format */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0); //this is known as array destructuring
  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          //   counter++; don't do this since it modifies the var directly
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          //   counter--; don't do this since it modifies the var directly
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styls = StyleSheet.create({});

export default CounterScreen;
