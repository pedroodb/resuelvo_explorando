import { createStackNavigator } from 'react-navigation'
import { ConfigurationModal } from '../screens/composites'
import MainNavigator from './MainNavigator'

//Navegador raiz del que cuelga la pantalla de bienvenida y el selector de actividad
const RootNavigator = createStackNavigator(
  {
    Welcome: {
      screen: MainNavigator,
    },
    ConfigurationModal: {
      screen: ConfigurationModal
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootNavigator
