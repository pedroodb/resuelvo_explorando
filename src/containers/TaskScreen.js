import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DefaultButton } from '../components'
import { MULTIPLE_CHOICE, FREE_ANSWER } from '../config'
import { MultipleChoice } from '../components/taskComponents'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  render() {

    const { currentTask } = this.props

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
