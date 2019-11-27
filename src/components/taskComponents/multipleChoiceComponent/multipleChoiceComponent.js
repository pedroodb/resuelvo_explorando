import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { DefaultButton } from '../..'
import { viewStyle, titleStyle } from './styles'
import CustomRadioFormComponent from './customRadioFormComponent'


//Componente que corresponde a una tarea del tipo multiple choice
class MutipleChoiceComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected:null,
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
          <CustomRadioFormComponent
            radioOptions={options.map(option => (
              {
                label:option.value,
                value:option,
              })
            )} 
            onPress={selected => {this.setState(() => ({selected}))}}
          />
        </View>
        <View style={{flex:1, marginTop:120,justifyContent:'space-around'}}>
          {
            this.state.ready &&
            <DefaultButton
              title="Finalizar"
              onPress={() => {
                this.props.solveTaskAction(this.props.task, this.state.selected)
                this.props.navigation.navigate('TaskReview',({ finishedTask:finishedTask }))
              }}
            />
          }
        </View>
      </View>
    )
  }

}

export default MutipleChoiceComponent
