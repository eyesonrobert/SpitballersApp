/** @format */

import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animated, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Spacer from '../components/Spacer';
import * as GreatQuestion from '../prompts/GreatQuestion';
import * as LifeAdvice from '../prompts/LifeAdvice';
import * as FavoriteThings from '../prompts/FavoriteThings';
import * as MockDraft from '../prompts/MockDraft';
import * as WhatWouldYouDo from '../prompts/WhatWouldYouDo';
import * as WouldYouRather from '../prompts/WouldYouRather';
import * as Explain from '../prompts/Explain';
import * as SituationRoom from '../prompts/SituationRoom';
import Countdown from './Countdown';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PromptScreen = ({ navigation }) => {
  const category = navigation.getParam('category');
  let optionsArr = [];
  let categoryTitle = '';

  if (category === 'LA') {
    categoryTitle = 'Life Advice';
    optionsArr = LifeAdvice.arr;
  }

  if (category === 'GQ') {
    categoryTitle = `That's a Great Question`;
    optionsArr = GreatQuestion.arr;
  }

  if (category === 'WYR') {
    categoryTitle = 'Would You Rather';
    optionsArr = WouldYouRather.arr;
  }

  if (category === 'WWYD') {
    categoryTitle = 'What would you do';
    optionsArr = WhatWouldYouDo.arr;
  }

  if (category === 'TSR') {
    categoryTitle = 'The Situation Room';
    optionsArr = SituationRoom.arr;
  }

  if (category === 'OFT') {
    categoryTitle = 'Our Favorite Things';
    optionsArr = FavoriteThings.arr;
  }

  if (category === 'EISS') {
    categoryTitle = 'Explain in 60 Seconds';
    optionsArr = Explain.arr;
  }

  if (category === 'MD') {
    categoryTitle = 'Mock Draft';
    optionsArr = MockDraft.arr;
  }

  const [displayPrompt, setDisplayPrompt] = useState('');
  const [episode, setEpisode] = useState(0);

  if (!displayPrompt) {
    let randomId = Math.floor(Math.random() * optionsArr.length);

    optionsArr.find((prompt) => {
      if (prompt.id === randomId) {
        setEpisode(prompt.episode);
        return setDisplayPrompt(prompt.text);
      }
    });
  }

  const randomizePrompt = () => {
    let randomId = Math.floor(Math.random() * optionsArr.length);

    optionsArr.find((prompt) => {
      if (prompt.id === randomId) {
        setEpisode(prompt.episode);
        return setDisplayPrompt(prompt.text);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Spacer></Spacer>
      <Card>
        <Card.Title>{categoryTitle}</Card.Title>
        <Text style={styles.text}>{displayPrompt}</Text>
      </Card>
      <Text style={styles.episodeNumber}>episode: {episode}</Text>

    <Countdown/>
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={() => {
          randomizePrompt();
        }}>
        <Feather name='refresh-cw' size={30} color='#01a699' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    margin: 25,
  },
  refreshButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 100,
    position: 'absolute',
    top: windowHeight - 250,
    left: windowWidth - 110,
  },
  categoryTitle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
  },
  episodeNumber: {
    position: 'absolute',
    top: windowHeight - 220,
    left: 20,
  },
});

export default PromptScreen;
