import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import drawerMainScreen from './drawerScreens/drawerMainScreen'
import parameterScreen from './drawerScreens/ParameterScreen'
import studentData from './drawerScreens/studentData'
import studentImage from './drawerScreens/studentImage'
var {height, width} = Dimensions.get('window');


import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import React, { Component } from 'react';

export default class afterLogin extends Component {

      _toggleDrawer() {
           this.props.navigator.toggleDrawer({
                 to: 'closed',
                 side: 'left',
                 animated: true
           });
     }

     _goToScreen1() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "navigation.studentData"
		});
	}

      componentWillMount() {
            this.props.navigator.setDrawerEnabled({
              side: 'left',
              enabled: true
            });
      }
      static navigatorStyle=startSingleScreenApplicationLogin;
      render () {
            return(
            <StyleProvider style={getTheme(material)}>
                  <Container>
                        <Button  onPress={this._goToScreen1.bind(this)}>
                              <Icon name= "menu"/>
                        </Button>
                  </Container>
            </StyleProvider>
            );
      }
}

done =()=> {
      alert('Hello')
      this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
        });
        this.props.navigator.resetTo({
            screen: 'navigation.studentData'
        });

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
