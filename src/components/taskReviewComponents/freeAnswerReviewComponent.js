import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  View,
  Text,
} from 'react-native'

import { DefaultButton } from '..'

class FreeAnswerReviewComponent extends Component {

  render() {

    const {
      answer,
      task: {
        name,
        description,
        payload: {
          answer: correctAnswer,
        }
      }
    } = this.props.finishedTask

    return (
      <View style={styles.viewFARC}>
        <Text style={styles.titleFARC}>{name}</Text>
        <Text style={styles.descriptionFARC}>Tu respuesta fue: "{answer}"</Text>
        <Text style={styles.descriptionFARC}>Y la respuesta correcta era: "{correctAnswer}"</Text>
        <DefaultButton
          title="Volver"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )

  }

}

const styles = StyleSheet.create({
  viewFARC:{
    flex:1,
    justifyContent:'space-around'
  },
  titleFARC: {
    textAlign:'center',
    fontSize:30,
  },
  descriptionFARC: {
    textAlign:'center',
    fontSize:20,
  },
})

export default FreeAnswerReviewComponent