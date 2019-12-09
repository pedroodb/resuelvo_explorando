import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, Image } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { hasCameraPermissionFunction as hasCameraPermission } from '../helpers/permissionAskers'
import { containerStyle, qrStyle } from '../styles/CameraModalStyles'
import { setCode } from '../actions/taskActions'

class CameraModal extends Component {

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const cameraPermission = await hasCameraPermission()
    this.setState({ hasCameraPermission: cameraPermission })
  }

  render() {

    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Esperando por permiso de camara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se tiene acceso a la camara</Text>;
    }

    return (
      <BarCodeScanner
        onBarCodeScanned={this.handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, containerStyle]}>
        <Image
          style={qrStyle}
          source={require('../assets/QRScanner.png')}
        />
      </BarCodeScanner>
    )
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.props.actions.setCode(data)
    this.props.navigation.navigate('Main')
  }

}

//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      setCode,
    }, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(CameraModal)
