import React,{Component} from 'react';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch, ToastAndroid, ImageBackground, Image, Dimensions } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
var {height, width} = Dimensions.get('window');

export default class drawerMainScreen extends Component {

      static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../ICONS/ICONS_BLACK/01.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
  render() {
    return (
           <ImageBackground source={require('../../images/HOMESCREEN.jpg')} style={styles.image}/>
    );
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
