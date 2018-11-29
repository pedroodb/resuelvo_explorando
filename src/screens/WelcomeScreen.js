import React, {Component} from 'react'
import { Image,Text, View, Button } from 'react-native'
import welcomeStyles from '../styles/WelcomeStyles'
  
//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {
  render() {
    return (
      <View style={welcomeStyles.welcomeView}>
        <Text>
          Bienvenidos a Resuelvo Explorando!
        </Text>
        <Image source={require('../../assets/images/resuelvo_explorando_logo.png')}/>
        <Button
          onPress={() => this.props.navigation.push('Main')}
          title='Comenzar'
        />
    </View>
    )
  }
}

export default WelcomeScreen