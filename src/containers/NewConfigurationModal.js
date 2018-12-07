import React, {Component} from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import hasReadWritePermission from '../helpers/permissionAskers'

//Pantalla de carga de configuracion nueva
class NewConfigurationModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
    }
  }

  async saveConfiguration() {
    if (await hasReadWritePermission()) {
      Expo.FileSystem.writeAsStringAsync(`${Expo.FileSystem.documentDirectory}configurations/${this.state.title}`, this.state.toString())
    }
  }

  setConfiguration(code){
    fetch(code).then(
      (result) => result.json().then(
        (configuration) => this.setState(() => configuration)
      )
    ).catch(
      (error) => console.log(error)      
    )
  }

  
  render() {
    return (
      <View>
        <Text>Carga el codigo de una nueva configuracion:</Text>
        <TextInput onChangeText={(text) => this.setState((prevState) => {prevState.code = text; return prevState})}/>
        <Button
          onPress={() => this.setConfiguration(this.state.code)}
          title="Cargar codigo"
        />
        <Text>{this.state.title}</Text>
        <Text>{this.state.description}</Text>
        <Button
          onPress={() => this.saveConfiguration()}
          title="Descargar"
        />
      </View>
    )
  }
}

export default NewConfigurationModal