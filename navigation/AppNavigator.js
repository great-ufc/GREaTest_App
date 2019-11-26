import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import HomeNavigator from "../navigation/HomeNavigator";
import RulesScreen from "../screens/RulesScreen";
import AboutScreen from "../screens/AboutScreen";
import SideMenu from "../components/SideMenu";

const DrawerConfig = {
  contentComponent: ({ navigation }) => {
    return <SideMenu navigation={navigation} />;
  }
};

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    Rules: {
      screen: RulesScreen
    },
    About: {
      screen: AboutScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(AppNavigator);
