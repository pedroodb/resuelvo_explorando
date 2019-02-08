import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DefaultButton } from '../../../components'
import CheckBoxWText from './checkBoxWText'
import { viewStyle } from '../../styles/genericStyles'

//Componente que corresponde a una tarea del tipo multiple choice
class MutipleChoiceComponent extends Component {
  
  render() {

    const {
      name,
      description,
      options
    } = this.props.task

    return (
      <View style={viewStyle}>
        <Text>{name}</Text>
        {this.options()}
        <DefaultButton
          title="Dejar Elemento"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }


 options() {
    tareas=["Option 1", "Option 2", "Option 3"]
    t = tareas.map((element) => <CheckBoxWText title= {element}/>)
    return t
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      //Aqui van las actions (redux) que fuera a utilizar
    }, dispatch)
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({/*De necesitar un reducer especificar aqui*/}) {
  return {
    //Devolver los campos del reducer que se necesiten
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MutipleChoiceComponent)
