import React from 'react'
import { Button, View, Text, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import hasReadWritePermission from '../helpers/permissionAskers'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }

    //Bindeo al this para referenciar al componente desde handleFocusEvent
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
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
  async setConfiguracion(configName) {
    if(await hasReadWritePermission()) {
      Expo.FileSystem.copyAsync({from:`${Expo.FileSystem.documentDirectory}configurations/${configName}`, to:`${Expo.FileSystem.documentDirectory}configuration`})
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <NavigationEvents
          //Me suscribo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={this.handleFocusEvent}
        />
        <Text style={{ fontSize: 30 }}>Elige una configuración entre las disponibles:</Text>
        <FlatList
          data={this.state.files}
          renderItem={({item}) => 
            <Button title={item.key} 
              onPress={() => {this.setConfiguracion(item.key).then(
                this.props.navigation.goBack()
            )}}/>}
        />
        <Button
          onPress={() => this.props.navigation.navigate('NewConfigurationModal')}
          title="Cargar nueva"
        />
      </View>
    );
  }
}

export default ModalScreen