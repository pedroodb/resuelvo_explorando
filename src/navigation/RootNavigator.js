import { createStackNavigator } from 'react-navigation'
import MainNavigator from './MainNavigator'
import WelcomeNavigator from './WelcomeNavigator'

//Navegador raiz del que cuelga la pantalla de bienvenida y el selector de actividad
const RootNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeNavigator,
    },
    Main: {
      screen: MainNavigator
    },
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);

export default RootNavigator
