import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { DefaultButton } from '../components'
import { result, finalReviewScreen, title } from '../styles/FinalReviewScreenStyles'

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
      <View style={finalReviewScreen}>
      <View style={{flex:1}}>
        <Text style={title}>Tu desempeño es:</Text>
      </View>
      <View style={{flex:3}}>
        <Text style={result}>{`${tasks.length} tareas sin resolver`}</Text>
        <Text style={result}>{`${(finishedTasks.filter(task => task.answer.isCorrect)).length} correctamente`}</Text>
        <Text style={result}>{`${(finishedTasks.filter(task => !task.answer.isCorrect)).length} incorrectamente`}</Text>
      </View>
      <DefaultButton title="Finalizar" onPress={() => this.props.navigation.popToTop()}/>
      </View>
    )
  }

}



export default FinalReviewScreenComponent
