import { TASK_SET } from '../constants/currentTaskConstants'

const initialState = {
  name:'',
  description:'',
  type:'',
  code:'',
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_SET:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state 
  }
}

export default activityReducer