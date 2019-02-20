import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '..'

//Componente que corresponde a cuando la tarea tiene un tipo erroneo
class TypeErrorComponent extends Component {
  
  render() {

    return (
      <View>
        <Text>Hubo un error en la carga de la tarea o esta se encuentra corrupta</Text>
        <DefaultButton
          title='Volver'
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

}

export default TypeErrorComponent
