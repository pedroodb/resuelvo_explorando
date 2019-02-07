import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DefaultButton, DefaultButtonTaskBar } from '../components'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <DefaultButtonTaskBar
        onPress={() => alert('Hola Ale')}
        title="AYUDA"
      />
    ),
  };

  render() {

    const { currentTask } = this.props

    return (
      <View>
        <Text>{currentTask.name}</Text>
        <Text>{currentTask.code}</Text>
        <DefaultButton title="Resolver" onPress={() => this.props.navigation.navigate('Main',{res:numT})}>
        </DefaultButton>
      </View>
    )
  }
}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      //Aqui van las actions (redux) que fuera a utilizar
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({taskReducer}) {
  return {
    ...taskReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskScreen)
