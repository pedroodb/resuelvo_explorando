import React, {Component} from 'react'
import { Text, View, SectionList } from 'react-native'
import { viewStyle } from './styles/MainStyles'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'

//Pantalla de vista de tarea
class MainScreen extends Component {

  render() {
    return (
      <View style={viewStyle}>
        <SectionList
          sections={[
            {title: 'Tareas realizadas', data: ["Tarea 1"]},
            {title: 'Tareas aún sin realizar', data: ["Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"]},
          ]}
          renderItem={({item}) => <Text style={sectionListItem} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <DefaultButton
          onPress={() => this.props.navigation.navigate('Task')}
          title="Leer tarea"
        />
      </View>
    )
  }
}

export default MainScreen
