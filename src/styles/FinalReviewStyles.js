import { StyleSheet } from 'react-native'

const finalReviewStyles = StyleSheet.create({
    //Estilo de la pantalla de Review Final
    titleFR: {
        textAlign:'center',
        fontSize:40,
      },
      resultFR:{
        fontSize:20,
        marginLeft:20,
        margin:10,
      },
      viewFR:{
        flex:1,
        justifyContent:'space-around',
      },
  });

export const titleStyle = finalReviewStyles.titleFR
export const resultStyle = finalReviewStyles.resultFR
export const viewStyle = finalReviewStyles.viewFR
export default finalReviewStyles