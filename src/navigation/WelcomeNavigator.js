import { createStackNavigator } from 'react-navigation'
import { ConfigurationPickerModal } from '../containers'
import { WelcomeScreen } from '../containers'
import { NewConfigurationModal } from '../containers'

//Navegador de pantalla de bienvenida
const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    ConfigurationModal: {
      screen: ConfigurationPickerModal
    },
    NewConfigurationModal: {
      screen: NewConfigurationModal
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default WelcomeNavigator
