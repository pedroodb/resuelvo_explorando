import React, {Component} from 'react'
import { Text, View, Image, Button, ScrollView, StyleSheet} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Pantalla de vista de tarea
class TaskScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <Button
        style={{marginRight:10}}
        onPress={() => alert('This is a button!')}
        title="Ayuda"
        color="#2E9AFE"
      />
    ),
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Bolsa"
        color="#2E9AFE"
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
              <Button
              onPress={() => this.props.navigation.push('Main')}
              title="Recolectar Elemento"
              />
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <Button
                title="Dejar Elemento"
              />
            </View>
            </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 10,
    height: 44,
  },
})

export default TaskScreen
