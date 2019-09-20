import {
  ACTIVITY_SET,
  TASK_SOLVED
} from '../constants'

export function setConfiguration(configuration) {
  return {
    type: ACTIVITY_SET,
    payload: configuration,
  }
}

export function solveTask(finishedTask) {
  return {
    type: TASK_SOLVED,
    payload: finishedTask,
  }
}

export default {
  setConfiguration,
  solveTask,
}