import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../components'
import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoice } from '../components/taskComponents'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  render() {

    const currentTask = this.props.navigation.getParam('currentTask',null)

    switch (currentTask.type) {
      case MULTIPLE_CHOICE:
        return (
          <MultipleChoice task={currentTask} navigation={this.props.navigation}/>
        )
      
      case FREE_ANSWER:

        break
      
      default:
        return (
          <View>
            <Text>Hubo un error en la carga de la tarea</Text>
            <DefaultButton
              title='Volver'
              onPress={() => this.props.navigation.navigate('Main')}
            />
          </View>
        )
    }
  }

}

export default TaskScreen