import { createStackNavigator } from 'react-navigation'
import { WelcomeScreen, MainScreen} from '../screens'

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
    {
      Welcome: {
        screen: WelcomeScreen,
      },
      Main: {
        screen: MainScreen,
      },
    },
    {
      initialRouteName: 'Welcome',
    }
  );

export default MainNavigator
  