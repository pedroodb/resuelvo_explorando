import React, {Component} from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'

class Description extends Component {
  render() {
    return (
      <Text style={descriptionStyle.descriptionWS}>
        {this.props.description}
      </Text>
    )
  }
}

const descriptionStyle = StyleSheet.create({
    //Estilo de la descripcion
    descriptionWS: {
      textAlign: 'center',
    }
  });

export default Description
