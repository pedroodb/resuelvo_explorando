import React, {Component} from 'react'
import { Text, View, Image, TextInput, Alert, KeyboardAvoidingView } from 'react-native'

import getActivity from '../helpers/apiConnection'
import { DefaultButton } from '../components'
import { 
  newActivityView,
  newActivityTittle,
  newActivityKeyboard,
  newActivitytextInput
} from '../styles/NewActivityStyles'
import { storeActivityFunction as storeActivity } from '../helpers/activitiesStorage'

//Pantalla de carga de nueva actividad
class NewActivityModal extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: 'unloaded',
      code: undefined,
    }
  }

  //Agrega al header un titulo
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Nueva actividad',
    }
  }

  //Guarda el archivo de actividad
  async saveActivity(activity) {
    await storeActivity(activity)
    this.props.navigation.goBack()
  }

  //Que hacer cuando se carga una actividad correctamente
  handleLoadedActivity(activity) {
    this.setState(() => ({status:'loaded'}))
    Alert.alert(
      activity.title,
      activity.description,
      [
        {text: 'Cancelar', style: 'cancel', onPress: () => this.setState({status:'unloaded'})},
        {text: 'Descargar', onPress: () => this.saveActivity(activity)},
      ]
    )
  }

  //Obtiene la actividad, chequea que tenga los campos correspondientes y la utiliza como estado del componente
  loadActivity(id){
    this.setState(() => ({status:'loading'}))
    getActivity(id).then(
      activity => this.handleLoadedActivity(activity)
    ).catch(
      error => {
        this.setState(() => ({status:'unloaded'}))
        Alert.alert(
          'Error en la carga de la actividad',
          error.message
        )
      }
    )
  }

  render() {

    const { status, code } = this.state

    return (
      <View style={newActivityView}>
        <Text style={newActivityTittle}>Carga el codigo de una nueva actividad:</Text>
        <KeyboardAvoidingView style={newActivityKeyboard} behavior="padding">
          {
            (status == 'loading') &&
            <Image source={require('../assets/loading.gif')}/>
          }
          {
            (status == 'unloaded') &&
            <View>
              <TextInput
              placeholder="Ingrese un codigo de actividad"
              autoFocus={true}
              autoCapitalize='none'
              onChangeText={(text) => this.setState(() => ({code:text}))}
              onSubmitEditing={() => this.loadActivity(code)}
              style={newActivitytextInput}
              />
              <DefaultButton
              onPress={() => this.loadActivity(code)}
              title="Cargar"
              />
            </View>
          }
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default NewActivityModal
