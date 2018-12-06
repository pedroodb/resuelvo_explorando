import { createStackNavigator } from 'react-navigation'
import { ConfigurationModal } from '../screens/containers'
import { WelcomeScreen} from '../screens/containers'

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
