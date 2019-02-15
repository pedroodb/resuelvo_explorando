import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class FinalReviewScreenComponent extends Component {

  render() {

    const educationalActivity = this.props.navigation.getParam('educationalActivity')
    
    return (
      <View>
        <Text>Hola</Text>
        <Button title="Finalizar" onPress={() => this.props.navigation.popToTop()}/>
      </View>
    )
  }

}

export default FinalReviewScreenComponent