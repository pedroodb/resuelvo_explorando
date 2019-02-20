import { StyleSheet } from 'react-native'

const finalReviewScreenStyles = StyleSheet.create({
  title: {
    textAlign:'center',
    fontSize:40,
  },
  result:{
    fontSize:20,
    marginLeft:20,
    margin:10,
  },
  finalReviewScreen:{
    flex:1,
    justifyContent:'space-around',
    margin:10
  },
});

export const result = finalReviewScreenStyles.result
export const finalReviewScreen = finalReviewScreenStyles.finalReviewScreen
export const title = finalReviewScreenStyles.title
export default finalReviewScreenStyles
