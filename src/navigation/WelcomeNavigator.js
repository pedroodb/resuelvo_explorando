import { createStackNavigator } from 'react-navigation'
import { ConfigurationModal } from '../containers'
import { WelcomeScreen} from '../containers'

//Navegador de pantalla de bienvenida
const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    ConfigurationModal: {
      screen: ConfigurationModal
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default WelcomeNavigator
