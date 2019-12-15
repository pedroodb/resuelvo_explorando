import {
  ACTIVITY_SET,
  TASK_SOLVED,
} from '../constants/activityConstants'

// Indica que se establecio una actividad en el estado de redux
export const setActivity = activity => ({
  type: ACTIVITY_SET,
  payload: activity,
})

// Indica que se resolvio la tarea 'task'
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