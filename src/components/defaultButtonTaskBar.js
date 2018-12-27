import React from 'react'
import {
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
              {title.toUpperCase()}
            </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

//Configurar para cambiar el texto de los botones y del botón
const styles = StyleSheet.create({
  button: {
    marginRight:3,
    backgroundColor:'#fff',
    borderRadius:0,
    borderWidth: 0,
    borderColor: '#fff',
    paddingHorizontal: 10
  },
  buttonText: {
    alignItems: 'center',
    color: '#68a0cf',
  },
})

export default DefaultButtonTaskBar
