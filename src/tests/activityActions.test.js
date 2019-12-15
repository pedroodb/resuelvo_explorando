import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'
import {
  setActivity,
  solveTask,
} from '../actions/activityActions'

describe('Activity actions', () => {

  it('Deberia crear una action para setear una actividad', () => {
    const activity = {
      ready:false,
      title:'Bienvenido a Resuelvo Explorando',
      description:'Carga una actividad para comenzar!',
      tasks:[],
      finishedTasks:[]
    }
    const expectedAction = {
      type: ACTIVITY_SET,
      payload: activity,
    }
    expect(setActivity(activity)).toEqual(expectedAction)
  },
  
  it('Deberia crear una action para resolver una tarea', () => {
    const task = {
      name: 'Tarea',
      payload: {
        option: '1',
      }
    }
    const expectedAction = {
      type: TASK_SOLVED,
      payload: {
        task,
        answer: 'Una respuesta',
      }
    }
    expect(solveTask(task,'Una respuesta')).toEqual(expectedAction)
  })
  )
})