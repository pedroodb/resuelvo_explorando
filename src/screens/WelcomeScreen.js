import React, {Component} from 'react'
import { Image, View, Button } from 'react-native'
import { welcomeViewStyle } from '../styles/WelcomeStyles'
import hasReadWritePermission from '../helpers/permissionAskers'
import { Title, Description } from './components/welcomeComponents'
import { NavigationEvents } from 'react-navigation';

//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {

  //Carga por defecto en caso de que no haya ninguna configuracion cargada
  constructor(props) {
    super(props)
    this.state = {
      title: 'Bienvenido a resuelvo explorando',
      description: 'Carga una actividad para comenzar!',
    }

    //Bindeo al this para referenciar al componente WelcomeScreen desde handle focus event
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
  }

  //Actualizar contenido cuando se vuelve a la pantalla
  async handleFocusEvent() {
    exists = await this.existsConfigFile()
    if(exists){
      config = await this.readConfigFile()
      this.setState(() => ({title: config, description: config}))
    }
  }

  //Devuelve una promesa con un booleano correspondiente a si existe el archivo de configuracion correspondiente
  async existsConfigFile() {
    return (await Expo.FileSystem.getInfoAsync(`${Expo.FileSystem.documentDirectory}configuracion`)).exists
  }
  
  //Devuelve una promesa con el contenido del archivo de configuracion
  async readConfigFile() {
    readWritePermission = await hasReadWritePermission()
    if (readWritePermission) {
      return (await Expo.FileSystem.readAsStringAsync(`${Expo.FileSystem.documentDirectory}configuracion`))
    }
  }
  
  /*
  async writeFileAsync() {
    readWritePermission = await hasReadWritePermission()
    if (readWritePermission) {
      Expo.FileSystem.writeAsStringAsync(`${Expo.FileSystem.documentDirectory}configuracion`, 'hole')
    }
  }
  */

  render() {

    const { title, description } = this.state
    
    return (
      <View style={welcomeViewStyle}>
        <NavigationEvents
          //Me subscrivo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={this.handleFocusEvent}
        />
        <Title title={title}/>
        <Image source={require('../../assets/images/resuelvo_explorando_logo.png')}/>
        <Description description={description}/>
        <Button
          onPress={() => this.props.navigation.push('Main')}
          title='Comenzar'
        />
    </View>
    )
  }
}

export default WelcomeScreen