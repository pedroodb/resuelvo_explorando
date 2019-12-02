import reducer from '../reducers/activityReducer'
import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'

const initialState = {
  ready:false,
  title:'Bienvenido a Resuelvo Explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

describe('Activity reducer', () => {

  it('Deberia devolver el estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  }),

  it('Deberia setear una actividad en el estado', () => {
    expect(
      reducer(initialState, {
        type: ACTIVITY_SET,
        payload: {
          title:'Tarea nueva',
          description:'Descripcion nueva',
          tasks:[
            {
              name:'Tarea',
              description:'Descripcion de la tarea'
            }
          ]
        }
      })
    ).toEqual({
      ready:true,
      title:'Tarea nueva',
      description:'Descripcion nueva',
      tasks:[
        {
          name:'Tarea',
          description:'Descripcion de la tarea'
        }
      ],
      finishedTasks:[]
    })
  })


})