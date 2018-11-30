import { createStackNavigator } from 'react-navigation'
import { WelcomeScreen, MainScreen} from '../screens/composites'

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Main: {
      screen: MainScreen,
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
  