import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoice, TypeError } from '../components/taskComponents'
import { solveTask } from '../actions/activityActions'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  render() {

    const currentTask = this.props.navigation.getParam('currentTask',null)

    switch (currentTask.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoice task={currentTask} navigation={this.props.navigation} solveTaskFunction={this.props.actions.solveTask}/>
        )
      
      case FREE_ANSWER:

        break
      
      default:
        return (
          <TypeError navigation={this.props.navigation}/>
        )
    }
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      solveTask
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({/*De necesitar un reducer especificar aqui*/}) {
  return {
    //Devolver los campos del reducer que se necesiten
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskScreen)