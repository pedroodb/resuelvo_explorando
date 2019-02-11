class FinishedTask {
  
  constructor(task,answer) {
    this.task = task
    this.answer = answer
  }

  
  getName() {
    return this.task.name
  }

  getCode() {
    return this.task.code
  }

  getType() {
    return this.task.type
  }

  getDescription() {
    return this.task.description
  }

}