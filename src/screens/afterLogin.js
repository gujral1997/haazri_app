import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground } from 'react-native';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import drawerMainScreen from './drawerScreens/drawerMainScreen'
import parameterScreen from './drawerScreens/ParameterScreen'
import studentData from './drawerScreens/studentData'
import studentImage from './drawerScreens/studentImage'

import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Left, Icon } from 'native-base';

import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class afterLogin extends Component {
      componentWillMount() {
            this.props.navigator.setDrawerEnabled({
              side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
              enabled: true // should the drawer be enabled or disabled (locked closed)
            });
      }
      static navigatorStyle=startSingleScreenApplicationLogin;
      render () {
            return(
            <StyleProvider style={getTheme(material)}>
                  <Container>
                        <Header>
                              <Left>
                                    <Button
             transparent
            >
             <Icon name="menu" />
          </Button>
                              </Left>
                          <Title>Attendance Manager</Title>
                        </Header>
                        <Image source={require('../images/Background-for-Menu.jpg')} />
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
