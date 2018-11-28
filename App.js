import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Pantalla de bienvenida y carga de JSON
class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.welcomeView}>
        <Text>
          Bienvenido
        </Text>
        <Button
          onPress={() => this.props.navigation.push('Main')}
          title="Comenzar"
        />
      </View>
    )
  }
}

//Pantalla de vista de tarea
class TaskScreen extends React.Component {
  
  static navigationOptions = {
    //Eliminar la barra para volver atras desde la vista de tareas
    headerLeft: null
  }

  render() {
    return (
      <View>
        <Text>
          Tarea
        </Text>
      </View>
    )
  }
}

//Navegador entre pantalla inicial y pantalla principal
const MainNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Main: {
      screen: TaskScreen,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);
  
const styles = StyleSheet.create({
  //Estilo de la pantalla de bienvenida
  welcomeView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//Creacion del AppContainer para exportar
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}