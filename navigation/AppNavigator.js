import React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeNavigator from '../navigation/HomeNavigator';
import RulesScreen from '../screens/RulesScreen';
import AboutScreen from '../screens/AboutScreen';

const AppNavigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
    Rules: RulesScreen,
    About: AboutScreen,
  }
);

export default createAppContainer(AppNavigator);