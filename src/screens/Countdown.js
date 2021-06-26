/** @format */

import React, { useState } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Spacer from '../components/Spacer';

const Countdown = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);

  return (
    <View style={styles.container}>
    <CountdownCircleTimer
      key={key}
      isPlaying={isPlaying}
      duration={60}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2],
      ]}
      onComplete={() => [true, 999999999999999]}>
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
    <Spacer>
      <Button
        title={isPlaying ? 'Stop' : 'Start'}
        onPress={() => setIsPlaying((prev) => !prev)}
      />
    </Spacer>
      <Button
        title='Restart'
        onPress={() => setKey((prevKey) => prevKey + 1)}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
    padding: 8,
    paddingBottom: 50,
    zIndex: -1,
  },
});

export default Countdown;
