import React, {Component} from 'react'
import {StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
    //Estilo de la pantalla de bienvenida
    welcomeView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <Text>
          Bienvenido
        </Text>
        <Button
          onPress={() => this.props.navigation.push('Main')}
          title='Comenzar'
        />
    </View>
    )
  }
}

export default WelcomeScreen