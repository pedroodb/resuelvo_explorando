import { TASK_SET, TASK_READ } from '../constants'

const initialState = {
  readenTaskReady:false,
  readenTaskCode:'',
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