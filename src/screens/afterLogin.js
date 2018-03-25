import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text, StyleSheet, Button, Image } from 'react-native';
import LoginScreen from './LoginScreen'
import drawerMainScreen from './drawerScreens/drawerMainScreen'
//import drawerMainScreen from './drawerScreens/studentData'
//import drawerMainScreen from './drawerScreens/studentImage'
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
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


class MyNotificationsScreen extends React.Component {
  static navigatorStyle=startSingleScreenApplicationLogin;
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/bg01.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
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
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
