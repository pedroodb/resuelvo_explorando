import reducer from '../reducers/taskReducer'
import { NO_CODE, UNSET } from '../constants/genericConstants'

import {
  setCode,
  resetCode,
  setTask,
  setFinishedTask,
} from '../actions/taskActions'

const initialState = {
  read: NO_CODE,
  current: {
    name: UNSET,
    description: UNSET,
    type: UNSET,
    code: UNSET,
  },
  finished: {
    task: {
      name: UNSET,
      description: UNSET,
      type: UNSET,
      code: UNSET,
    },
    answer: UNSET,
  },
}

const task = {
  name: 't1',
  description: 'descripcion de t1',
  type: 'mc',
  code: 't1',
}

const finishedTask = {
  task,
  answer: 'respuesta'
}

describe('Task reducer', () => {

  it('Deberia devolver el estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  }),

  it('Deberia setear un codigo de tarea', () => {
    expect(
      reducer(initialState, setCode('t1'))
    ).toEqual({
      ...initialState,
      read: 't1'
    })
  })

  it('Deberia reiniciar el codigo de tarea', () => {
    expect(
      reducer(({
        ...initialState,
        read: 't1'
      }), resetCode())
    ).toEqual({
      ...initialState,
      read: NO_CODE
    })
  })

  it('Deberia setear una tarea nueva', () => {
    expect(
      reducer(initialState, setTask(task))
    ).toEqual({
      ...initialState,
      current: task
    })
  })

  it('Deberia setear una tarea finalizada', () => {
    expect(
      reducer(initialState, setFinishedTask(finishedTask))
    ).toEqual({
      ...initialState,
      finished: finishedTask
    })
  })
})