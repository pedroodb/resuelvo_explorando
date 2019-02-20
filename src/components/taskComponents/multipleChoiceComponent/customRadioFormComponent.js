import React, { Component } from 'react'
import { View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'

/*Componente correspondiente a un radioForm con propiedades predefinidas, debe recibir como props:
  -options: en forma de un arreglo de objetos {label:'aLabel', value:'aValue'}
  -onPress
*/

class CustomRadioFormComponent extends Component {
  
  render() {

    return (
      <View style={{margin:10}}>
        <RadioForm
          radio_props={this.props.radioOptions}
          initial={-1}
          animation={false}
          buttonSize={20}
          labelStyle={{fontSize:20}}
          labelHorizontal={true}
          onPress={this.props.onPress}
          >
        </RadioForm>
      </View>
    )
  }

}

export default CustomRadioFormComponent
