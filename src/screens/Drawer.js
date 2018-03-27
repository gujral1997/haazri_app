import { StackNavigator, DrawerNavigator, NavigationActions  } from 'react-navigation'
import { StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button, Icon, Left } from 'native-base';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import parameterScreen from './drawerScreens/ParameterScreen'
import studentData from './drawerScreens/studentData'
import studentImage from './drawerScreens/studentImage'
var {height, width} = Dimensions.get('window');
width = 0.75*width;

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

     _goTostudentData() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "navigation.studentData"
		});
	}

      _goToafterLogin() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "navigation.afterLogin"
		});
	}

      _goToabsent() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "navigation.studentImage"
		});
	}

      _goTomarkit() {
		this._toggleDrawer();
		this.props.navigator.push({
      screen: "navigation.parameterScreen"
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
                        {/*<Button  onPress={this._goToScreen1.bind(this)}>
                              <Icon name= "menu"/>
                        </Button>*/}
                        <ImageBackground source={require('../images/Background-for-Menu.jpg')} style={styles.image}>
                        <TouchableOpacity
                           style={styles.button}
                           onPress={this._goToafterLogin.bind(this)}
                          >
                           <Text style={styles.text}> Home</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={this._goTomarkit.bind(this)}
                           >
                            <Text style={styles.text}> Mark It!</Text>
                           </TouchableOpacity>
                           <TouchableOpacity
                             style={styles.button}
                             onPress={this._goTostudentData.bind(this)}
                            >
                             <Text style={styles.text}> Attendance</Text>
                            </TouchableOpacity>
                           <TouchableOpacity
                             style={styles.button}
                             onPress={this._goToabsent.bind(this)}
                            >
                             <Text style={styles.text}> Absantes</Text>
                            </TouchableOpacity>
                    </ImageBackground>
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
 button: {
    backgroundColor: 'transparent',
    padding: 10
  },
  text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Stark'
 }
});
