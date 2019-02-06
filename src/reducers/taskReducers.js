import { TASK_SET, TASK_READ } from '../constants'

const initialState = {
  readenTaskReady:false,
  readenTaskCode:'',
  currentTask:null,
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_READ:
    {
      return {
        ...state,
        readenTaskCode: action.payload,
        readenTaskReady:true,
      }
    }
    case TASK_SET:
    {
      return {
        ...state,
        currentTask:action.payload,
        readenTaskReady:false,
        readenTaskCode:''
      }
    }  
    default:
    {
      return state
    }  
  }
}

export default taskReducer