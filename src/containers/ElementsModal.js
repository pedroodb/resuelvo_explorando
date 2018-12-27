import React, {Component} from 'react'
import { Text, View, SectionList } from 'react-native'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'

//Pantalla de vista de bolsa de elementos
class ElementsModal extends Component {

  render() {
    return (
      <View>
        <SectionList
          sections={[
            {title: 'Elementos recolectados', data:["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"]},
          ]}
          renderItem={({item}) => <Text style={sectionListItem}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}





export default ElementsModal
