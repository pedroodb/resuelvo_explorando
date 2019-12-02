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

const activity = {
  title:'Actividad nueva',
  description:'Descripcion nueva',
  tasks:[
    {
      name:'Tarea 1',
      description:'Descripcion de la tarea 1',
      code:'t1'
    },
    {
      name:'Tarea 2',
      description:'Descripcion de la tarea 2',
      code:'t2'
    }
  ]
}

const stateActivity = {
  ready:true,
  title:'Actividad nueva',
  description:'Descripcion nueva',
  tasks:[
    {
      name:'Tarea 1',
      description:'Descripcion de la tarea 1',
      code:'t1'
    },
    {
      name:'Tarea 2',
      description:'Descripcion de la tarea 2',
      code:'t2'
    }
  ],
  finishedTasks:[]
}

const solvedTask = {
  name:'Tarea',
  description:'Descripcion de la tarea',
  code:'t1',
  answer: 'Una respuesta'
}

describe('Activity reducer', () => {

  it('Deberia devolver el estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  }),

  it('Deberia setear una actividad en el estado', () => {
    expect(
      reducer(initialState, {
        type: ACTIVITY_SET,
        payload: activity,
      })
    ).toEqual(stateActivity)
  })

  it('Deberia mover una tarea a resuelta', () => {
    expect(
      reducer(stateActivity, {
        type: TASK_SOLVED,
        payload: solvedTask,
      })
    ).toEqual({
      ...stateActivity,
      tasks:[
        {
          name:'Tarea 2',
          description:'Descripcion de la tarea 2',
          code:'t2'
        }
      ],
      finishedTasks: [
        {
          name:'Tarea',
          description:'Descripcion de la tarea',
          code:'t1',
          answer: 'Una respuesta'
        }
      ]
    })
  })

})