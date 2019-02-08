import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DefaultButton } from '../../../components'
import CheckBoxWText from './checkBoxWText'
import { viewStyle } from '../../styles/genericStyles'

//Componente que corresponde a una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {
  
  render() {

    const {
      task,
      answer
    } = this.props.finshedTask

    return (
      <View style={viewStyle}>
        <Text>{task.name}</Text>
        {this.options()}
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

}

export default MutipleChoiceReviewComponent
