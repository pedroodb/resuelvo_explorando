import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class DefaultButtonTaskBar extends React.PureComponent {
  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>
              {title}
            </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

//Configurar para cambiar el texto de los botones y del botón
const styles = StyleSheet.create({
  button: {
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:0,
        borderWidth: 0,
        borderColor: '#fff'
  },
  buttonText: {
    alignItems: 'center',
    color: '#68a0cf',
  },
})

export default DefaultButtonTaskBar
