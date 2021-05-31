/** @format */

import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a category!</Text>
      <Spacer />
      <Spacer>
        <Button
          title='Would You Rather'
          onPress={() => navigation.navigate('Prompt', { category: 'WYR' })}
        />
      </Spacer>
      <Spacer>
        <Button
          title='Life Advice'
          onPress={() => navigation.navigate('Prompt', { category: 'LA' })}
        />
      </Spacer>
      <Spacer>
        <Button
          title="That's a great question"
          onPress={() => navigation.navigate('Prompt', { category: 'GQ' })}
        />
      </Spacer>
      <Spacer>
        <Button
          title="What would you do"
          onPress={() => navigation.navigate('Prompt', { category: 'WWYD' })}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Our favorite things"
          onPress={() => navigation.navigate('Prompt', { category: 'OFT' })}
        />
      </Spacer>
      <Spacer>
        <Button
          title="Our favorite things"
          onPress={() => navigation.navigate('Prompt', { category: 'MD' })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
  },
});

export default HomeScreen;
