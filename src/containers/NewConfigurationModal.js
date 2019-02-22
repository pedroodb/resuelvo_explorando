import React, {Component} from 'react'
import { Text, View, Image, TextInput, Alert } from 'react-native'

import { hasReadWritePermissionFunction  as hasReadWritePermission } from '../helpers/permissionAskers'
import checkActivityFormat from '../helpers/checkActivityFormat'
import { DefaultButton } from '../components'
import { newConfigurationView } from '../styles/NewConfigurationStyles'
import { storeActivityFunction as storeActivity } from '../helpers/configurationsStorage'

//Pantalla de carga de configuracion nueva
class NewConfigurationModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: 'unloaded',
      code: undefined,
      configuration: null,
    }
  }

  //Agrega al header un titulo
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Nueva configuración',
    }
  }

  //Guarda el archivo de configuracion en la carpeta configurations
  async saveConfiguration() {
    storeActivity(this.state.configuration)
    this.props.navigation.goBack()
  }

  //Obtiene la configuracion, chequea que tenga los campos correspondientes y la utiliza como estado del componente
  setConfigurationAsState(code){
    this.setState(() => ({status:'loading'}))
    fetch(`https://${code}`).then(
      (result) => result.json().then(
        (configuration) => 
          {
            if (checkActivityFormat(configuration)){
              this.setState(() => ({configuration, status:'loaded'}))
            } else {
              throw new Error("Archivo de configuracion corrupto")
            }
          }
      )
    ).catch(
      (error) => {
        this.setState(() => ({status:'unloaded'}))
        Alert.alert(
          'Error en la carga de la configuracion',
          error.message
        )
      }
    )
  }


  render() {

    const { configuration, status, code } = this.state

    return (
      <View style={newConfigurationView}>
        <Text>Carga el codigo de una nueva configuracion:</Text>
        <TextInput 
          placeholder="Ingrese un codigo de configuracion" 
          onChangeText={(text) => this.setState(() => ({code:text}))}
          onSubmitEditing={() => this.setConfigurationAsState(code)}  
        />
        <DefaultButton
          onPress={() => this.setConfigurationAsState(code)}
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
