import {
  TASK_SET,
  FINISHED_TASK_SET,
} from '../constants/taskConstants'

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