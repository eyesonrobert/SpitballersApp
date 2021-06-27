/** @format */

import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['white', '#ffdb9a']} style={styles.background} />
      <Text style={styles.text}>Choose a category</Text>
      <Spacer />
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'WYR' })}>
          <Text style={styles.buttonText}> Would You Rather </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'LA' })}>
          <Text style={styles.buttonText}> Life Advice </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'GQ' })}>
          <Text style={styles.buttonText}> That's a Great Question </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'WWYD' })}>
          <Text style={styles.buttonText}> What Would You Do </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'TSR' })}>
          <Text style={styles.buttonText}> The Situation Room </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'OFT' })}>
          <Text style={styles.buttonText}> Our Favorite Things </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'EISS' })}>
          <Text style={styles.buttonText}> Explain in 60 Seconds </Text>
        </TouchableOpacity>
      </Spacer>
      <Spacer>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Prompt', { category: 'MD' })}>
          <Text style={styles.buttonText}> Mock Draft </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#2c8ab5',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
