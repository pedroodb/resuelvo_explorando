import React, {Component} from 'react'
import { Text, View, Image, TextInput, Alert } from 'react-native'

import hasReadWritePermission from '../helpers/permissionAskers'
import { DefaultButton } from '../components'
import { newConfigurationView } from '../styles/NewConfigurationStyles'

//Pantalla de carga de configuracion nueva
class NewConfigurationModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: 'unloaded',
      code: undefined,
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
    this.setState(() => ({status:'loading'}))
    fetch(`https://${code}`).then(
      (result) => result.json().then(
        (configuration) => this.setState(() => ({configuration, status:'loaded'}))
      )
    ).catch(
      (error) => {
        this.setState(() => ({status:'unloaded'}))
        Alert.alert(
          'Error en la carga de la configuracion',
          'El codigo ingresado no corresponde a una actividad correcta.'
        )
      }
    )
  }


  render() {

    const { configuration, status, code } = this.state

    return (
      <View style={newConfigurationView}>
        <Text>Carga el codigo de una nueva configuracion:</Text>
        <TextInput placeholder="Ingrese un codigo de configuracion" onChangeText={(text) => this.setState(() => ({code:text}))}/>
        <DefaultButton
          onPress={() => this.setConfiguration(code)}
          title="Cargar"
        />
        {
          (status == 'loading') && 
          <Image source={require('../assets/loading.gif')}/>
        }
        {
          (status == 'loaded') &&
          <View>
            <Text>{configuration.title}</Text>
            <Text>{configuration.description}</Text>
            <DefaultButton
              onPress={() => this.saveConfiguration()}
              title="Descargar"
            />
          </View>
        }
      </View>
    )
  }
}

export default NewConfigurationModal
