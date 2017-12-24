import React,{Component} from 'react';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';
import {StyleSheet,Text,View,Image,ImageBackground,Animated,Easing } from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplication} from '../styles/navigatorStyles';
export default class StartUpScreen extends Component {
  static navigatorStyle=startSingleScreenApplication;
  componentWillMount()
  {
    setTimeout(
      ()=>{
        this.props.navigator.push(
          {
            screen:'navigation.LoginScreen',
          }
        );
      },3000

    );
  }
  constructor () {
    super()
    this.springValue = new Animated.Value(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }
  render() {
    return (
      <View>
      <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
      <View><ImageBackground source={require('../../src/images/bg.png')} style={styles.image}>
      <Animated.Image
      style={{ width: 400, height: 600,marginTop:150,
      marginLeft:10, transform: [{scale: this.springValue}] }}
      source={require('../../src/images/logo.png')}/>
      </ImageBackground></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width:420,
    height:660,
  },
});
