import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { StyleSheet, Image, ImageBackground } from 'react-native';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import LoginScreen from './LoginScreen'
import drawerMainScreen from './drawerScreens/drawerMainScreen'
import parameterScreen from './drawerScreens/ParameterScreen'
import studentData from './drawerScreens/studentData'
import studentImage from './drawerScreens/studentImage'
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button } from 'native-base';

import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class afterLogin extends Component {
      static navigatorStyle=startSingleScreenApplicationLogin;
      render () {
            return(
            <StyleProvider style={getTheme(material)}>
                  <Container>
                        <Header>
                          <Title>Attendance Manager</Title>
                        </Header>
                        <MyApp>
                        <Image source={require('../images/Background-for-Menu.jpg')} />
                  </MyApp>
                  </Container>
            </StyleProvider>
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
  "Mark Now": {
        screen: parameterScreen
 },
  "Ongoing Attendance": {
    screen: studentData,
  },
  "Absantees": {
    screen: studentImage,
  },
  navigationOptions: ({ navigation }) => ({
  headerLeft : <MenuButton navigate={navigation.navigate} />,
}),

});
