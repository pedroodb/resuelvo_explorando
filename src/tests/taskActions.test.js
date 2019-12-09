import {
  CODE_SET,
  CODE_RESET,
  TASK_SET,
  FINISHED_TASK_SET,
} from '../constants/taskConstants'
import {
  setCode,
  resetCode,
  setTask,
  setFinishedTask,
} from '../actions/taskActions'

describe('Task actions', () => {

  it('Deberia crear una action para setear un codigo', () => {
    const expectedAction = {
      type: CODE_SET,
      payload: 'code',
    }
    expect(setCode('code')).toEqual(expectedAction)
  }),

  it('Deberia crear una action para reiniciar el codigo', () => {
    const expectedAction = {
      type: CODE_RESET,
    }
    expect(resetCode()).toEqual(expectedAction)
  }),
  
  it('Deberia crear una action para setear una tarea', () => {
    const task = {
      name: 'Tarea',
      payload: {
        option: '1',
      }
    }
    const expectedAction = {
      type: TASK_SET,
      payload: task
    }
    expect(setTask(task)).toEqual(expectedAction)
  })

  it('Deberia crear una action para setear una tarea finalizada', () => {
    const finishedTask = {
      name: 'Tarea',
      answer: 'Una respuesta',
      payload: {
        option: '1',
      }
    }
    const expectedAction = {
      type: FINISHED_TASK_SET,
      payload: finishedTask
    }
    expect(setFinishedTask(finishedTask)).toEqual(expectedAction)
  })
})