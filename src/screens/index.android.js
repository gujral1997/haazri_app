import {Navigation} from 'react-native-navigation';
import StartUpScreen from './StartUpScreen';
import LoginScreen from './LoginScreen';
import ParameterScreen from './ParameterScreen';
import afterLogin from './afterLogin';
export function registerScreens()
{
  Navigation.registerComponent('navigation.StartUpScreen',()=>StartUpScreen);
  Navigation.registerComponent('navigation.LoginScreen',()=>LoginScreen);
  Navigation.registerComponent('navigation.ParameterScreen',()=>ParameterScreen);
  Navigation.registerComponent('navigation.afterLogin',()=>afterLogin);
}
