import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '..'
import { viewStyle } from '../../styles/GenericComponentsStyles'

//Componente que corresponde a la correccion de una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {
  
  render() {

    const {
      task,
      answer
    } = this.props.finishedTask

    return (
      <View style={viewStyle}>
        <Text>Seleccionaste la opcion {answer}, la correcta era {this.correctOption(task).value}</Text>
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

  correctOption(task) {
    return task.options.find(({isCorrect}) => isCorrect)
  }

}

export default MutipleChoiceReviewComponent
