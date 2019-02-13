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
        labelHorizontal={true}
        onPress={(value) => {
          this.setState(() => ({selected:value, ready:true}))
        }}
      />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  button: {
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#349AF4',
        borderRadius:5,
        borderWidth: 0,
        borderColor: '#fff',
        padding:10,
        paddingHorizontal: 10
  },
  title: {
    textAlign:'center',
    fontSize:20,
  },
})

export default MutipleChoiceComponent
