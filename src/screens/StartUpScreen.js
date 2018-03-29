import React,{Component} from 'react';
import AnimatedLinearGradient, {presetColors} from 'react-native-animated-linear-gradient';
import {StyleSheet,Text,View,Image,ImageBackground,Animated,Easing, Dimensions} from 'react-native';
import {startSingleScreenApplication} from '../styles/navigatorStyles';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
var {height, width} = Dimensions.get('window');
export default class StartUpScreen extends Component {
      static navigatorStyle=startSingleScreenApplicationLogin;

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
this.props.navigator.setDrawerEnabled({
  side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
  enabled: false // should the drawer be enabled or disabled (locked closed)
});
  }
  constructor () {
    super()
    this.springValue = new Animated.Value(0);
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
          <View style ={styles.container}>
              <AnimatedLinearGradient customColors={presetColors.instagram} speed={500}/>
              <ImageBackground source={require('../../src/images/bg.png')} style={styles.image}>
              <View style = {{flex:1}}/>
                <View style = {{flex:3}}>
                       <Animated.Image
                        style={{ justifyContent: 'center',
                        alignItems: 'center', width: 400, height: 600,transform: [{scale: this.springValue}] }}
                        source={require('../../src/images/logo.png')}/>
                </View>
                <View style = {{flex:1}}/>
              </ImageBackground>
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
    width:width,
    height:height,
  },
});
