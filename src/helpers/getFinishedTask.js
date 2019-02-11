//Genera una finishedTask a partir de una task y una answer
function getFinishedTask(task,answer) {
  return {...task,answer:answer}
}

export default getFinishedTask