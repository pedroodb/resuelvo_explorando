import React, {Component} from 'react'
import { Text, View, SectionList } from 'react-native'
import elementsStyles from '../components/styles/GeneralStyles'

//Pantalla de vista de bolsa de elementos
class ElementsModal extends Component {

  render() {
    // para recibir parametros de otra pantalla
    return (
      <View style={elementsStyles.container}>
        <SectionList
          sections={[
            {title: 'Elementos recolectados', data:[]},
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
