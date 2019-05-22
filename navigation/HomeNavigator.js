import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import InGameScreen from '../screens/InGameScreen';

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    InGame: InGameScreen,
  }
);

export default createAppContainer(HomeNavigator);