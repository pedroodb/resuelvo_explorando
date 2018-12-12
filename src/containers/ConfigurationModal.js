import React from 'react'
import { Button, View, Text, FlatList } from 'react-native'
import hasReadWritePermission from '../helpers/permissionAskers'
import { DefaultButton } from '../components/generalComponents'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }
  }

  componentDidMount() {
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
        <Text style={{ fontSize: 30 }}>Elige una configuración entre las disponibles:</Text>
        <FlatList
          data={this.state.files}
          renderItem={({item}) =>
            <DefaultButton title={item.key}
              onPress={() => {this.setConfiguracion(item.key).then(
                this.props.navigation.goBack()
            )}}/>}
        />
        <DefaultButton
          onPress={() => this.props.navigation.goBack()}
          title="Cargar nueva"
        />
      </View>
    );
  }
}

export default ModalScreen