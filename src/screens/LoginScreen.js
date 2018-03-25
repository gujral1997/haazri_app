import React, {Component} from 'react';
import {Image,StyleSheet,View,Text,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView,AsyncStorage, Platform, BackHandler, ToastAndroid } from 'react-native';
import {Navigation} from 'react-native-navigation';
import RnTestExceptionHandler from 'rn-test-exception-handler';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
export default class LoginScreen extends Component
  {
        componentWillMount()
        {
          /*setTimeout(
            ()=>{
             this.props.navigation.navigate('loginScreen');
            },3000
     );*/
     if (Platform.OS !== 'android') return
     BackHandler.addEventListener('hardwareBackPress', () => {
          const { dispatch } = this.props;
          // dispatch({ type: 'Navigation/BACK' });
          // dispatch({ type: 'Back' })
          ToastAndroid.showWithGravityAndOffset(
                    'Press Home to minize the App!',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
          return true;
    });
}

     componentWillUnmount() {
          if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress');
    }
    static navigatorStyle=startSingleScreenApplicationLogin;
    render(){

      return(
        <KeyboardAvoidingView
          style={styles.container}
        behavior="padding">
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
                <TextInput style={styles.inputText} placeholder='Your Email Address' keyboardType="email-address" underlineColorAndroid="#fff"
                  onChangeText={(userName)=>this.setState({userName})}
                  value={this.state.userName}
                />
              </View>
              <View style={styles.seprator}></View>
              <View style={styles.inputBar}>
                <View style={{height:40,width:30,alignItems:'center',justifyContent:'center',borderRightWidth:0.8,borderRightColor:'#ebebeb'}}>
                  <Icon name="lock" size={16} color="#4c4c4c"/>
                </View>
                <TextInput style={styles.inputText} placeholder='Your Password' secureTextEntry={true} underlineColorAndroid="#fff"
                  onChangeText={(password)=>this.setState({password})}
                  value={this.state.password}
                />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:-80}}>
              <TouchableOpacity onPress={this.login}>
                <Text style={styles.button}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
    constructor(props)
    {
      super(props);
      this.state={userName:'',password:''};
    }

    login=()=>
    {
      //post data to express backend point
      //fecth data via clients ip,local host never works
      fetch('http://192.168.43.137:3000/users',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          userName:this.state.userName,
          password:this.state.password,
        })
      })
      .then((response)=>response.json())
      .then((res)=>{
        //If response is true,as set in Express route/users
        if(res.success===true){
          var userName=res.message;
          //AsyncStorage Used to store the user name
          AsyncStorage.setItem('userName',userName);
          //Then we redirect to studentData
          this.props.navigator.push({
            screen:'navigation.afterLogin'
          });
          //If login,doesnt succeed
        }
        else {
          {
            alert(res.message);
          }
        }

      })
      .catch(function(){
            ToastAndroid.showWithGravityAndOffset(
                     'Can\'t connect to Internet!',
                     ToastAndroid.LONG,
                     ToastAndroid.BOTTOM,
                     25,
                     50
                   );
      });
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
