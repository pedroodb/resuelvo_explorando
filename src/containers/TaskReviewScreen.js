import React, { Component } from 'react'

import {
  MULTIPLE_CHOICE,
  FREE_ANSWER
} from '../constants/taskTypeConstants'
import {
  MultipleChoiceReview,
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

    const finishedTask = this.props.navigation.getParam('finishedTask',{
      task:{
        type:null
      }
    })

    switch (finishedTask.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoiceReview finishedTask={finishedTask} navigation={this.props.navigation}/>
        )
      
      default:
        return (
          <TypeError navigation={this.props.navigation}/>
        )
    }
  }

}

export default ReviewScreen
