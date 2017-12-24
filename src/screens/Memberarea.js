import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
export default class Memberarea extends Component{
  static navigatorStyle=startSingleScreenApplicationLogin;
  //Set initial State
  state={
    userName:[],
  }
  componentDidMount(){
    this.__loadInitialState().done();
  }
  //Load initial state
  __loadInitialState=async()=>{
    //Get username from AsyncStorage
    var value=await AsyncStorage.getItem('userName');
    if(value!==null){
      this.setState({userName:value});
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Welcome {this.state.userName}</Text>
        </View>
    );
  }
  /*navigatorRenderScreen(route,navigator){
    __navigator=navigator;
    switch(route.id)
    {
      case 'Login':
        return(<Login navigator={navigator}/>);
      case 'Memberarea':
        return (<Memberarea navigator={navigator}/>);
    }
  }*/
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }
})
