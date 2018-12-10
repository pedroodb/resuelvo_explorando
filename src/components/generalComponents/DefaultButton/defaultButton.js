import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class DefaultButton extends React.PureComponent {
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
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#68a0cf',
        borderRadius:20,
        borderWidth: 3,
        borderColor: '#fff'
  },
  buttonText: {
    alignItems: 'center',
    color: '#FFFFFF',
  },
})

export default DefaultButton
