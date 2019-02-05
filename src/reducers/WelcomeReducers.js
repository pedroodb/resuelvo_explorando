import { CONFIGURATION_SET } from '../constants'

const initialState = {
  ready:false,
  title:'Bienvenido a resuelvo explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

const welcomeReducer = (state = initialState, action) => {
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

export default welcomeReducer