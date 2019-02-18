import { StyleSheet, Dimensions } from 'react-native'

const cameraStyle = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
    },
    qr: {
      marginTop: '20%',
      marginBottom: '20%',
      width: Dimensions.get('window') * 0.7,
      height: Dimensions.get('window') * 0.7,
    },
    description: {
      fontSize: Dimensions.get('window') * 0.09,
      marginTop: '10%',
      textAlign: 'center',
      width: '70%',
      color: 'white',
    },
});

export const qrStyle = cameraStyle.qr
export const descriptionStyle = cameraStyle.description
export const containerStyle = cameraStyle.container
export default cameraStyle
