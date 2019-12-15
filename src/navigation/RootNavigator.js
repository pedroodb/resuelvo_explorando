import { createStackNavigator } from 'react-navigation-stack'
import MainNavigator from './MainNavigator'
import WelcomeNavigator from './WelcomeNavigator'
import TaskNavigator from './TaskNavigator'
import TaskReviewNavigator from './TaskReviewNavigator'
import FinalReviewNavigator from './FinalReviewNavigator'

//Navegador raiz del que cuelgan los navegadores de cada seccion con su respectiva logica de navegacion
const RootNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeNavigator
    },
    Main: {
      screen: MainNavigator
    },
    Task: {
      screen: TaskNavigator
    },
    TaskReview: {
      screen: TaskReviewNavigator
    },
    FinalReview: {
      screen: FinalReviewNavigator
    }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);

export default RootNavigator
