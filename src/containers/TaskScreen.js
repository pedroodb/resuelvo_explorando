import React, { Component } from 'react'
import { Text, View, SectionList} from 'react-native'
import { DefaultButton, DefaultButtonTaskBar } from '../components'
import { sectionListHeader, sectionListItem } from '../components/styles/genericStyles'


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
      // para recibir parametros de otra pantalla
    const { navigation } = this.props;
    const elementsList = navigation.getParam('ElementsList');
      return (
        <View style={{ flex:1}}>
          <View style={{flex:2}}>
            <Text
             style={{fontSize:20, textAlign:'center'}}>
              Deberan recolectar aquellos elementos que posean un alto contenido de azucar
            </Text>
          </View>
          <View style={{alignItems: 'center', flex:3,}}>
          <SectionList
            sections={[
              {title: 'Elementos Recolectados', data:["Elemento1", "Elemento2", "Elemento3", "Elemento4", "Elemento5"]},
            ]}
            renderItem={({item}) => <Text style={sectionListItem} onPress={() => this.props.navigation.navigate('taskSelected')}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={sectionListHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
          </View>
          <View style={{alignItems: 'center', flex:2}} >
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
              onPress={() => this.props.navigation.push('Main')}
              title="Recolectar Elemento"
              />
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <DefaultButton
                title="Dejar Elemento"
                onPress={() => this.props.navigation.push('Main')}
              />
            </View>
            </View>
        </View>
      )
    }
  }



export default TaskScreen
