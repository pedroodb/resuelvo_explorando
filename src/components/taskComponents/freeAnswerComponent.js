//Aqui va componente para tarea de respuesta abierta
import React, { Component } from 'react'
import {
  TextInput,
  Button,
  View,
  Text,
} from 'react-native'

class FreeAnswerComponent extends Component {

  constructor() {
    super()
    this.state = {
      answer: ''
    }
  }

  updateAnswer = answer => this.setState({answer})

  submitTask = (task, answer) => {
    this.props.solveTaskAction(task, answer)
    this.props.navigation.navigate('TaskReview',({ finishedTask:finishedTask }))
  }
  
  render() {

    const {
      name,
      description,
    } = this.props.task

    const {
      answer,
    } = this.state

    return (
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <TextInput
          onChangeText={this.updateAnswer}
          value={answer}
        />
        {
          answer ?
            <Button
              title='Guardar'
              onPress={() => {
                this.props.solveTask(this.props.task,this.state.answer)
                this.props.navigation.navigate('TaskReview')
              }}
            />
          : null
        }
      </View>
    )

  }

}

export default FreeAnswerComponent