import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground, Dimensions, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
var {height, width} = Dimensions.get('window');

import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class sample extends Component {
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
                                    <TouchableOpacity
                                     onPress={this.toggleDrawer}
                                          >
                                                <Icon name="menu" />
                                    </TouchableOpacity>
                              </Left>
                          <Title style={{marginTop: 5}}>Attendance Manager</Title>
                        </Header>
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
