import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {

    //Pide por permiso de la camara
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Esperando por permiso de camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se tiene acceso a la camara</Text>;
    }

    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1, height: 300 }}>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    
    const taskCodes = this.props.navigation.getParam('taskCodes', []);
    const finishedTaskCodes = this.props.navigation.getParam('finishedTaskCodes', []);

    if (taskCodes.includes(data)) {
      this.props.navigation.navigate('Task',{num:parseInt(data[1])})
    } else {
      if (finishedTaskCodes.includes(data)) {
        alert('Tarea ya realizada')
      } 
      else {
        alert('Codigo de tarea invalido')
      }
    }
  }
}