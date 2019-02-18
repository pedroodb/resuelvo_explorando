import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'
import { containerStyle, qrStyle, descriptionStyle, cancelStyle } from '../styles/CameraModalStyles'

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
      <BarCodeScanner
              onBarCodeRead={this.handleBarCodeScanned}
              style={[StyleSheet.absoluteFill, containerStyle]}>
              <Image
                style={qrStyle}
                source={require('../assets/QRScanner.png')}
              />
              <Text
              onPress={() => this.props.navigation.pop()}
              style={cancelStyle}>
              Cancel
              </Text>
            </BarCodeScanner>

          );

  }

  handleBarCodeScanned = ({ type, data }) => {
    this.props.navigation.navigate('Main',{ readenTaskCode:data })
  }

}


export default CameraModal
