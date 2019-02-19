import { StyleSheet, Dimensions } from 'react-native'


const { width } = Dimensions.get('window')
const qrSize = width * 0.7
const cameraStyles = StyleSheet.create({
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

export const qrStyle = cameraStyles.qr
export const cancelStyle = cameraStyles.cancel
export const descriptionStyle = cameraStyles.description
export const containerStyle = cameraStyles.container
export default cameraStyles
