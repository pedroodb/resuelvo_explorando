import { createStackNavigator } from 'react-navigation'
import { ConfigurationModal } from '../screens/composites'
import MainNavigator from './MainNavigator'

//Navegador entre pantalla inicial y pantalla principal
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
