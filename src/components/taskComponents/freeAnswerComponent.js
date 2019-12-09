import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native'
import DefaultButton from '../defaultButton';

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
      <View style={styles.viewFAC}>
        <Text style={styles.titleFAC}>{name}</Text>
        <Text style={styles.descriptionFAC}>{description}</Text>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            onChangeText={this.updateAnswer}
            value={answer}
            placeholder='Ingrese aquí su respuesta'
            autoFocus={true}
            multiline={true}
            style={styles.inputFAC}
          />
          {
            answer ?
              <DefaultButton
                title='Guardar'
                onPress={() => {
                  this.props.solveTask(this.props.task,this.state.answer)
                  this.props.navigation.navigate('TaskReview')
                }}
              />
            : null
          }
        </KeyboardAvoidingView>
      </View>
    )

  }

}

const styles = StyleSheet.create({
  viewFAC:{
    flex:1,
  },
  titleFAC: {
    textAlign:'center',
    fontSize:30,
  },
  descriptionFAC: {
    textAlign:'center',
    fontSize:20,
  },
  inputFAC: {
    margin:10,
    textAlign:'center',
    fontSize:20,
  },
})


export default FreeAnswerComponent