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

function screenWrapper (WrappedComponent, model) {
  let wrapperClass = class extends React.Component {
    static navigatorStyle = { // Shared styling for all screens
      ...styles.screen
      // statusBarHidden: true // DOESNT WORK with native-base, needs to be done via RN StatusBar hidden
    }
    constructor (props) {
      super(props)
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }
    onNavigatorEvent (event) {
      if (event.type === 'DeepLink') { // For now, just go to screen
        const parts = event.link.split('/')
        this.props.navigator.resetTo({ screen: parts[0], passProps: { params: parts.slice(1) } })
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  // MERGE styles
  if (WrappedComponent.navigatorStyle) {
    wrapperClass.navigatorStyle = Object.assign(wrapperClass.navigatorStyle, WrappedComponent.navigatorStyle)
  }
  return wrapperClass
}

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
             transparent onPress={this.done}
            >
             <Icon name="menu" />
          </Button>
                              </Left>
                          <Title>Attendance Manager</Title>
                        </Header>
                        <ImageBackground source={require('../images/HOMESCREEN.jpg')} style={styles.image}/>
                  </Container>
            </StyleProvider>
            );
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
