import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplication} from '../styles/navigatorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends Component
  {
    static navigatorStyle=startSingleScreenApplication;
    render(){
      return(
        <View style={styles.container}>
        <View>
        <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.inputBar}>
          <View style={{height:40,width:30,alignItems:'center',justifyContent:'center',borderRightWidth:0.8,borderRightColor:'#ebebeb'}}>
          <Icon name="at" size={16} color="#4c4c4c" />
          </View>
          <TextInput style={styles.inputText} placeholder='Your Email Address'/>
          </View>
          <View style={styles.seprator}></View>
          <View style={styles.inputBar}>
          <View style={{height:40,width:30,alignItems:'center',justifyContent:'center',borderRightWidth:0.8,borderRightColor:'#ebebeb'}}>
          <Icon name="lock" size={16} color="#4c4c4c"/>
          </View>
          <TextInput style={styles.inputText} placeholder='Your Password'/>
          </View>
        </View>
        </View>
      );
    }
  }
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(0,132,149)',
  },
  text:{
    fontSize:22,
    color:'white',
    marginBottom:10,
  },
  loginContainer:{
    padding:5,
    height:90.8,
    backgroundColor:'#fff'
  },
  inputBar:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inputText:{
    backgroundColor:'white',
    color:'black',
    width:200,
    height:40,
    paddingTop:5,
    paddingLeft:10,
    paddingBottom:5,
    paddingRight:10
  },
  seprator:{
    borderWidth:0.8,
    borderBottomColor:'#ebebeb',
    marginBottom:5,
    marginTop:5
  }
})
