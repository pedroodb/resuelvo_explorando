import RootNavigator from './navigation/RootNavigator'
import { createAppContainer } from 'react-navigation'

//Creacion del AppContainer para exportar
const AppContainer = createAppContainer(RootNavigator);

export default AppContainer