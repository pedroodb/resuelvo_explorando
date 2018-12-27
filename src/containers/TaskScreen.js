import React, { Component } from 'react'
import { Text, View, SectionList} from 'react-native'
import { DefaultButton, DefaultButtonTaskBar } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'
import { viewStyle } from './styles/TaskStyles'

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
      return (
        <View style={viewStyle}>
          <Text>Deberan recolectar aquellos elementos que posean un alto contenido de azucar</Text>
          <SectionList
            sections={[
              {title: 'Elementos Recolectados', data:["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"]},
            ]}
            renderItem={({item}) => <Text style={sectionListItem} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
          <DefaultButton
            onPress={() => this.props.navigation.goBack()}
            title="Recolectar Elemento"
          />
          <DefaultButton
            title="Dejar Elemento"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      )
    }
  }

export default TaskScreen
