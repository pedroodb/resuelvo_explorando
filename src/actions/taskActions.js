import {
  CODE_SET,
  CODE_RESET,
  TASK_SET,
  FINISHED_TASK_SET,
} from '../constants/taskConstants'

export const setCode = code => ({
  type: CODE_SET,
  payload: code,
})

export const resetCode = () => ({
  type: CODE_RESET,
})

export const setTask = task => ({
  type: TASK_SET,
  payload: task,
})

export const setFinishedTask = task => ({
  type: FINISHED_TASK_SET,
  payload: task,
})

export default {
  setTask,
  setFinishedTask,
}