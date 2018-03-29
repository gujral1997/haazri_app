import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
registerScreens();
Navigation.startSingleScreenApp
({
screen:{
  screen:'navigation.afterLogin',
},
drawer: {
            left: {
                screen: 'navigation.Drawer',
            }
      }

});
