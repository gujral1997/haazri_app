import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import studentData from './studentData';
import ParameterScreen from './ParameterScreen';
import studentImage from './studentImage';
import afterLogin from './afterLogin';
export function registerScreens()
{
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('navigation.studentData',()=>studentData);
  Navigation.registerComponent('navigation.ParameterScreen',()=>ParameterScreen);
  Navigation.registerComponent('navigation.studentImage',()=>studentImage);
  Navigation.registerComponent('navigation.afterLogin',()=>afterLogin);
}
