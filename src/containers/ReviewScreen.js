import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../components'
import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoiceReview } from '../components/reviewsComponents'

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
          <View>
            <Text>Hubo un error en la carga de la correccion de la tarea</Text>
            <DefaultButton
              title='Volver'
              onPress={() => this.props.navigation.navigate('Main')}
            />
          </View>
        )
    }
  }

}

export default ReviewScreen
