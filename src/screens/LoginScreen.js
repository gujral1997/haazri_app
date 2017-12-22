import React, {Component} from 'react';
import {Image,StyleSheet,View,Text,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoginScreen extends Component
  {
    static navigatorStyle=startSingleScreenApplicationLogin;
    render(){
      return(
        <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
>
          <View style={{alignItems:'center',marginTop:-10}}>
          <Image source={require('../../src/images/logo.png')} style={styles.Image}/>
          </View>
          <View style={{marginTop:-170}}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.text}>Login</Text>
          </View>
        <View style={styles.loginContainer}>
          <View style={styles.inputBar}>
          <View style={{height:40,width:30,alignItems:'center',justifyContent:'center',borderRightWidth:0.8,borderRightColor:'#ebebeb'}}>
          <Icon name="at" size={16} color="#4c4c4c" underlineColorAndroid="#fff" />
          </View>
          <TextInput style={styles.inputText} placeholder='Your Email Address' keyboardType="email-address"/>
          </View>
          <View style={styles.seprator}></View>
          <View style={styles.inputBar}>
          <View style={{height:40,width:30,alignItems:'center',justifyContent:'center',borderRightWidth:0.8,borderRightColor:'#ebebeb'}}>
          <Icon name="lock" size={16} color="#4c4c4c"/>
          </View>
          <TextInput style={styles.inputText} placeholder='Your Password' secureTextEntry={true} underlineColorAndroid="#fff"/>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:-80}}>
          <TouchableOpacity>
            <Text style={styles.button}>Sign In</Text>
          </TouchableOpacity>
        </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgb(9,30,52)',
  },
  text:{
    fontSize:22,
    color:'white',
    marginBottom:10,
  },
  loginContainer:{
    padding:5,
    height:90.8,
    backgroundColor:'#fff',
    marginBottom:100,
    borderRadius:10,
    justifyContent:'center'
  },
  inputBar:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
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
    borderWidth:0.2,
    borderBottomColor:'#ebebeb',
    marginBottom:5,
    marginTop:5
  },
  button:{
    backgroundColor:'#fff',
    color:'rgb(9,30,52)',
    fontSize:16,
    padding:5,
    width:150,
    textAlign:'center',
    borderRadius:10
  },
  Image:{
    height:300,
    width:300
  }

})
