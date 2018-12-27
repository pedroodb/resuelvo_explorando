import { StyleSheet } from 'react-native'

const genericStyles = StyleSheet.create({
    //Estilos para componentes genericos
    sectionList: {
      flex: 1,
    },
    sectionListHeader: {
      flex: 1,
      paddingTop: 2,
      paddingBottom: 2,
      fontSize: 22,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sectionListItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
    }
  });

export const sectionListHeader = genericStyles.sectionListHeader
export const sectionListItem = genericStyles.sectionListItem
export default genericStyles
