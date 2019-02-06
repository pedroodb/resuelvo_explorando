import React, { Component } from 'react'
import { Text, View, SectionList, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { viewStyle } from './styles/MainStyles'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'
import { setTask } from '../actions/taskActions'


//Pantalla de vista de tarea
class MainScreen extends Component {

  render() {

    //Las props se obtienen gracias a mapStateToProps que las mapea desde el state del reducer
    const {
      tasks,
      finishedTasks,
      readenTaskReady,
      readenTaskCode,
    } = this.props

    if (readenTaskReady) {
      this.handleReadenTask(tasks.find(task => (task.code == readenTaskCode)))
    }

    return (
      <View style={viewStyle}>
        <SectionList
          sections={[
            {title: 'Tareas realizadas', data: finishedTasks},
            {title: 'Tareas aún sin realizar', data: tasks},
          ]}
          renderItem={({item}) => <Text style={sectionListItem} onPress={() => this.props.navigation.navigate('taskSelected')}>{item.name}</Text>}
          renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <DefaultButton
          onPress={() => this.props.navigation.navigate('Camera',{taskCodes: tasks.map(task => task.code), finishedTaskCodes: finishedTasks.map(task => task.code)})}
          title="Leer tarea"
        />
      </View>
    )
  }

  //Funcion llamada cuando se leyo un codigo con la camara
  handleReadenTask(task) {
    Alert.alert(
      `Se encontro la tarea ${task.name}`,
      'Quiere comenzar la tarea?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Comenzar',
          onPress: () => {
            this.props.actions.setTask(task)
            this.props.navigation.navigate('Task')
          }
        },
      ],
    )
  }

}


//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      setTask
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({activityReducer, taskReducer}) {
    return {
      ...activityReducer,
      ...taskReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)
