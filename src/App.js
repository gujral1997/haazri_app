import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();
Navigation.startSingleScreenApp
({
screen:{
  screen:'navigation.StartUpScreen',
},
drawer: {
            left: {
                screen: 'navigation.afterLogin',
            }
      }

});
