/** @format */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import PromptScreen from './src/screens/PromptScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Prompt: PromptScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Spitballers App',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(navigator);
