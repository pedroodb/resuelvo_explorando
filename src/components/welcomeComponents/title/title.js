import React, {Component} from 'react'
import { Text } from 'react-native'
import titleStyle from './titleStyle'

class Title extends Component {
  render() {
    return (
      <Text style={titleStyle.titleWS}>
        {this.props.title}
      </Text>
    )
  }
}

export default Title