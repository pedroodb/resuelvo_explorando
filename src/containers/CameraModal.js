import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
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
              style={[StyleSheet.absoluteFill, styles.container]}
            >
              <View style={styles.layerTop} />
              <View style={styles.layerCenter}>
                <View style={styles.layerLeft} />
                <View style={styles.focused} />
                <View style={styles.layerRight} />
              </View>
              <View style={styles.layerBottom} />
            </BarCodeScanner>
          );

  }

  handleBarCodeScanned = ({ type, data }) => {
    this.props.navigation.navigate('Main',{ readenTaskCode:data })
  }

}
const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex:1 ,
    backgroundColor: opacity
  },
  focused: {
    flex: 3
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity
  },
});


export default CameraModal
