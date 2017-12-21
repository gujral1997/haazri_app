import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
export function registerScreens()
{
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
}
