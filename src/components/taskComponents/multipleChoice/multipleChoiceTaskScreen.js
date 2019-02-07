import React, { Component } from 'react'
import { Text, View, SectionList, CheckBox} from 'react-native'
import { DefaultButton, DefaultButtonTaskBar} from '../../components'
import CheckBoxWText from './checkBoxWText'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'
//import { viewStyle } from './styles/TaskStyles'

//Pantalla de vista de tarea
class TaskScreenMutiplechoice extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View //style={viewStyle}
      >
        <Text>Deberan recolectar aquellos elementos que posean un alto contenido de azucar</Text>
        {this.options()}
        <DefaultButton
          title="Dejar Elemento"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }


 options() {
    tareas=["Option 1", "Option 2", "Option 3"]
    t = tareas.map((element) => <CheckBoxWText title= {element}/>)
    return t
    }





}


export default TaskScreenMutiplechoice
