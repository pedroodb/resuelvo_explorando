import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../../../components'
import { viewStyle } from '../../styles/genericStyles'

//Componente que corresponde a una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {
  
  render() {

    const {
      task,
      answer
    } = this.props.finishedTask

    return (
      <View style={viewStyle}>
        <Text>{task.name}</Text>
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

}

export default MutipleChoiceReviewComponent
