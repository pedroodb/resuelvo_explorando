import { ACTIVITY_SET } from '../constants'

const initialState = {
  ready:false,
  title:'Bienvenido a resuelvo explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVITY_SET:
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