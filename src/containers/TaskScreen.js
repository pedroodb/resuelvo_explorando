import React, {Component} from 'react'
import { Text, View, Image, Button,ScrollView, StyleSheet} from 'react-native'
import {DefaultButton, DefaultButtonTaskBar} from '../components/generalComponents'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <DefaultButtonTaskBar
        onPress={() => alert('This is a button!')}
        title="Ayuda"
      />
    ),
    headerLeft: (
      <DefaultButtonTaskBar
        onPress={() => alert('This is a button!')}
        title="Bolsa"
      />
    ),
  };

    render() {
      return (
        <View style={{ flex:1, backgroundColor:'lightblue'}}>
          <View style={{flex:2}}>
            <Text
             style={{fontSize:20, textAlign:'center'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min
            </Text>
          </View>
          <View style={{alignItems: 'center', flex:3,}}>
            <ScrollView>
              <Text style={{fontSize:90}}>Queso</Text>
              <Text style={{fontSize:50}}>Pan</Text>
              <Text style={{fontSize:50}}>Torta</Text>
              <Text style={{fontSize:90}}>Leche</Text>
              <Text style={{fontSize:50}}>Algo más</Text>
            </ScrollView>
          </View>
          <View style={{alignItems: 'center', flex:2}} >
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
              onPress={() => this.props.navigation.push('Main')}
              title="Recolectar Elemento"
              />
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
                title="Dejar Elemento"
                onPress={() => this.props.navigation.push('Main')}
              />
            </View>
            </View>
        </View>
      )
    }
  }


export default TaskScreen
