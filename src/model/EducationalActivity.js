import { MULTIPLE_CHOICE } from '../config'
import MultipleChoiceTask from './MultipleChoiceTask'

class EducationalActivity {

  constructor(title, description, tasks) {
    this.title = title
    this.description = description
    this.tasks = tasks.map((task) => this.buildTask(task))
    this.finishedTasks = []
  }

  //Construye tareas de la subclase correcta en funcion del type
  buildTask(task) {
    const {
      code,
      type,
      name,
      description,
      options,
    } = task
    switch (code) {
      case MULTIPLE_CHOICE:
        return new MultipleChoiceTask(code,type,name,description,options)
    
      default:
        return {}
    }
  }

}

export default EducationalActivity