import { createStackNavigator } from 'react-navigation'
import {
  WelcomeScreen,
  ActivityPickerModal,
  NewActivityModal
} from '../containers'

//Navegador de pantalla de bienvenida
const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    ActivityPickerModal: {
      screen: ActivityPickerModal,
    },
    NewActivityModal: {
      screen: NewActivityModal,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default WelcomeNavigator
