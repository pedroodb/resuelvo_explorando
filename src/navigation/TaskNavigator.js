import { createStackNavigator } from 'react-navigation'
import { TaskScreen } from '../screens/containers'

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
  