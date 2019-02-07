import React, { Component } from 'react'
import { Image, Text, View, Alert } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { viewStyle, titleStyle, descriptionStyle } from './styles/WelcomeStyles'
import { DefaultButton, DefaultButtonTaskBar } from '../components'
import hasReadWritePermission from '../helpers/permissionAskers'
import { setConfiguration } from '../actions/activityActions'


//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {

  //Carga por defecto en caso de que no haya ninguna configuracion cargada
  constructor(props) {
    super(props)

    //Bindeo al this para referenciar al componente WelcomeScreen desde handleFocusEvent
    this.handleFocusEvent = this.handleFocusEvent.bind(this)

    this.generateConfigFolder()
  }

  //Agrega al header la opcion de cargar una nueva configuracion
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <DefaultButtonTaskBar
          onPress={() => navigation.navigate('ConfigurationModal')}
          title="Cargar"
        />
      ),
    };
  };

  //Actualizar contenido cuando se vuelve a la pantalla
  async handleFocusEvent() {
    if(await this.existsConfigFile()){
      try {
        config = JSON.parse(await this.readConfigFile())
        this.props.actions.setConfiguration({ready: true, ...config})
      } catch (error) {
        console.log(error)
        Alert.alert(
          'Error de actividad',
          'El archivo de configuracion de la actividad seleccionada se encuentra corrupto o no tiene el formato correcto.'
        )
      }
    }
  }

  //Genera carpeta para guardar las configuraciones
  async generateConfigFolder() {
    if (await hasReadWritePermission()) {
      configFolderInfo = (await Expo.FileSystem.getInfoAsync(`${Expo.FileSystem.documentDirectory}configurations`))
      if (!(configFolderInfo.exists && configFolderInfo.isDirectory)) {
        Expo.FileSystem.makeDirectoryAsync(`${Expo.FileSystem.documentDirectory}configurations`)
      }
    }
  }

  //Devuelve una promesa con un booleano correspondiente a si existe el archivo de configuracion correspondiente
  async existsConfigFile() {
    if (await hasReadWritePermission()) {
      return (await Expo.FileSystem.getInfoAsync(`${Expo.FileSystem.documentDirectory}configuration`)).exists
    }
  }

  //Devuelve una promesa con el contenido del archivo de configuracion
  async readConfigFile() {
    if (await hasReadWritePermission()) {
      return (await Expo.FileSystem.readAsStringAsync(`${Expo.FileSystem.documentDirectory}configuration`))
    }
  }

  render() {

    //Las props se obtienen gracias a mapStateToProps que las mapea desde el state del reducer
    const {
      title,
      description,
      ready
    } = this.props

    return (
      <View style={viewStyle}>
        <NavigationEvents
          //Me suscribo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={this.handleFocusEvent}
        />
        <Text style={titleStyle}>{title}</Text>
        <Image source={require('../assets/resuelvo_explorando_logo.png')}/>
        <Text style={descriptionStyle}>{description}</Text>
        {
          ready &&
          <DefaultButton
            onPress={() => this.props.navigation.navigate('Main')}
            title='Comenzar'
          />
        }
    </View>
    )
  }
}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      setConfiguration
    }, dispatch) 
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({activityReducer}) {
  return {
    ...activityReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeScreen)
