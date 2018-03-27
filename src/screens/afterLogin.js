import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground, Dimensions, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import parameterScreen from './drawerScreens/ParameterScreen'
import studentData from './drawerScreens/studentData'
import studentImage from './drawerScreens/studentImage'
var {height, width} = Dimensions.get('window');

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
                                          transparent onPress={this.toggleDrawer}
                                          >
                                                <Icon name="menu" />
                                    </Button>
                              </Left>
                          <Title>Attendance Manager</Title>
                        </Header>
                        <ImageBackground source={require('../images/HOMESCREEN.jpg')} style={styles.image}>
                        <View>

                        </View>
                  </ImageBackground>
                  </Container>
            </StyleProvider>
            );
      }

      //a
      toggleDrawer=()=> {
           this.props.navigator.toggleDrawer({
                 to: 'open',
                 side: 'left',
                 animated: true
           });
     }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
  image: {
width: width,
height: height
 },

});
