//Combina todos los reducers en uno
import { combineReducers } from 'redux'

import welcomeReducer from './WelcomeReducers'

const AppReducer = combineReducers({
  welcomeReducer
});

export default AppReducer;