import {
  CODE_SET,
  CODE_RESET,
  TASK_SET,
  FINISHED_TASK_SET,
} from '../constants/taskConstants'

// Indica que se leyo un codigo de tarea
export const setCode = code => ({
  type: CODE_SET,
  payload: code,
})

// Reestablece el valor del codigo de tarea leido
export const resetCode = () => ({
  type: CODE_RESET,
})

// Indica que se establecio una tarea actual en el estado de redux
export const setTask = task => ({
  type: TASK_SET,
  payload: task,
})

// Indica que se establecio una tarea finalizada en el estado de redux
export const setFinishedTask = task => ({
  type: FINISHED_TASK_SET,
  payload: task,
})

export default {
  setTask,
  setFinishedTask,
}