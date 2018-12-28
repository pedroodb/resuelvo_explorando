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
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
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
    switch (data) {
      case "T1":
        this.props.navigation.navigate('Task',{num:parseInt(data[1])})
        break
      case "T2":
        this.props.navigation.navigate('Task',{num:parseInt(data[1])})
        break
      case "T3":
        this.props.navigation.navigate('Task',{num:parseInt(data[1])})
        break
      default:
        alert(`Codigo de tarea invalido`);
    }
  }
}