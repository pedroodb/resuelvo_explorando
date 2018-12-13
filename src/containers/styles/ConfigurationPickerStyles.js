import { StyleSheet } from 'react-native'

const configurationPickerStyles = StyleSheet.create({
    //Estilo de la pantalla de seleccion de configuracion
    configurationPickerView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    configurationPickerMainText: {
      fontSize: 28,
    }
  });

export const configurationPickerView = configurationPickerStyles.configurationPickerView
export const configurationPickerMainText = configurationPickerStyles.configurationPickerMainText
export default configurationPickerStyles