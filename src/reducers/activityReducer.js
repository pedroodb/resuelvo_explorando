import { ACTIVITY_SET, TASK_SOLVED } from '../constants/activityConstants'

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
        ready:true,
        finishedTasks:[]
      }
    case TASK_SOLVED:
      console.log(state)
      return {
        ...state,
        finishedTasks:[...state.finishedTasks, action.payload],
        tasks:state.tasks.filter((task) => task.code != action.payload.task.code),
      }
    default:
      return state 
  }
}

export default activityReducer