import React from 'react'
import { Button, View, Text, FlatList } from 'react-native'
import hasReadWritePermission from '../../helpers/permissionAskers'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      files: [],
    }
  }

  componentDidMount() {
    this.getConfigurations().then(
      (configurations) => this.setState(() => ({files: configurations}))
    )
  }

  async getConfigurations() {
    if(await hasReadWritePermission()) {
      return (await Expo.FileSystem.readDirectoryAsync(Expo.FileSystem.documentDirectory)).map((elem) => ({key:elem}))
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Elige una configuración entre las disponibles:</Text>
        <FlatList
          data={this.state.files}
          renderItem={({item}) => <Button title={item.key}/>}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Cargar nueva"
        />
      </View>
    );
  }
}

export default ModalScreen