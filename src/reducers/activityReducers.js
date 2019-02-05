import { CONFIGURATION_SET, TASK_SOLVED } from '../constants'

const initialState = {
  ready:false,
  title:'Bienvenido a resuelvo explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIGURATION_SET:
    {
      return {
        ...state,
        ...action.payload,
      }
    }  
    default:
    {
      return state
    }  
  }
}

export default activityReducer