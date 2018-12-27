import { createStackNavigator } from 'react-navigation'
import { MainScreen } from '../containers'

//Navegador de pantalla principal
const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  },
  {
    initialRouteName: 'Main',
  }
);

export default MainNavigator
  