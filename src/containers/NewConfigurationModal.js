import React, {Component} from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import hasReadWritePermission from '../helpers/permissionAskers'
import {DefaultButton} from '../components/generalComponents'

//Pantalla de carga de configuracion nueva
class NewConfigurationModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      configuration:{
        title: '',
        description: '',
      },
    }
  }

  //Guarda el archivo de configuracion en la carpeta configurations
  async saveConfiguration() {
    if (await hasReadWritePermission()) {
      Expo.FileSystem.writeAsStringAsync(`${Expo.FileSystem.documentDirectory}configurations/${this.state.configuration.title}`, JSON.stringify(this.state.configuration)).then(
        this.props.navigation.goBack()
      )
    }
  }

  //Obtiene la configuracion y la utiliza como estado del componente
  setConfiguration(code){
    fetch(`https://${code}`).then(
      (result) => result.json().then(
        (configuration) => this.setState(() => ({configuration}))
      )
    )
  }


  render() {
    return (
      <View>
        <Text>Carga el codigo de una nueva configuracion:</Text>
        <TextInput onChangeText={(text) => this.setState((prevState) => {prevState.code = text; return prevState})}/>
        <DefaultButton
          onPress={() => this.setConfiguration(this.state.code)}
          title="Cargar"
        />
        <Text>{this.state.configuration.title}</Text>
        <Text>{this.state.configuration.description}</Text>
        <DefaultButton
          onPress={() => this.saveConfiguration()}
          title="Descargar"
        />
      </View>
    )
  }
}

export default NewConfigurationModal
