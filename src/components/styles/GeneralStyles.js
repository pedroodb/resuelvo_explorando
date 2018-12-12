import { StyleSheet } from 'react-native'

const generalStyles = StyleSheet.create({
    //Estilo de la pantalla Main
    container: {
      flex: 1,
      paddingTop: 22
    },
    mainView: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botonLeerTarea: {
      color: "#fff",
      margin: 2
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });

export default generalStyles
