import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
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
      <BarCodeScanner
              onBarCodeRead={this.handleBarCodeScanned}
              style={[StyleSheet.absoluteFill, styles.container]}>
              <Image
                style={styles.qr}
                source={require('../assets/QRScanner.png')}
              />
            </BarCodeScanner>

          );

  }

  handleBarCodeScanned = ({ type, data }) => {
    this.props.navigation.navigate('Main',{ readenTaskCode:data })
  }

}

const { width } = Dimensions.get('window')
const qrSize = width * 0.7
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
    },
    qr: {
      marginTop: '20%',
      marginBottom: '20%',
      width: qrSize,
      height: qrSize,
    },
    description: {
      fontSize: width * 0.09,
      marginTop: '10%',
      textAlign: 'center',
      width: '70%',
      color: 'white',
    },
});


export default CameraModal
