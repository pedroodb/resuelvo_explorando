import { createStackNavigator } from 'react-navigation'
import { MainScreen, ElementsModal } from '../screens/containers'

//Navegador de pantalla principal
const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    },
    Elements: {
      screen: ElementsModal
    }
  },
  {
    initialRouteName: 'Main',
  }
);

export default MainNavigator
  