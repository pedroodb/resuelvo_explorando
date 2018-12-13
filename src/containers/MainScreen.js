import React, {Component} from 'react'
import { Text, View, Button, SectionList } from 'react-native'
import mainStyles from './styles/MainStyles'
import {DefaultButton, DefaultButtonTaskBar} from '../components/generalComponents'

//Pantalla de vista de tarea
class MainScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <DefaultButtonTaskBar
          onPress={() => navigation.navigate('Elements')}
          title="Elementos"
        />
      ),
    };
  };

  render() {
    return (
      <View style={mainStyles.container}>
        <SectionList
          sections={[
            {title: 'Tareas realizadas', data: ["Tarea 1"]},
            {title: 'Tareas aún sin realizar', data: ["Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"]},
          ]}
          renderItem={({item}) => <Text style={mainStyles.item} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={mainStyles.sectionHeader}>{section.title}</Text>}
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
