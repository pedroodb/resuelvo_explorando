import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

import { DefaultButton } from '..'
import { viewStyle } from '../../styles/GenericComponentsStyles'


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
              finishedTask = this.finishTask(this.props.task, this.state.selected)
              this.props.solveTaskFunction(finishedTask)
              this.props.navigation.navigate('Review',({ finishedTask:finishedTask }))
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
        name:task.name,
        task:task
      }
    )
  }

}

export default MutipleChoiceComponent
