import reducer from '../../reducers/activityReducers'
import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../../constants/activityConstants'

const initialState = {
  ready:false,
  title:'Bienvenido a Resuelvo Explorando',
  description:'Carga una actividad para comenzar!',
  tasks:[],
  finishedTasks:[]
}

describe('activity reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  }),

  it('should handle ADD_TODO', () => {
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
      ready:false,
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
    /*
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })*/
})