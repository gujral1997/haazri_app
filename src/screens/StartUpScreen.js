import React,{Component} from 'react';
import {StyleSheet, Text, View,Dimensions,Image,ImageBackground,Animated } from 'react-native';
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
            title:'LoginScreen',
          }
        );
      },3000

    );
  }
  render() {
    return (
      <ImageBackground source={require('../../src/images/bg.png')} style={styles.container}>
      <View style={styles.logo}><Image source={require('../../src/images/logo1.png')} style={{
         height:100,
         width:100,
         resizeMode:'stretch',
         alignItems:'center',
         justifyContent:'center'
       }}>
      </Image>
      <Text>Logo</Text>
      </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
  },
  logo:
  {
    alignItems:'center',
    justifyContent:'center',
    flexGrow:1
  },
});
