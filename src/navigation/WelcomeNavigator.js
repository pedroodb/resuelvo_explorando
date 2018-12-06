import { createStackNavigator } from 'react-navigation'
import { ConfigurationModal } from '../screens/composites'
import { WelcomeScreen} from '../screens/composites'

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
