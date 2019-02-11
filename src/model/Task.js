import FinishedTask from './FinishedTask'

class Task {

  constructor(code, type, name, description) {
    this.code = code
    this.type = type
    this.name = name
    this.description = description
  }

  solve(answer) {
    return new FinishedTask(this,answer)
  }

  getName() {
    return this.name
  }

  getCode() {
    return this.code
  }

  getType() {
    return this.type
  }

  getDescription() {
    return this.description
  }

}

export default Task