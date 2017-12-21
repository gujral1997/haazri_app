import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplication} from '../styles/navigatorStyles';
export default class LoginScreen extends Component
  {
    static navigatorStyle=startSingleScreenApplication;
    render(){
      return(
        <View>
          <Text>Login Screen</Text>
        </View>
      )
    }
  }
