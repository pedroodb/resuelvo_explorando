import {
  CODE_SET,
  CODE_RESET,
  TASK_SET,
  FINISHED_TASK_SET,
} from '../constants/taskConstants'

import {
  TASK_SOLVED,
} from '../constants/activityConstants'

import {
  UNSET,
  NO_CODE,
} from '../constants/genericConstants'

const initialState = {
  read: NO_CODE,
  current: {
    name: UNSET,
    description: UNSET,
    type: UNSET,
    code: UNSET,
  },
  finished: {
    task: {
      name: UNSET,
      description: UNSET,
      type: UNSET,
      code: UNSET,
    },
    answer: UNSET,
  },
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CODE_SET:
      return {
        ...state,
        read: action.payload
      }
    case CODE_RESET:
      return {
        ...state,
        read: NO_CODE,
      }
    case TASK_SET:
      return {
        ...state,
        current: {
          ...action.payload,
        },
      }
    case FINISHED_TASK_SET: {
      return {
        ...state,
        finished: {
          ...action.payload,
        },
      }
    }
    //Tambien se actualiza la tarea finalizada cada vez que se resuelve una
    case TASK_SOLVED: {
      return {
        ...state,
        finished: {
          ...action.payload,
        },
      }
    }
    default:
      return state 
  }
}

export default activityReducer