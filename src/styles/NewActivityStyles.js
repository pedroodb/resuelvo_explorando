import { StyleSheet } from 'react-native'

const newActivityStyles = StyleSheet.create({
    //Estilo de la pantalla de carga de nueva configuracion
    keyboardViewNA: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleNA: {
      textAlign: 'center',
      fontSize: 28,
    },
    viewNA: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      margin:10,
    },
    textInputNA:{
      textAlign:'center',
      fontSize:20,
      marginBottom:10,
    }
  });

export const newActivitytextInput = newActivityStyles.textInputNA
export const newActivityKeyboard = newActivityStyles.keyboardViewNA
export const newActivityTittle = newActivityStyles.titleNA
export const newActivityView = newActivityStyles.viewNA
export default newActivityStyles
