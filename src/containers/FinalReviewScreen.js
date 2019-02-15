import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

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
      <View>
        <Text>{`Quedaron ${tasks.length} tareas por hacer, se resolvieron ${(finishedTasks.filter(task => task.isCorrect)).length} correctamente y ${(finishedTasks.filter(task => !task.isCorrect)).length} incorrectamente`}</Text>
        <Button title="Finalizar" onPress={() => this.props.navigation.popToTop()}/>
      </View>
    )
  }

}

export default FinalReviewScreenComponent
