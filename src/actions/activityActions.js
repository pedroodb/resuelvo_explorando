import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'
import {
  FINISHED_TASK_SET,
} from '../constants/taskConstants'

export const setConfiguration = (configuration) => ({
  type: ACTIVITY_SET,
  payload: configuration,
})

export const solveTask = (task, answer) => ({
  type: TASK_SOLVED,
  payload: {
    task,
    answer,
  },
})

export default {
  setConfiguration,
  solveTask,
}