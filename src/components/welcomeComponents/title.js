import React, {Component} from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'


class Title extends Component {
  render() {
    return (
      <Text style={titleStyle.titleWS}>
        {this.props.title}
      </Text>
    )
  }
}

const titleStyle = StyleSheet.create({
    //Estilo del titulo de bienvenida
    titleWS: {
      textAlign: 'center',
      fontSize: 36,
    }
  });

export default Title
