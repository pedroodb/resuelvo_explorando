import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { readTask } from '../actions/taskActions'

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
    this.props.actions.readTask(data)
    this.props.navigation.goBack()
  }
}


//Funcion que mapea las acciones ('actions/activityActions') con las funciones que llamamos desde el componente
function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators({
      readTask
    }, dispatch) 
  }
}

//Funcion que mapea el estado de la APLICACION (redux) con las props del componente
function mapStateToProps({activityReducer}) {
    return {
      //No necesitamos nada del state 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CameraModal)
