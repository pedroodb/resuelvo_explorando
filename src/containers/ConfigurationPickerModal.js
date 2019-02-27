import React, { Component } from 'react'
import { View, Text, SectionList, Alert } from 'react-native'
import Touchable from 'react-native-platform-touchable'
import { NavigationEvents } from 'react-navigation'

import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../styles/GenericComponentsStyles'
import { configurationPickerView } from '../styles/ConfigurationPickerStyles'
import { 
  getActivitiesFunction as getActivities,
  setActiveActivityFunction as setActiveActivity,
  deleteActivityFunction as deleteActivity,
} from '../helpers/activitiesStorage'

class ConfigurationPickerModal extends Component {

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
      headerTitle: 'Carga de actividad',
    }
  }

  //Actualizo la lista cada vez que se hace foco (necesaria para cuando vuelvo de cargar configuracion nueva)
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
              {title: 'Actividades disponibles', data:this.state.activities},
            ]}
            renderItem={({item,index}) => 
            <Touchable
              onPress={() => {
                setActiveActivity(item).then(
                  this.props.navigation.goBack()
                )
              }}
              onLongPress={() => {
                Alert.alert(
                  'Eliminar actividad',
                  'Seguro que desea eliminar esta actividad?',
                  [
                    {text: 'Cancelar', style: 'cancel'},
                    {text: 'Eliminar', onPress: () => deleteActivity(index).then(() => this.handleFocusEvent())},
                  ]
                )
              }}
              >
              <Text style={sectionListItem}>{item.title}</Text>
            </Touchable>}
            renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
        />  
        <DefaultButton
          onPress={() => this.props.navigation.navigate('NewActivityModal')}
          title="Cargar nueva actividad"
        />
      </View>
    );
  }
}

export default ConfigurationPickerModal
