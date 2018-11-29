import { createStackNavigator } from 'react-navigation'
import index from '../screens'

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
    {
      Welcome: {
        screen: index.WelcomeScreen,
      },
      Main: {
        screen: index.MainScreen,
      },
    },
    {
      initialRouteName: 'Welcome',
    }
  );

export default MainNavigator
  