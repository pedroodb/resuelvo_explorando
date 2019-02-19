import { ACTIVITY_SET, TASK_SOLVED } from '../constants'

const initialState = {
  ready:false,
  title:'Bienvenido a Resuelvo Explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITY_SET:
      return {
        ...state,
        ...action.payload,
      }
    case TASK_SOLVED:
      return {
        ...state,
        finishedTasks:[...state.finishedTasks, action.payload],
        tasks:state.tasks.filter((task) => task.code != action.payload.code),
      }
    default:
      return state 
  }
}

export default activityReducer