import { createStackNavigator } from 'react-navigation'
import { MainScreen } from '../screens/composites'


//Navegador entre la pantalla principal y la bolsa de elementos
const MainScreenNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen,
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    }
  );

export default MainScreenNavigator