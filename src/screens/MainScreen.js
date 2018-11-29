import React, {Component} from 'react'
import { Text, View, Image, Button } from 'react-native'

//Pantalla de vista de tarea
class MainScreen extends Component {
  
    static navigationOptions = {
      //Eliminar la barra para volver atras desde la vista de tareas
      headerLeft: null
    }
  
    render() {
      return (
        <View>
          <Text>
            Principal
          </Text>
        </View>
      )
    }
  }

export default MainScreen