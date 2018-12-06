import { createStackNavigator } from 'react-navigation'
import { MainScreen} from '../screens/composites'

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    },
  },
  {
    initialRouteName: 'Main',
  }
);

export default MainNavigator
  