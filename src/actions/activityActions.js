import {
  ACTIVITY_SET,
  TASK_SOLVED
} from '../constants/activityConstants'

export function setConfiguration(configuration) {
  return {
    type: ACTIVITY_SET,
    payload: configuration,
  }
}

export function solveTask(task, answer) {
  return {
    type: TASK_SOLVED,
    payload: {
      task,
      answer,
    },
  }
}

export default {
  setConfiguration,
  solveTask,
}