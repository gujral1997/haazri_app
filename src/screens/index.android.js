import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import afterLogin from './afterLogin';
import studentData from './drawerScreens/studentData';
import Drawer from './Drawer';
import React,{Component} from 'react';

/*function screenWrapper (WrappedComponent, model) {
  let wrapperClass = class extends React.Component {
    constructor (props) {
      super(props)
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
    }
    onNavigatorEvent (event) {
      if (event.type === 'DeepLink') { // For now, just go to screen
        const parts = event.link.split('/')
        this.props.navigator.resetTo({ screen: parts[0], passProps: { params: parts.slice(1) } })
      }
    }
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  // MERGE styles
  if (WrappedComponent.navigatorStyle) {
    wrapperClass.navigatorStyle = Object.assign(wrapperClass.navigatorStyle, WrappedComponent.navigatorStyle)
  }
  return wrapperClass
}*/

// import SideBar from './drawerScreens/SideBar'
export function registerScreens()
{
  //Navigation.registerComponent('navigation.StartUpScreen',()=>screenWrapper(StartUpScreen), store, Provider);
  //Navigation.registerComponent('navigation.LoginScreen',()=>screenWrapper(LoginScreen), store, Provider);
  //Navigation.registerComponent('navigation.afterLogin',()=>screenWrapper(afterLogin), store, Provider);
  //Navigation.registerComponent('navigation.studentData',()=>screenWrapper(studentData), store, Provider);
  //Navigation.registerComponent('navigation.Drawer',()=>screenWrapper(Drawer), store, Provider);
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('navigation.afterLogin',()=>afterLogin);
  Navigation.registerComponent('navigation.studentData',()=>studentData);
  Navigation.registerComponent('navigation.Drawer',()=>Drawer);
}
