import React from 'react'
import { View, Text, SectionList } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../styles/GenericComponentsStyles'
import { configurationPickerView } from '../styles/ConfigurationPickerStyles'
import { 
  getActivitiesFunction as getActivities,
  setActiveActivityFunction as setActiveActivity
} from '../helpers/configurationsStorage'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activities: [],
    }

    //Bindeo al this para referenciar al componente desde handleFocusEvent
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
  }

  //Agrega al header un titulo
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Carga de configuración',
    }
  }

  //Actualizo la lista cada vez que se hace foco (util para cuando vuelvo de cargar configuracion nueva)
  handleFocusEvent() {
    getActivities().then(
      (configurations) => {
        this.setState(() => ({activities: configurations}))
      }
    )
  }

  render() {

    return (
      <View style={configurationPickerView}>
        <NavigationEvents
          //Me suscribo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={this.handleFocusEvent}
        />
        <SectionList
            sections={[
              {title: 'Configuraciones disponibles', data:this.state.activities},
            ]}
            renderItem={({item}) => 
            <Text style={sectionListItem} 
              onPress={() => {setActiveActivity(item).then(
                  this.props.navigation.goBack()
              )}}>{item.title}
            </Text>}
            renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />  
        <DefaultButton
          onPress={() => this.props.navigation.navigate('NewConfigurationModal')}
          title="Cargar nueva"
        />
      </View>
    );
  }
}

export default ModalScreen
