import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
  viewStyle,
  resultStyle,
  titleStyle,
 } from '../styles/FinalReviewStyles'
import { DefaultButton } from '../components'

class FinalReviewScreenComponent extends Component {

  //Agrega al header un titulo y elimina el boton para volver
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Desempeño final',
      navigationOptions: () => ({
        headerLeft: null,
      }),
    }
  }

  render() {

    const {
      tasks,
      finishedTasks
    } = this.props.navigation.getParam('educationalActivity')

    return (
      <View style={viewStyle}>
      <View style={{flex:1}}>
        <Text style={titleStyle}>Tu desempeño es:</Text>
      </View>
      <View style={{flex:3}}>
        <Text style={resultStyle}>{`${tasks.length} tareas sin resolver`}</Text>
        <Text style={resultStyle}>{`${(finishedTasks.filter(task => task.answer.isCorrect)).length} correctamente`}</Text>
        <Text style={resultStyle}>{`${(finishedTasks.filter(task => !task.answer.isCorrect)).length} incorrectamente`}</Text>
      </View>
      <DefaultButton title="Finalizar" onPress={() => this.props.navigation.popToTop()}/>
      </View>
    )
  }

}



export default FinalReviewScreenComponent
