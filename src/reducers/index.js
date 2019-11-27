//Combina todos los reducers en uno (de momento solo existe activityReducer)
import { combineReducers } from 'redux'

import activityReducer from './activityReducer'
import currentTaskReducer from './currentTaskReducer'

const AppReducer = combineReducers({
  activityReducer,
  currentTaskReducer,
});

export default AppReducer;