import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { viewStyle } from './styles/MainStyles'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'


//Pantalla de vista de tarea
class MainScreen extends Component {

  render() {
    const {
      tasks,
      finishedTasks
    } = this.props
    
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
          onPress={() => this.props.navigation.navigate('Camera')}
          title="Leer tarea"
        />
      </View>
    )
  }
}


//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      //Aqui acciones que hubieramos importado y quisieramos utilizar
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({activityReducer}) {
    return {
      ...activityReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)
