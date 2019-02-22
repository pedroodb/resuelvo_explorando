import React, { Component } from 'react'
import { Image, Text, View, Alert } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  viewStyle,
  titleStyle,
  descriptionStyle
} from '../styles/WelcomeStyles'
import {
  DefaultButton,
  DefaultButtonTaskBar
} from '../components'
import {
  isActivitySetFunction as isActivitySet,
  getActiveActivityFunction as getActiveActivity,
} from '../helpers/configurationsStorage'
import { setConfiguration } from '../actions/activityActions'


//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {

  //Carga por defecto en caso de que no haya ninguna configuracion cargada
  constructor(props) {
    super(props)

    //Bindeo al this para referenciar al componente WelcomeScreen desde handleFocusEvent
    this.handleFocusEvent = this.handleFocusEvent.bind(this)
  }

  //Agrega al header la opcion de cargar una nueva configuracion y un titulo
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Bienvenida',
      headerRight: (
        <DefaultButtonTaskBar
          onPress={() => navigation.navigate('ConfigurationModal')}
          title="Cargar"
        />
      ),
    }
  }

  //Actualizar contenido cuando se vuelve a la pantalla
  async handleFocusEvent() {
    isActivitySet().then(
      (isSet) => isSet ? getActiveActivity().then(
        (activity) => this.props.actions.setConfiguration({ready: true, ...activity})
      ) : {}
    )
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
        <View style={{alignItems:'center'}}>
        <Image source={require('../assets/resuelvo_explorando_logo.png')}/>
        </View>
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
