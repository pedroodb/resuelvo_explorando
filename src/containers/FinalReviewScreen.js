import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { DefaultButton } from '../components'

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
      <View style={styles.finalReviewScreen}>
      <View style={{flex:1}}>
        <Text style={styles.title}>Tu desempeño es:</Text>
      </View>
      <View style={{flex:3}}>
        <Text style={styles.result}>{`${tasks.length} tareas sin resolver`}</Text>
        <Text style={styles.result}>{`${(finishedTasks.filter(task => task.answer.isCorrect)).length} correctamente`}</Text>
        <Text style={styles.result}>{`${(finishedTasks.filter(task => !task.answer.isCorrect)).length} incorrectamente`}</Text>
      </View>
      <DefaultButton title="Finalizar" onPress={() => this.props.navigation.popToTop()}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:40,
  },
  result:{
    fontSize:20,
    marginLeft:20,
    margin:10,
  },
  finalReviewScreen:{
    flex:1,
    justifyContent:'space-around',
  },
})


export default FinalReviewScreenComponent
