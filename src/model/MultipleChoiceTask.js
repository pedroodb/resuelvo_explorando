import Task from './Task'

class MultipleChoiceTask extends Task {

  constructor(code, type, name, description, options) {
    super(code, type, name, description)
    this.options = options
  }

}

export default MultipleChoiceTask