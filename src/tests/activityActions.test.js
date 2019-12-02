import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'
import {
  setConfiguration,
  solveTask,
} from '../actions/activityActions'

describe('actions', () => {

  it('should create an action to set activity', () => {
    const config = {
      ready:false,
      title:'Bienvenido a Resuelvo Explorando',
      description:'Carga una actividad para comenzar!',
      tasks:[],
      finishedTasks:[]
    }
    const expectedAction = {
      type: ACTIVITY_SET,
      payload: config,
    }
    expect(setConfiguration(config)).toEqual(expectedAction)
  },
  
  it('should create an action to solve a task', () => {
    const task = {
      name: 'A task',
      payload: {
        option: '1',
      }
    }
    const expectedAction = {
      type: TASK_SOLVED,
      payload: task,
    }
    expect(solveTask(task)).toEqual(expectedAction)
  })
  )
})