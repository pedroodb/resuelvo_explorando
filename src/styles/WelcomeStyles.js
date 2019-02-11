import { StyleSheet } from 'react-native'

const welcomeStyles = StyleSheet.create({
    //Estilos de la pantalla de bienvenida
    viewWS: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    descriptionWS: {
      textAlign: 'center',
    },
    titleWS: {
      textAlign: 'center',
      fontSize: 36,
    }
  });

export const viewStyle = welcomeStyles.viewWS
export const descriptionStyle = welcomeStyles.descriptionWS
export const titleStyle = welcomeStyles.titleWS
export default welcomeStyles