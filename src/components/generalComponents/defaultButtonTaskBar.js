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
      //cambiar el color por el que pertenezca al taskBar
      <TouchableHighlight onPress={onPress} underlayColor="white">
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
    backgroundColor:'#fff',
    borderRadius:0,
    borderWidth: 0,
    borderColor: '#fff',
    padding:10,
    paddingHorizontal: 10
  },
  buttonText: {
    alignItems: 'center',
    color: '#68a0cf',
  },
})

export default DefaultButtonTaskBar
