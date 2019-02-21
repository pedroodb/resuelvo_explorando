//Genera una finishedTask a partir de una task y una answer
function getFinishedTask(task,answer) {
  return {...task,answer:answer}
}

//Genera una finishedTask a partir de una task y answer multipleChoice, indicando si es correcta
function getFinishedMultipleChoiceTask(task,answer) {
  return {
    ...task,
    answer: (task.options.find((option) => option.value == answer)),
  }
}

export const getFinishedTaskFunction = getFinishedTask
export const getFinishedMultipleChoiceTaskFunction = getFinishedMultipleChoiceTask

export default { getFinishedTaskFunction, getFinishedMultipleChoiceTaskFunction }
