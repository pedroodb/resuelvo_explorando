import { createStackNavigator } from 'react-navigation'
import { TaskScreen } from '../screens/composites'

//Navegador de pantalla de tarea
const TaskNavigator = createStackNavigator(
  {
    Task: {
      screen: TaskScreen,
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  }
);

export default TaskNavigator
  