import { StyleSheet } from 'react-native'

const stylesMCRC = StyleSheet.create({
  viewStyleMCRC: {
      flex:1,
      justifyContent:'space-between',
      margin:10,
  },
  titleStyleMCRC: {
      textAlign:'center',
      fontSize:20,
      margin:5,
  },
  answerStyleMCRC: {
      textAlign:'center',
      fontSize:20,
      margin:5,
  },
  rightStyleMCRC: {
      color:'green',
  },
  wrongStyleMCRC:{
      color:'red',
  },
})

export const viewStyle = stylesMCRC.viewStyleMCRC
export const titleStyle = stylesMCRC.titleStyleMCRC
export const answerStyle = stylesMCRC.answerStyleMCRC
export const rightStyle = stylesMCRC.rightStyleMCRC
export const wrongStyle = stylesMCRC.wrongStyleMCRC

export default stylesMCRC