//Combina todos los reducers en uno (de momento solo existe activityReducer)
import { combineReducers } from 'redux'

import activityReducer from './activityReducers'

const AppReducer = combineReducers({
  activityReducer,
});

export default AppReducer;