import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class FinalReviewScreenComponent extends Component {

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
