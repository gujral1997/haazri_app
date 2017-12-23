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
      <View style={styles.logo}><Image source={require('../../src/images/logo.png')} style={{
         resizeMode:'stretch',
         alignItems:'center',
         justifyContent:'center',
         height:500,
         width:300,
       }}>
      </Image>
      <Text>Splash Screen Is being Created By Hetarth</Text>
      </View>
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
  },
});
