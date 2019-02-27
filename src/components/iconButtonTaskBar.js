import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native'

class IconButtonTaskBar extends React.PureComponent {
  render() {
    const { onPress, image } = this.props
    return (
      //cambiar el color por el que pertenezca al taskBar
      <TouchableHighlight onPress={onPress} underlayColor="white">
        <View style={styles.button}>
          <Image source={image}/>
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

export default IconButtonTaskBar
