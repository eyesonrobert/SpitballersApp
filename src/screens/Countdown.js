/** @format */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

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
        onComplete={() => [true, 999999]}>
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ paddingRight: 35, paddingTop: 15 }}>
          <TouchableOpacity
            style={styles.startStopButton}
            onPress={() => setIsPlaying((prev) => !prev)}>
            <Text style={styles.buttonText}>
              {isPlaying ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingLeft: 35, paddingTop: 15 }}>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={() =>
              setKey((prevKey) => prevKey + 1, setIsPlaying(false))
            }>
            <Text style={styles.buttonText}> Reset </Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingBottom: 150,
    zIndex: -1,
  },
  startStopButton: {
    alignItems: 'center',
    backgroundColor: '#fffaf0',
  },
  resetButton: {
    alignItems: 'center',
    backgroundColor: '#fffaf0',
  },
  buttonText: {
    color: '#2c8ab5',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'flex-start',
  },
});

export default Countdown;
