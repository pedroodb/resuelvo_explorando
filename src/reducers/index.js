//Combina todos los reducers en uno
import { combineReducers } from 'redux'

import activityReducer from './activityReducers'

const AppReducer = combineReducers({
  activityReducer
});

export default AppReducer;