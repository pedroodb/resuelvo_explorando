import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

import { DefaultButton } from '../../../components'
import { viewStyle } from '../../styles/genericStyles'


//Componente que corresponde a una tarea del tipo multiple choice
class MutipleChoiceComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ready:false
    }
  }

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
        {
          this.state.ready &&
          <DefaultButton
            title="Finalizar"
            onPress={() => {
              //Falta setear la tarea como finalizada en el redux state de aplicacion
              this.props.navigation.navigate('Review',({ finishedTask:this.finishTask(this.props.task, this.state.selected) }))
            }}
          />
        }
      </View>
    )
  }

  //Funcion que genera los radio buttons de a las opciones
  generateOptions(options) {
    radio_props = options.map(({ value }) => (
      {
        label:value, 
        value:value
      })
    )
    return(
      <RadioForm
        radio_props={radio_props}
        initial={-1}
        labelHorizontal={true}
        onPress={(value) => {
          this.setState(() => ({selected:value, ready:true}))
        }}
      />
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
