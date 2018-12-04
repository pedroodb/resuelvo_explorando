import React, {Component} from 'react'
import { Text, View, Button, SectionList } from 'react-native'
import mainStyles from './styles/MainStyles'

//Pantalla de vista de tarea
class MainScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Elements')}
          title="Elementos"
          color="#34495E"
        />
      ),
    };
  };
  
  render() {
    return (
      <View style={mainStyles.container}>
        <SectionList
          sections={[
            {title: 'Tareas realizadas', data: ['Tarea 1', 'Tarea 3', 'Tarea 6', 'Tarea 7']},
            {title: 'Tareas aún sin realizar', data: ['Tarea 2', 'Tarea 4', 'Tarea 5', 'Tarea 8']},
          ]}
          renderItem={({item}) => <Text style={mainStyles.item} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={mainStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Button
          onPress={() => this.props.navigation.navigate('Main')}
          title="Leer tarea"
          color="#34495E"
        />
      </View>
    )
  }
}

export default MainScreen