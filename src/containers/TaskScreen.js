import React, { Component } from 'react'

import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoice, TypeError } from '../components/taskComponents'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  render() {

    const currentTask = this.props.navigation.getParam('currentTask',null)

    switch (currentTask.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoice task={currentTask} navigation={this.props.navigation}/>
        )
      
      case FREE_ANSWER:

        break
      
      default:
        return (
          <TypeError/>
        )
    }
  }

}

export default TaskScreen