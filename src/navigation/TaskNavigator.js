import { createStackNavigator } from 'react-navigation'
import { TaskScreen } from '../containers'

//Navegador de pantalla de tarea
const TaskNavigator = createStackNavigator(
  {
    Task: {
      screen: TaskScreen,
    }
  },
  {
    initialRouteName: 'Task',
  }
);

export default TaskNavigator
  