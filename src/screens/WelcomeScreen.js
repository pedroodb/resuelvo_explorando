import React, {Component} from 'react'
import { Image, View, Button } from 'react-native'
import welcomeStyles from '../styles/WelcomeStyles'
import hasReadWritePermission from '../helpers/permissionAskers'
import welcomeComponents from './components/welcomeComponents'
import { NavigationEvents } from 'react-navigation';
  
//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {

  //Carga por defecto en caso de que no haya ninguna configuracion cargada
  constructor(props) {
    super(props)
    this.state = {
      title:'Bienvenido a resuelvo explorando',
      description:'Carga una actividad para comenzar!',
    }
  }

  const actualizarContenido = 4

  render() {
    const { title, description } = this.state
    return (
      <View style={welcomeStyles.welcomeView}>
        <NavigationEvents
          //Me subscrivo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={payload => console.log(payload)}
        />
        <welcomeComponents.Title title={title}/>
        <Image source={require('../../assets/images/resuelvo_explorando_logo.png')}/>
        <welcomeComponents.Description description={description}/>
        <Button
          onPress={() => this.props.navigation.push('Main')}
          title='Comenzar'
        />
        <Button
          onPress={() => writeFileAsync()}
          title='Crear archivo'
        />
        <Button
          onPress={() => readFileAsync()}
          title='Mostrar archivo'
        />
        <Button
          onPress={() => this.setState(() => ({title:'otro', description:'otra'}))}
          title='cambiar'
        />
    </View>
    )
  }
}

function actualizarContenido() {
    if(existsConfigFile()) {
      config = readFileAsync()

    }
}

async function existsConfigFile() {
  return (await Expo.FileSystem.getInfoAsync(`${Expo.FileSystem.documentDirectory}configuracion`)).exists
}

async function writeFileAsync() {
  if (hasReadWritePermission()) {
    Expo.FileSystem.writeAsStringAsync(`${Expo.FileSystem.documentDirectory}1`, 'hole')
  }
}

async function readFileAsync() {
  if (hasReadWritePermission()) {
    return (await Expo.FileSystem.readAsStringAsync(`${Expo.FileSystem.documentDirectory}configuracion`))
  }
}

export default WelcomeScreen