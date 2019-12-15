import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'

export const setActivity = activity => ({
  type: ACTIVITY_SET,
  payload: activity,
})

export const solveTask = (task, answer) => ({
  type: TASK_SOLVED,
  payload: {
    task,
    answer,
  },
})

export default {
  setActivity,
  solveTask,
}