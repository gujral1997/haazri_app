import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import studentData from './studentData';
export function registerScreens()
{
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('navigation.studentData',()=>studentData);
}
