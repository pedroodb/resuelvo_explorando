import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'

import { DefaultButton } from '..'

//Componente que corresponde a la correccion de una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {

  render() {

    const {
      task: {
        payload:{
          options,
        },
      },
      answer
    } = this.props.finishedTask
    

    const correctOption = this.correctOption(options)

    return (
      <View style={styles.viewStyle}>
          <View>
            <Text style={styles.titleStyle}>Seleccionaste la opcion: {this.checkAnswer(answer)}</Text>
            <Text style={styles.answerStyle}>{answer.aditionalInformation}</Text>
          </View>
          <View>
            <Text style={styles.titleStyle}> La opción correcta era {correctOption.value}</Text>
            <Text style={styles.answerStyle}>{correctOption.aditionalInformation}</Text>
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
      <Text style={answer.isCorrect? styles.rightStyle : styles.wrongStyle}>{answer.value}</Text> )
  }

}

export default MutipleChoiceReviewComponent


const styles = StyleSheet.create({
  viewStyle: {
      flex:1,
      justifyContent:'space-between',
      margin:10,
  },
  titleStyle: {
      textAlign:'center',
      fontSize:20,
      margin:5,
  },
  answerStyle: {
      textAlign:'center',
      fontSize:15,
      margin:5,
      marginHorizontal:5,
  },
  rightStyle: {
      color:'green',
  },
  wrongStyle:{
      color:'red',
  },
})