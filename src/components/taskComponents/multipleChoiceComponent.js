import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

import { DefaultButton } from '..'
import { viewStyle } from '../../styles/GenericComponentsStyles'
import getFinishedTask from '../../helpers/getFinishedTask'


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
      code,
      description,
      options
    } = this.props.task

    return (
      <View style={viewStyle}>
        <Text style= {styles.title}>{name}</Text>
        {this.generateOptions(options)}
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
      <View style={{margin:10}}>
      <RadioForm
      radio_props={radio_props}
      initial={-1}
      animation={false}
      buttonSize={20}
      labelStyle={{fontSize:20}}
      labelHorizontal={true}
      onPress={(value) => {
        this.setState(() => ({selected:value, ready:true}))
      }}
      >
      </RadioForm>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:30,
  },
})

export default MutipleChoiceComponent
