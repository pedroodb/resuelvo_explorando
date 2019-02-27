import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../..'
import { viewStyle, titleStyle, answerStyle, rightStyle, wrongStyle } from './styles'

//Componente que corresponde a la correccion de una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {

  render() {

    const {
      options,
      answer
    } = this.props.finishedTask

    const correctOption = this.correctOption(options)


    return (
      <View style={viewStyle}>
          <View>
            <Text style={titleStyle}>Seleccionaste la opcion: {this.checkAnswer(answer)}</Text>
            <Text style={answerStyle}>{answer.aditionalInformation}</Text>
          </View>
          <View>
            <Text style={titleStyle}> La opción correcta era {correctOption.value}</Text>
            <Text style={answerStyle}>{correctOption.aditionalInformation}</Text>
          </View>
          <DefaultButton
            title="Volver"
            onPress={() => this.props.navigation.navigate('Main')}
          />
      </View>
    )
  }

  correctOption(options) {
    return options.find(({isCorrect}) => isCorrect)
  }

  checkAnswer(answer){
    return (
      <Text style={
        answer.isCorrect? rightStyle : wrongStyle
      }>{answer.value}</Text> )
  }

}

export default MutipleChoiceReviewComponent
