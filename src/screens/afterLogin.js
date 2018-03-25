import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text, StyleSheet, Button, Image } from 'react-native';
import LoginScreen from './LoginScreen'
import drawerMainScreen from './drawerScreens/drawerMainScreen'
import studentData from './drawerScreens/studentData'
//import drawerMainScreen from './drawerScreens/studentImage'

import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class afterLogin extends Component {
      static navigatorStyle=startSingleScreenApplicationLogin;
      render () {

            return(
                  <MyApp />
            );
      }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: drawerMainScreen,
  },
  "Ongoing Attendance": {
    screen: studentData,
  },
});
