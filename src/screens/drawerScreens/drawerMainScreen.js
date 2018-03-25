import React, { Component } from 'react';
import { Text, Image, StyleSheet } from 'react-native';

export default class drawerMainScreen extends Component {

      static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../images/bg01.jpg')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
