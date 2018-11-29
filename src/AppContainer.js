import MainNavigator from './navigation/MainNavigator'
import { createAppContainer } from 'react-navigation'

//Creacion del AppContainer para exportar
const AppContainer = createAppContainer(MainNavigator);

export default AppContainer