import React, { Component } from 'react'
import { Text, View, CheckBox} from 'react-native'
//import { viewStyle } from './styles/TaskStyles'

class CheckBoxWText extends Component {

  constructor() {
    super();
    this.state={
      check:false
    }
  }


  render() {
    const { title } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{marginTop: 5}}>{title}</Text>
        <CheckBox
        value= {(this.state.check)}
        onValueChange={()=> this.checkBoxTest()}
        />
      </View>
    )
  }

  checkBoxTest(){
    this.setState(
      {
        check:!(this.state.check)
      }
    )
    alert("Ahora el valor es " + !this.state.check)
  }
}

export default CheckBoxWText
