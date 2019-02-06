import { TASK_READ, TASK_SET } from "../constants";

export function readTask(code) {
  return {
    type: TASK_READ,
    payload: code,
  }
}

export function setTask(task) {
  return {
    type: TASK_SET,
    payload: task,
  }
}

export default {
  readTask,
  setTask
}