import React, {Component} from 'react'
import { Text, View, SectionList } from 'react-native'
import elementsStyles from './styles/ElementsStyles'

//Pantalla de vista de tarea
class ElementsModal extends Component {
  
  render() {
    return (
      <View style={elementsStyles.container}>
        <SectionList
          sections={[
            {title: 'Elementos recolectados', data: ['Elemento A', 'Elemento B', 'Elemento C', 'Elemento D']},
          ]}
          renderItem={({item}) => <Text style={elementsStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={elementsStyles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

export default ElementsModal