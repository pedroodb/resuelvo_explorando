import React, { Component } from 'react'
import { Text, View, SectionList} from 'react-native'
import { DefaultButton, DefaultButtonTaskBar } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'
import { viewStyle } from './styles/TaskStyles'

//Pantalla de vista de tarea
class TaskScreen extends Component {

  static navigationOptions = {
    headerRight: (
      <DefaultButtonTaskBar
        onPress={() => alert('Hola Ale')}
        title="AYUDA"
      />
    ),
  };

    render() {
      const numT = this.props.navigation.getParam('num', 'NO-ID');
      return (
        <View style={viewStyle}>
        <View style={{flex:2}}>
          <Text style={{fontSize:30, textAlign:"center", }}>Tarea {numT}</Text>
          </View>
          <View style={{flex:3}}>
          <Text style={{fontSize:20, textAlign:"center", }} >Descripción {numT}</Text> 
          </View>
          <View style={{flex:2}}>
          <DefaultButton title="Resolver" onPress={() => this.props.navigation.navigate('Main',{res:numT})} >
          </DefaultButton>
          </View>
        </View>
      )
    }
  }

export default TaskScreen
