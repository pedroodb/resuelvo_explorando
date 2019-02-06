//Combina todos los reducers en uno
import { combineReducers } from 'redux'

import activityReducer from './activityReducers'
import taskReducer from './taskReducers'

const AppReducer = combineReducers({
  activityReducer,
  taskReducer
});

export default AppReducer;