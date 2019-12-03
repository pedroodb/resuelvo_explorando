//Combina todos los reducers en uno (de momento solo existe activityReducer)
import { combineReducers } from 'redux'

import activityReducer from './activityReducer'
import taskReducer from './taskReducer'

const AppReducer = combineReducers({
  activityReducer,
  taskReducer,
})

export default AppReducer