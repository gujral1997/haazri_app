import React,{Component} from 'react';
import {StyleSheet, Text, View,Dimensions,Image,ImageBackground,Animated } from 'react-native';
export default class StartUpScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../../src/images/bg.png')} style={styles.container}>
      <View>
      <Image source={require('../../src/images/car.png')} style={{
         height:100,
         width:100,
         position:'absolute',
         zIndex:1,
         bottom:50,
         resizeMode:'stretch',
       }}>
      </Image>
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
});
