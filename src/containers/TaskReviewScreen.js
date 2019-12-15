import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  MULTIPLE_CHOICE,
  FREE_ANSWER,
} from '../constants/taskTypeConstants'
import {
  MultipleChoiceReview,
  FreeAnswerReview,
  TypeError
} from '../components/taskReviewComponents'

//Pantalla de vista de correccion de tarea
class ReviewScreen extends Component {
  
  //Agrega al header un titulo
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Desempeño en tarea',
    }
  }

  render() {

    const finishedTask = this.props.task

    switch (finishedTask.task.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoiceReview finishedTask={finishedTask} navigation={this.props.navigation}/>
        )
      case FREE_ANSWER:
        return (
          <FreeAnswerReview finishedTask={finishedTask} navigation={this.props.navigation}/>
        )
      default:
        return (
          <TypeError navigation={this.props.navigation}/>
        )
    }
  }

}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({taskReducer}) {
  return {
    task:taskReducer.finished
  }
}

export default connect(mapStateToProps,null)(ReviewScreen)