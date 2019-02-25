import { StyleSheet } from 'react-native'

const newConfigurationStyles = StyleSheet.create({
    //Estilo de la pantalla de carga de nueva configuracion
    viewKeyboard: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    titleNC: {
      textAlign: 'center',
      fontSize: 28,
    },
    viewNC: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      margin:10,
    },
    textInputStyle:{
      textAlign:'center',
      fontSize:20,
      marginBottom:10,
    }
  });

export const newConfigurationtextInput = newConfigurationStyles.textInputStyle
export const newConfigurationKeyboard = newConfigurationStyles.viewKeyboard
export const newConfigurationTittle = newConfigurationStyles.titleNC
export const newConfigurationView = newConfigurationStyles.viewNC
export default newConfigurationStyles
