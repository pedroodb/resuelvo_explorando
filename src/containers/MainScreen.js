import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import { viewStyle } from './styles/MainStyles'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'

//Pantalla de vista de tarea
class MainScreen extends Component {

  render() {
    const res = this.props.navigation.getParam('res', false)
    ts = ["Tarea 1", "Tarea 2", "Tarea 3"]
    tso = []
    if (res) {
      ts.splice((res-1),1)
      tso = [`Tarea ${res}`]
    }
    return (
      <View style={viewStyle}>
        <SectionList
          sections={[
            {title: 'Tareas realizadas', data: tso},
            {title: 'Tareas aún sin realizar', data: ts},
          ]}
          renderItem={({item}) => <Text style={sectionListItem} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
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

export default MainScreen
