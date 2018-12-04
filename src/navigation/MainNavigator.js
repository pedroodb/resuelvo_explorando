import { createStackNavigator } from 'react-navigation'
import { WelcomeScreen } from '../screens/composites'
import MainScreenNavigator from './MainScreenNavigator'

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Main: {
      screen: MainScreenNavigator,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default MainNavigator
  