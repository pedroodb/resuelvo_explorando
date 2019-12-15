import { createStackNavigator } from 'react-navigation-stack'
import { MainScreen, CameraModal } from '../containers'

//Navegador de pantalla principal
const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Camera: {
      screen: CameraModal,
    }
  },
  {
    initialRouteName: 'Main',
  }
);

export default MainNavigator
  