import React,{Component} from 'react';
import {AppRegistry,StyleSheet,Text,View,AsyncStorage,TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
export default class studentData extends Component{
static navigatorStyle=startSingleScreenApplicationLogin;
  render() {
    return(
      <TouchableOpacity onPress={this.retrieve}>
        <Text>Sign</Text>
      </TouchableOpacity>
    );
  }
  constructor(props)
  {
    super(props);
    this.state={name:''};
  }

  retrieve=()=>
  {
    //post data to express backend point
    //fecth data via clients ip,local host never works
    fetch('http://192.168.63.1:3000/users1',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name:this.state.name,
      })
    })
    .then((response)=>response.json())
    .then((res)=>{
      alert(res.message);

    })
    .done();
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:20,
  }
})
