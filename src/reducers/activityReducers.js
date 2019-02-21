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
      const {
        tasks,
        finishedTasks
      } = action.payload
      return {
        ...state,
        ...action.payload,
        tasks:(tasks == undefined) ? [] : tasks,
        finishedTasks: (finishedTasks == undefined) ? [] : finishedTasks,
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