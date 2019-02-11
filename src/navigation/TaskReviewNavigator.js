import { createStackNavigator } from 'react-navigation'
import { TaskReviewScreen } from '../containers'

//Navegador de pantalla de correcciones
const TaskReviewNavigator = createStackNavigator(
  {
    Review: {
      screen: TaskReviewScreen,
    }
  },
  {
    initialRouteName: 'Review',
  }
);

export default TaskReviewNavigator
  