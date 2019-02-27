import { createStackNavigator } from 'react-navigation'
import { WelcomeScreen, ConfigurationPickerModal, NewActivityModal } from '../containers'

//Navegador de pantalla de bienvenida
const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    ConfigurationModal: {
      screen: ConfigurationPickerModal,
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
