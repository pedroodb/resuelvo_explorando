import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { DefaultButton } from '..'
import { viewStyle } from '../../styles/GenericComponentsStyles'

//Componente que corresponde a la correccion de una tarea del tipo multiple choice
class MutipleChoiceReviewComponent extends Component {

  render() {

    const {
      options,
      answer
    } = this.props.finishedTask

    return (
      <View style={styles.viewMCRTC}>
        <Text style={styles.title}>Seleccionaste la opcion: <Text style={styles.result}>{answer}</Text></Text>
        <Text> la correcta era {this.correctOption(options).value}</Text>
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

}

const styles = StyleSheet.create({
  result: {
    color:'green',
  },
  title: {
    textAlign:'center',
    fontSize:20,
  },
  viewMCRTC: {
    flex:1,
    justifyContent:'space-between',
  },
})

export default MutipleChoiceReviewComponent
