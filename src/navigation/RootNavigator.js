import { createStackNavigator } from 'react-navigation'
import MainNavigator from './MainNavigator'
import WelcomeNavigator from './WelcomeNavigator'
import TaskNavigator from './TaskNavigator'
import TaskReviewNavigator from './ReviewNavigator'

//Navegador raiz del que cuelgan los navegadores de cada seccion con su respectiva logica de navegacion
const RootNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeNavigator,
    },
    Main: {
      screen: MainNavigator
    },
    Task: {
      screen: TaskNavigator
    },
    TaskReview: {
      screen: TaskReviewNavigator
    }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);

export default RootNavigator
