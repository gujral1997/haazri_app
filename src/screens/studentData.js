import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
export default class studentData extends Component{
static navigatorStyle=startSingleScreenApplicationLogin;
  render() {
    return(
      <Text>Hello</Text>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }
})
