import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'

class CameraModal extends Component {

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
    this.props.navigation.navigate('Main',{ readenTaskCode:data })
  }
}

export default CameraModal
