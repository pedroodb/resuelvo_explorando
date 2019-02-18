import React from 'react'
import { View, Text, SectionList } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import { hasReadWritePermissionFunction  as hasReadWritePermission } from '../helpers/permissionAskers'
import { DefaultButton } from '../components'
import { sectionListHeader, sectionListItem } from '../styles/GenericComponentsStyles'
import { configurationPickerView } from '../styles/ConfigurationPickerStyles'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: [],
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
    this.updateConfigList()
  }

  //Actualiza el estado con los archivos de configuracion disponibles
  async updateConfigList() {
    this.getConfigurations().then(
      (configurations) => this.setState(() => ({files: configurations}))
    )
  }

  //Devuelve arreglo de objetos con los nombres de archivos de configuracion
  async getConfigurations() {
    if(await hasReadWritePermission()) {
      return (await Expo.FileSystem.readDirectoryAsync(`${Expo.FileSystem.documentDirectory}configurations`)).map((elem) => ({key:elem}))
    }
  }

  //Carga el archivo de configuracion con la configuracion seleccionada
  async setConfiguration(configName) {
    if(await hasReadWritePermission()) {
      Expo.FileSystem.copyAsync({from:`${Expo.FileSystem.documentDirectory}configurations/${configName}`, to:`${Expo.FileSystem.documentDirectory}configuration`})
    }
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
              {title: 'Configuraciones disponibles', data:this.state.files},
            ]}
            renderItem={({item}) => <Text style={sectionListItem} onPress={() => {
              this.setConfiguration(item.key).then(
                this.props.navigation.goBack()
            )}}>{item.key}</Text>}
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
