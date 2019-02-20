import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../..'
import { viewStyle, titleStyle } from './styles'
import CustomRadioFormComponent from './customRadioFormComponent'
import { 
  getFinishedMultipleChoiceTaskFunction as getFinishedTask 
} from '../../../helpers/getFinishedTask'


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
        <View style={{flex:1,alignSelf:'center'}}>
          <Text style= {titleStyle}>{name}</Text>
        </View>
        <View style={{flex:3}}>
          {this.generateOptions(options)}
        </View>
        <View style={{flex:1, marginTop:120,justifyContent:'space-around'}}>
          {
            this.state.ready &&
            <DefaultButton
              title="Finalizar"
              onPress={() => {
                const finishedTask = getFinishedTask(this.props.task,this.state.selected)
                this.props.solveTaskFunction(finishedTask)
                this.props.navigation.navigate('TaskReview',({ finishedTask:finishedTask }))
              }}
            />
          }
        </View>
      </View>
    )
  }

  //Funcion que genera los radio buttons de a las opciones
  generateOptions(options) {
    const radioOptions = options.map(({ value }) => (
      {
        label:value,
        value:value
      })
    )
    return(
      <CustomRadioFormComponent
        radioOptions={radioOptions} 
        onPress={
          (value) => {this.setState(
            () => ({selected:value, ready:true})
          )
        }}
      />
    )
  }

}

export default MutipleChoiceComponent
