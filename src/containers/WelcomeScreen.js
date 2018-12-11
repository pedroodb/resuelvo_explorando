import React, {Component} from 'react'
import { Image, View, Button } from 'react-native'
import { welcomeViewStyle } from './styles/WelcomeStyles'
import hasReadWritePermission from '../helpers/permissionAskers'
import { Title, Description } from '../components/welcomeComponents'
import { NavigationEvents } from 'react-navigation'

//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {

  //Carga por defecto en caso de que no haya ninguna configuracion cargada
  constructor(props) {
    super(props)
    this.state = {
      title: 'Bienvenido a resuelvo explorando',
      description: 'Carga una actividad para comenzar!',
    }

    //Bindeo al this para referenciar al componente WelcomeScreen desde handleFocusEvent
    this.handleFocusEvent = this.handleFocusEvent.bind(this)

    this.generateConfigFolder()
  }
  
  //Agrega al header la opcion de cargar una nueva configuracion
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('ConfigurationModal')}
          title="Cargar"
        />
      ),
    };
  };

  //Actualizar contenido cuando se vuelve a la pantalla
  async handleFocusEvent() {
    if(await this.existsConfigFile()){
      config = await this.readConfigFile()
      config = JSON.parse(config)
      this.setState(() => ({title: config.title, description: config.description}))
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

    const { title, description } = this.state
    
    return (
      <View style={welcomeViewStyle}>
        <NavigationEvents
          //Me suscribo al evento 'onWillFocus' para actualizar el contenido luego de seleccionar una configuracion
          onWillFocus={this.handleFocusEvent}
        />
        <Title title={title}/>
        <Image source={require('../assets/resuelvo_explorando_logo.png')}/>
        <Description description={description}/>
        <Button
          onPress={() => this.props.navigation.navigate('Main')}
          title='Comenzar'
        />
    </View>
    )
  }
}

export default WelcomeScreen