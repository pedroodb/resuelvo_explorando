import { StyleSheet } from 'react-native'

const stylesMCC = StyleSheet.create({
  viewMCC:{
    flex:1,
    justifyContent:'space-between',
  },
  titleMCC: {
    textAlign:'center',
    fontSize:30,
  },
})

export const viewStyle = stylesMCC.viewMCC
export const titleStyle = stylesMCC.titleMCC

export default stylesMCC