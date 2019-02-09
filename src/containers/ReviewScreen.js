import React, { Component } from 'react'

import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoiceReview, TypeError } from '../components/reviewsComponents'

//Pantalla de vista de correccion de tarea
class ReviewScreen extends Component {

  render() {

    const finishedTask = this.props.navigation.getParam('finishedTask',{
      task:{
        type:null
      }
    })

    switch (finishedTask.task.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoiceReview finishedTask={finishedTask} navigation={this.props.navigation}/>
        )
      
      default:
        return (
          <TypeError/>
        )
    }
  }

}

export default ReviewScreen
