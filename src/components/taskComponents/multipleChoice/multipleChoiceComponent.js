import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

import { DefaultButton } from '../../../components'
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
        {this.generateOptions(options)}
        <DefaultButton
          title="Finalizar"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }

  generateOptions(options) {
    radio_props = options.map((option) => ({label:(option.value), value:(option.isCorrect)}))
    return(
      //<View style={{ flexDirection: 'row' }}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          labelHorizontal={true}
          onPress={(value) => {this.setState({value:value})}}
        />
      //</View>
    )
  }

  //Funcion que recibe una task y devuelve la finishedTask correspondiente
  finishTask(task, answer){
    return (
      {
        answer:answer,
        task:task
      }
    )
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
